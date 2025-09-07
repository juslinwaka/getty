"use client";

import { useState } from "react";
import MemoryCard from "../components/MemoryCard";
import { memories } from "../data/memories";
import { AnimatePresence } from "framer-motion";
import ProgressBar from "../components/ProgressBar";

export default function Page() {
  const [currentId, setCurrentId] = useState(1);
  const currentMemory = memories.find((mem) => mem.id === currentId);

  const handleChoose = (nextId: number) => {
    setCurrentId(nextId);
  };

  return (
    <div style={{ padding: "20px" }}>
      {currentMemory && <ProgressBar current={currentId} total={memories.length} />}
      <AnimatePresence mode="wait">
        {currentMemory ? (
          <MemoryCard
            key={currentMemory.id}
            memory={currentMemory}
            onChoose={handleChoose}
          />
        ) : (
          <h2 style={{ textAlign: "center", marginTop: "50px" }}>
            End of Confessions 💖
          </h2>
        )}
      </AnimatePresence>
    </div>
  );
}
