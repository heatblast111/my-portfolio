import { useEffect, useRef } from "react";
import "./bg-styles/test-anims.css";

export default function TestAnims({
    columns = 40,
    dotScale = 0.08,

    dotColor = "rgba(255,255,255,0.4)",
    gridColor = "rgba(255,255,255,0.08)",
    backgroundColor = "#0b0b0b",

    pulseSpeed = 0.03,
    showGrid = true
}) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const root = getComputedStyle(document.documentElement);

        const backgroundColor =
            root.getPropertyValue("--color-bg");

        const dotsRGB =
            root.getPropertyValue("--color-dot-rgb");

        const gridRGB =
            root.getPropertyValue("--color-grid-rgb");

        const gridAlpha =
            root.getPropertyValue("--color-grid-alpha");

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width, height;
        let spacing;
        let dotSize;
        let time = 0;

        let startX, startY, endX, endY;

        let mouseX = 0;
        let mouseY = 0;

        const handleMouse = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener("mousemove", handleMouse);

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;

            spacing = width / columns;
            dotSize = spacing * dotScale;

            startX = -spacing;
            startY = -spacing;

            endX = width + spacing;
            endY = height + spacing;
        };

        resize();
        window.addEventListener("resize", resize);

        const draw = () => {
            time += pulseSpeed;

            // background
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, width, height);

            // grid
            if (showGrid) {
                ctx.strokeStyle =
                    `rgba(${gridRGB}, ${gridAlpha})`;
                ctx.lineWidth = 1;

                for (let x = startX; x <= endX; x += spacing) {
                    ctx.beginPath();
                    ctx.moveTo(x, 0);
                    ctx.lineTo(x, height);
                    ctx.stroke();
                }

                for (let y = startY; y <= endY; y += spacing) {
                    ctx.beginPath();
                    ctx.moveTo(0, y);
                    ctx.lineTo(width, y);
                    ctx.stroke();
                }
            }

            // dots
            for (let x = startX; x <= endX; x += spacing) {
                for (let y = startY; y <= endY; y += spacing) {

                    const pulse =
                        Math.sin(time + x * 0.01 + y * 0.01) * 0.5 + 0.5;

                    let radius = dotSize + pulse * dotSize;
                    let alpha = 0.4;

                    // -------------------------
                    // mouse glow (tight)
                    // -------------------------
                    const dxMouse = x - mouseX;
                    const dyMouse = y - mouseY;
                    const mouseDist = Math.sqrt(
                        dxMouse * dxMouse + dyMouse * dyMouse
                    );

                    const glowRadius = spacing * 2.4;
                    const influence = Math.max(
                        0,
                        1 - mouseDist / glowRadius
                    );

                    radius += influence * dotSize * 1.6;
                    alpha += influence * 0.45;

                    // -------------------------
                    // strong fade edges
                    // -------------------------
                    const dx = x - width / 2;
                    const dy = y - height / 2;

                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist =
                        Math.sqrt(width * width + height * height) / 2;

                    const fadeStart = maxDist * 0.75;

                    let fade = 1;

                    if (dist > fadeStart) {
                        fade =
                            1 -
                            (dist - fadeStart) /
                            (maxDist - fadeStart);
                    }

                    alpha *= 0.6 + fade * 0.4;

                    // clamp
                    alpha = Math.min(alpha, 0.85);

                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${dotsRGB}, ${alpha})`;;
                    ctx.fill();
                }
            }

            requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouse);
        };
    }, [
        columns,
        dotScale,
        dotColor,
        gridColor,
        backgroundColor,
        pulseSpeed,
        showGrid
    ]);

    return (
        <canvas

            ref={canvasRef}
            className="test-anims"
        />
    );
}