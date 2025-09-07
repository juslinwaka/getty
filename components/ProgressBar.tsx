// components/ProgressBar.tsx
"use client";

import { LinearProgress, Box, Typography } from "@mui/material";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;
  return (
    <Box sx={{ width: "100%", mb: 3 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        Memory {current} of {total}
      </Typography>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}
