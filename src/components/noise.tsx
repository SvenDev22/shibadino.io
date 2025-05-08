import React from "react";

interface NoiseProps {
  opacity: number;
  backgroundSize: number;
  borderRadius: number;
}

export default function Noise({
  opacity,
  backgroundSize,
  borderRadius,
}: NoiseProps) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        borderRadius,
        opacity,
        backgroundSize,
        backgroundImage: "url(images/noise.png)",
        backgroundRepeat: "repeat",
        pointerEvents: "none",
      }}
    />
  );
}
