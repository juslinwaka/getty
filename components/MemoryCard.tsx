"use client";

import { Card, CardContent, Typography, Button, Stack } from "@mui/material";
import { Memory } from "../data/memories";
import { motion } from "framer-motion";

interface MemoryCardProps {
  memory: Memory;
  onChoose: (nextId: number) => void;
}

export default function MemoryCard({ memory, onChoose }: MemoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Card sx={{ maxWidth: 600, margin: "auto", mt: 5, textAlign: "center" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {memory.title}
          </Typography>
          <div style={{ marginTop: 16 }}>{memory.sketch}</div>
          <Typography sx={{ mt: 3 }}>{memory.text}</Typography>
          <Stack direction="column" spacing={2} sx={{ mt: 4 }}>
            {memory.options.map((option, index) => (
              <Button
                key={index}
                variant="contained"
                onClick={() => onChoose(option.nextId)}
              >
                {option.text}
              </Button>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
}
