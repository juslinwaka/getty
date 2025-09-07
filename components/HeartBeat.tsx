// components/HeartBeat.tsx
"use client";

import { motion } from "framer-motion";

interface HeartBeatProps {
  size?: number;
}

export default function HeartBeat({ size = 100 }: HeartBeatProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 0.8 }}
    >
      <path
        d="M10 30 Q 50 70 90 30"
        stroke="red"
        strokeWidth={3}
        fill="none"
      />
    </motion.svg>
  );
}
