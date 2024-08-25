"use client";

import React from "react";
import Cell from "./Cell";

const gridAlgorithm = (
  grid,
  cell,
  rowIndex,
  cellIndex,
  removeIsolatedCells
) => {
  // Cell values adjacent to the current cell.
  const adjacentTop = grid[rowIndex - 1]?.[cellIndex];
  const adjacentRight = grid[rowIndex]?.[cellIndex + 1];
  const adjacentBottom = grid[rowIndex + 1]?.[cellIndex];
  const adjacentLeft = grid[rowIndex]?.[cellIndex - 1];

  // Removes Isolated Cells
  if (removeIsolatedCells) {
    const isIsolated =
      cell !== adjacentTop &&
      cell !== adjacentRight &&
      cell !== adjacentBottom &&
      cell !== adjacentLeft;
    if (isIsolated) {
      grid[rowIndex][cellIndex] = cell === 1 ? 0 : 1;
    }
  }

  // Cell Data
  return {
    value: cell,
    top: cell === adjacentTop ? "borderless-top" : "",
    right: cell === adjacentRight ? "borderless-right" : "",
    bottom: cell === adjacentBottom ? "borderless-bottom" : "",
    left: cell === adjacentLeft ? "borderless-left" : "",
  };
};

export default function Grid({ grid, removeIsolatedCells }) {
  return (
    <>
      {grid && (
        <table className="grid">
          <tbody>
            {grid.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  const cellData = gridAlgorithm(
                    grid,
                    cell,
                    rowIndex,
                    cellIndex,
                    removeIsolatedCells
                  );
                  return (
                    <Cell
                      key={`${rowIndex}-${cellIndex}`}
                      id={`${rowIndex}-${cellIndex}`}
                      cellData={cellData}
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
