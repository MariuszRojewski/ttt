import React from "react";
import Square from "./Square";

function Board({ squares, onClick }) {
  const allSquares = squares.map((square, index) => {
    return <Square key={index} value={square} onClick={() => onClick(index)} />;
  });

  return <div className="board">{allSquares}</div>;
}

export default Board;
