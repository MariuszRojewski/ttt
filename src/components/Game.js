import React from "react";

import Board from "./Board";
import { calculateWinner } from "../helpers";

const styles = {
  width: "200px",
  margin: "20px auto",
};

const Game = () => {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = React.useState(true);
  const winner = calculateWinner(board);

  function handleClick(i) {
    const boardCopy = [...board];
    // Blokada gry w sytuacji gdzier gracz wygrał
    // albo kliknął wcześniej zajęte pole
    if (winner || boardCopy[i]) return;
    // Wszadź X albo O do kliknietego kwadratu
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  }

  function renderMoves() {
    return (
      <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
    );
  }

  function jumpTp() {}

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Palyer: " + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
