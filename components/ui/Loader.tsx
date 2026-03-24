"use client";

import BruketIcon from "../BruketIcon";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <BruketIcon size={64} variant="dark" animated />
    </div>
  );
}