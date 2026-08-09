import { useEffect, useRef } from "react";
import "./bg-styles/blob-background.css";

function BlobBackground() {

    const canvasRef = useRef(null);

    useEffect(() => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resize = () => {

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();

        window.addEventListener("resize", resize);

        const blobs = [

            {
                x: window.innerWidth * 0.3,
                y: window.innerHeight * 0.4,
                radius: 220,
                speedX: 0.3,
                speedY: 0.2
            },

            {
                x: window.innerWidth * 0.7,
                y: window.innerHeight * 0.6,
                radius: 300,
                speedX: -0.25,
                speedY: 0.15
            }
        ];

        let animationFrame;

        const animate = () => {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

            const spacing = 30;

            blobs.forEach(blob => {

                blob.x += blob.speedX;
                blob.y += blob.speedY;

                if (
                    blob.x < 0 ||
                    blob.x > canvas.width
                ) {
                    blob.speedX *= -1;
                }

                if (
                    blob.y < 0 ||
                    blob.y > canvas.height
                ) {
                    blob.speedY *= -1;
                }
            });

            for (
                let x = 0;
                x < canvas.width;
                x += spacing
            ) {

                for (
                    let y = 0;
                    y < canvas.height;
                    y += spacing
                ) {

                    let size = 1.5;

                    blobs.forEach(blob => {

                        const dx = x - blob.x;
                        const dy = y - blob.y;

                        const distance =
                            Math.sqrt(
                                dx * dx +
                                dy * dy
                            );

                        const influence =
                            Math.max(
                                0,
                                1 -
                                distance /
                                blob.radius
                            );

                        size += influence * 4;
                    });

                    ctx.beginPath();

                    ctx.arc(
                        x,
                        y,
                        size,
                        0,
                        Math.PI * 2
                    );

                    ctx.fillStyle =
                        "rgba(0,0,0,0.4)";

                    ctx.fill();
                }
            }

            animationFrame =
                requestAnimationFrame(
                    animate
                );
        };

        animate();

        return () => {

            cancelAnimationFrame(
                animationFrame
            );

            window.removeEventListener(
                "resize",
                resize
            );
        };

    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="blob-background"
        />
    );
}

export default BlobBackground;