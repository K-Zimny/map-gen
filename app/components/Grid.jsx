"use client";

import React, { useEffect, useState } from "react";
import Cell from "./Cell";

const GRID_SIZE = 20;
const COMPLEXITY = 1.45; // Complexity 2 results in a binary board

function genGrid(rows, cols, complexity) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function genArray(complexity, length) {
    return Array.from({ length }, () => getRandomInt(complexity));
  }

  return Array.from({ length: rows }, () => genArray(complexity, cols));
}

export default function Grid() {
  const [grid, setGrid] = useState(null);

  useEffect(() => {
    setGrid(genGrid(GRID_SIZE, GRID_SIZE, COMPLEXITY));
  }, []);

  return (
    <>
      {grid && (
        <table className="grid">
          <tbody>
            {grid.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  const cellData = {
                    value: cell,
                    origin: [rowIndex, cellIndex],
                    top: grid[rowIndex - 1]?.[cellIndex],
                    right: grid[rowIndex]?.[cellIndex + 1],
                    bottom: grid[rowIndex + 1]?.[cellIndex],
                    left: grid[rowIndex]?.[cellIndex - 1],
                  };
                  return (
                    <Cell
                      key={`${rowIndex}-${cellIndex}`}
                      id={[rowIndex, cellIndex]}
                      cellData={cellData}
                      grid={grid}
                    />
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
