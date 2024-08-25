"use client";

import React from "react";

// Define the props interface
interface ControlsProps {
  gridSize: number;
  setGridSize: React.Dispatch<React.SetStateAction<number>>;
  complexity: number;
  setComplexity: React.Dispatch<React.SetStateAction<number>>;
  setRegenerateGrid: React.Dispatch<React.SetStateAction<boolean>>;
  removeIsolatedCells: boolean;
  setRemoveIsolatedCells: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Controls({
  gridSize,
  setGridSize,
  complexity,
  setComplexity,
  setRegenerateGrid,
  removeIsolatedCells,
  setRemoveIsolatedCells,
}: ControlsProps) {
  return (
    <div className="controls">
      <h1>Map Gen</h1>
      <p>Controls</p>
      <hr />
      <div className="input-group">
        <label htmlFor="gridSize">{`Grid Size: ${gridSize} X ${gridSize}`}</label>
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
        <div className="range-label">
          <p>0</p>
          <p>75</p>
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="complexity">{`Complexity*: ${complexity}`}</label>
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
        <div className="range-label">
          <p>Continent</p>
          <p>Archipelago</p>
        </div>
        <p className="text-sm">
          *Effects the variation of individual cells and layout.
        </p>
      </div>
      <div className="input-group">
        <label htmlFor="removeIsolatedCells">Remove Isolated Cells</label>
        <input
          id="removeIsolatedCells"
          className="w-fit"
          type="checkbox"
          checked={removeIsolatedCells}
          onClick={() => {
            setRemoveIsolatedCells((prevState) => !prevState);
          }}
        ></input>
      </div>
      <div className="input-group">
        <button
          onClick={() => {
            setRegenerateGrid(true);
          }}
        >
          Generate New Map
        </button>
      </div>
    </div>
  );
}
