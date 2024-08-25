"use client";

import React from "react";
import Cell from "./Cell";

// Function to process the entire grid and apply the gridAlgorithm logic
const processGrid = (grid, removeIsolatedCells) => {
  const newGrid = grid.map((row, rowIndex) =>
    row.map((cell, cellIndex) => {
      const adjacentTop = grid[rowIndex - 1]?.[cellIndex];
      const adjacentRight = grid[rowIndex]?.[cellIndex + 1];
      const adjacentBottom = grid[rowIndex + 1]?.[cellIndex];
      const adjacentLeft = grid[rowIndex]?.[cellIndex - 1];

      if (removeIsolatedCells) {
        const isIsolated =
          cell !== adjacentTop &&
          cell !== adjacentRight &&
          cell !== adjacentBottom &&
          cell !== adjacentLeft;

        return isIsolated ? (cell === 1 ? 0 : 1) : cell;
      }

      return cell;
    })
  );

  return newGrid;
};

// Function to calculate the cell data for rendering
const calculateCellData = (grid, cell, rowIndex, cellIndex) => ({
  value: cell,
  top: cell === grid[rowIndex - 1]?.[cellIndex] ? "borderless-top" : "",
  right: cell === grid[rowIndex]?.[cellIndex + 1] ? "borderless-right" : "",
  bottom: cell === grid[rowIndex + 1]?.[cellIndex] ? "borderless-bottom" : "",
  left: cell === grid[rowIndex]?.[cellIndex - 1] ? "borderless-left" : "",
});

export default function Grid({ grid, removeIsolatedCells }) {
  // Process the grid before rendering
  const processedGrid = processGrid(grid, removeIsolatedCells);

  return (
    <table className="grid">
      <tbody>
        {processedGrid.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => {
              const cellData = calculateCellData(
                processedGrid,
                cell,
                rowIndex,
                cellIndex
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
  );
}
