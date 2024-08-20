"use client";

import React, { useEffect, useState } from "react";
import Cell from "./Cell";
import { taunts } from "../taunts";

const GRID_SIZE = 25;
const GAME_COLS = GRID_SIZE;
const GAME_ROWS = GRID_SIZE;

const COMPLEXITY = 2; // shapes cell content.
// Complexity 2 result in binary board.

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function genArray(complexity, amount) {
  const arr = [];
  for (let i = 0; i < amount; i++) {
    arr.push(getRandomInt(complexity));
  }
  // console.log(arr);
  return arr;
  // new Array(
  //   getRandomInt(complexity),
  //   getRandomInt(complexity),
  //   getRandomInt(complexity),
  //   getRandomInt(complexity),
  //   getRandomInt(complexity),
  //   getRandomInt(complexity),
  //   getRandomInt(complexity),
  //   getRandomInt(complexity)
  // );
}

function genGameRows(amount, COMPLEXITY) {
  const arr = [];
  for (let i = 0; i < amount; i++) {
    arr.push(genArray(COMPLEXITY, GAME_COLS));
  }
  // console.log(arr);
  return arr;
}

const INITIAL_GAME_STATE = genGameRows(GAME_ROWS, COMPLEXITY);
// new Array(
//   genArray(COMPLEXITY, GAME_COLS),
//   genArray(COMPLEXITY, GAME_COLS),
//   genArray(COMPLEXITY, GAME_COLS),
//   genArray(COMPLEXITY, GAME_COLS),
//   genArray(COMPLEXITY, GAME_COLS),
//   genArray(COMPLEXITY, GAME_COLS),
//   genArray(COMPLEXITY, GAME_COLS),
//   genArray(COMPLEXITY, GAME_COLS)
// );

export default function Board() {
  // const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [gameState, setGameState] = useState(null);

  const [borderState, SetBorderState] = useState("null");
  const [isOver, setIsOver] = useState(false);
  const [fails, setFails] = useState(0);

  // Map over rows and cells, updating the selected cell.
  const handleGameUpdate = (r, c) => {
    setGameState((prevState) => {
      return prevState.map((row, rowIndex) =>
        rowIndex == r
          ? row.map((cell, cellIndex) => (cellIndex == c ? (cell = 5) : cell))
          : row
      );
    });
    setIsOver(true);
  };

  const handleNewGame = () => {
    if (isOver) {
      setGameState(
        genGameRows(GAME_ROWS, COMPLEXITY)
        // new Array(
        //   genArray(5),
        //   genArray(5),
        //   genArray(5),
        //   genArray(5),
        //   genArray(5),
        //   genArray(5),
        //   genArray(5),
        //   genArray(5)
        // )
      );
      setIsOver(false);
      setFails((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    if (isOver) {
      setGameState((prevState) => {
        return prevState.map((row) =>
          row.map((cell) => (cell === 0 ? 1 : cell))
        );
      });
    }
  }, [isOver]);

  // useEffect(() => {
  //   console.log("gameState:", gameState);
  //   SetBorderState(() => {
  //     gameState.map((row, rowIndex) => {
  //       row.map((cell, cellIndex) => {
  //         const currentCellOrigin = [rowIndex, cellIndex];
  //         const currentCell = {
  //           value: cell,
  //           origin: currentCellOrigin,
  //           top:
  //             gameState[currentCellOrigin[0] - 1] !== undefined
  //               ? gameState[currentCellOrigin[0] - 1][currentCellOrigin[1]]
  //               : undefined,

  //           right:
  //             gameState[currentCellOrigin[1] + 1] !== undefined
  //               ? gameState[currentCellOrigin[0]][currentCellOrigin[1] + 1]
  //               : undefined,

  //           bottom:
  //             gameState[currentCellOrigin[0] + 1] !== undefined
  //               ? gameState[currentCellOrigin[0] + 1][currentCellOrigin[1]]
  //               : undefined,

  //           left:
  //             gameState[currentCellOrigin[1] - 1] !== undefined
  //               ? gameState[currentCellOrigin[0]][currentCellOrigin[1] - 1]
  //               : undefined,
  //         };
  //         console.log("current Cell: ", currentCell);
  //         return currentCell;
  //       });
  //     });
  //   });
  // }, [gameState]);

  useEffect(() => {
    setGameState(genGameRows(GAME_ROWS, COMPLEXITY));
  }, []);

  return (
    <>
      {gameState && (
        <table className="board">
          <tbody>
            {/*Map over initial game state, generating all rows and cells*/}
            {gameState.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  const currentCellOrigin = [rowIndex, cellIndex];
                  const currentCell = {
                    value: cell,
                    origin: currentCellOrigin,
                    top:
                      gameState[currentCellOrigin[0] - 1] !== undefined
                        ? gameState[currentCellOrigin[0] - 1][
                            currentCellOrigin[1]
                          ]
                        : undefined,

                    right:
                      gameState[currentCellOrigin[1] + 1] !== undefined
                        ? gameState[currentCellOrigin[0]][
                            currentCellOrigin[1] + 1
                          ]
                        : undefined,

                    bottom:
                      gameState[currentCellOrigin[0] + 1] !== undefined
                        ? gameState[currentCellOrigin[0] + 1][
                            currentCellOrigin[1]
                          ]
                        : undefined,

                    left:
                      gameState[currentCellOrigin[1] - 1] !== undefined
                        ? gameState[currentCellOrigin[0]][
                            currentCellOrigin[1] - 1
                          ]
                        : undefined,
                  };
                  return (
                    <Cell
                      key={[rowIndex, cellIndex]}
                      id={[rowIndex, cellIndex]}
                      currentCell={currentCell}
                      gameState={gameState}
                      isOver={isOver}
                      onGameUpdate={() => handleGameUpdate(rowIndex, cellIndex)}
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
