"use client";

import React from "react";

// Define the props interface
interface ControlsProps {
  gridSize: number;
  setGridSize: React.Dispatch<React.SetStateAction<number>>;
  complexity: number;
  setComplexity: React.Dispatch<React.SetStateAction<number>>;
  setRegenerateGrid: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Controls({
  gridSize,
  setGridSize,
  complexity,
  setComplexity,
  setRegenerateGrid,
}: ControlsProps) {
  return (
    <div className="controls">
      <h1>Map Gen</h1>
      <p>Controls</p>
      <hr />
      <div className="input-group">
        <button
          onClick={() => {
            setRegenerateGrid(true);
          }}
        >
          Generate New Map
        </button>
      </div>
      <div className="input-group">
        <label htmlFor="gridSize">{`Grid Size: ${gridSize}`}</label>
        <input
          id="gridSize"
          type="range"
          min="0"
          max="75"
          step="5"
          value={gridSize}
          onChange={(e) => {
            setGridSize(Number(e.target.value));
          }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="complexity">{`Complexity: ${complexity}`}</label>
        <input
          id="complexity"
          type="range"
          min="1"
          max="2"
          step=".05"
          value={complexity}
          onChange={(e) => {
            setComplexity(Number(e.target.value));
          }}
        />
      </div>
    </div>
  );
}
