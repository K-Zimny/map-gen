"use client";

import React, { useState, useEffect } from "react";
import Grid from "@/app/components/Grid";
import Controls from "@/app/components/Controls";

function genGrid(rows: number, cols: number, complexity: number): number[][] {
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  function genArray(complexity: number, length: number): number[] {
    return Array.from({ length }, () => getRandomInt(complexity));
  }

  const generatedGrid = Array.from({ length: rows }, () =>
    genArray(complexity, cols)
  );

  return generatedGrid;
}

export default function Home() {
  const [grid, setGrid] = useState<number[][] | null>(null);
  const [gridSize, setGridSize] = useState(20);
  const [complexity, setComplexity] = useState(1.45);
  const [regenerateGrid, setRegenerateGrid] = useState(false);
  const [removeIsolatedCells, setRemoveIsolatedCells] = useState(true);

  useEffect(() => {
    setGrid(genGrid(gridSize, gridSize, complexity));
    setRegenerateGrid(false);
  }, [gridSize, complexity, regenerateGrid, removeIsolatedCells]);

  return (
    <div className="App">
      {grid && (
        <>
          <Controls
            gridSize={gridSize}
            setGridSize={setGridSize}
            complexity={complexity}
            setComplexity={setComplexity}
            setRegenerateGrid={setRegenerateGrid}
            removeIsolatedCells={removeIsolatedCells}
            setRemoveIsolatedCells={setRemoveIsolatedCells}
          />
          <Grid grid={grid} removeIsolatedCells={removeIsolatedCells} />
        </>
      )}
    </div>
  );
}
