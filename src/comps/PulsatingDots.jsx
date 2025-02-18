import React from "react";
import "./css/PulsatingDots.css";

const PulsatingDots = () => {
    const rows = 30; // Number of rows
    const columns = 32; // Number of columns

    const generateRandomAnimationProps = () => {
        const duration = (Math.random() * 1.5 + 2).toFixed(2); // Random duration between 1s and 3.5s
        const delay = (Math.random() * 2).toFixed(2); // Random delay between 0s and 1s
        return { duration, delay };
    };

    return (
        <div className="pulsating-dots-container">
            {Array.from({ length: rows * columns }).map((_, index) => {
                const { duration, delay } = generateRandomAnimationProps();
                return (
                    <div
                        key={index}
                        className="dot"
                        style={{
                            animationDuration: `${duration}s`,
                            animationDelay: `${delay}s`
                        }}
                    />
                );
            })}
        </div>
    );
};

export default PulsatingDots;
