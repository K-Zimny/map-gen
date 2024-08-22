"use client";

import React from "react";
import Cell from "./Cell";

export default function Grid({ grid }) {
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
