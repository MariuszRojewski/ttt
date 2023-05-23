import React from "react";
import Board from "./Board";
import { calculateWinner } from "../helpers";

const Game = () => {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [player, setPlayer] = React.useState(true);
  const winner = calculateWinner(squares);

  function handlePlayerSquareSelect(index) {
    const board = [...squares];

    if (board[index] || winner) return;

    board[index] = player ? "X" : "O";
    setSquares(board);
    setPlayer(!player);
  }

  function newGame() {
    setSquares(Array(9).fill(null));
    setPlayer(true);
  }

  return (
    <div className="game">
      <Board squares={squares} onClick={handlePlayerSquareSelect} />
      {winner ? (
        <div className="winner">
          <p>Wygrywa gracz: {winner}</p>
        </div>
      ) : (
        <div className="player">
          <p>Ruch gracza: {player ? "X" : "O"}</p>
        </div>
      )}
      {winner && <button onClick={newGame}>Nowa gra</button>}
    </div>
  );
};

export default Game;
