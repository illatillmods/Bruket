"use client";

import BruketIcon from "../BruketIcon";

export default function Hero() {
  return (
    <div style={{ padding: "40px" }}>
      <BruketIcon size={160} variant="dark" />
      <BruketIcon size={80} variant="light" animated={false} />
    </div>
  );
}