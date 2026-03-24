"use client";

import React from "react";
import "./bruket-icon.css";

type Props = {
  size?: number;
  variant?: "light" | "dark";
  animated?: boolean;
};

export default function BruketIcon({
  size = 128,
  variant = "light",
  animated = true,
}: Props) {
  return (
    <div
      className={`bruket-wrapper ${variant} ${
        animated ? "is-animated" : ""
      }`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 256 256" className="bruket-svg">
        {/* Background */}
        <rect
          width="256"
          height="256"
          className="bg"
        />

        {/* Ground */}
        <ellipse cx="128" cy="170" rx="70" ry="6" className="ground" />

        {/* Buildings */}
        <rect x="70" y="120" width="40" height="40" rx="4" className="b1" />
        <rect x="110" y="130" width="40" height="30" rx="4" className="b2" />
        <rect x="150" y="120" width="40" height="40" rx="4" className="b3" />

        {/* Chimney */}
        <rect x="122" y="90" width="12" height="50" rx="3" className="chimney" />

        {/* Smoke */}
        <g className="smoke">
          {[...Array(7)].map((_, i) => (
            <rect
              key={i}
              x={120 + i * 12}
              y={80 - i * 4}
              width={10 - i * 0.5}
              height={4}
              rx="2"
              className="smoke-block"
              style={{
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}