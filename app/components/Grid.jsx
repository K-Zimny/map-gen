"use client";

import React from "react";
import Cell from "./Cell";

export default function Grid({ grid }) {
  // const newGrid =

  /**
   * The issus is that the cell checking is happening against the original grid array, not the new cell values that are being update. Updating the original grid array will solve this issue. (tested and it does work.)
   */

  // grid = [
  //   [1, 1, 1],
  //   [1, 1, 1],
  // ];
  return (
    <>
      {grid && (
        <table className="grid">
          <tbody>
            {grid.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  console.log("cell", cell);
                  if (cell == 1) {
                    grid[rowIndex][cellIndex] = 0;
                  }
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
