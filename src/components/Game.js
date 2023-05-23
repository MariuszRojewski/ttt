import React from "react";
import Board from "./Board";
import { calculateWinner } from "../helpers";

const Game = () => {
  const [history, setHistory] = React.useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = React.useState(0);
  const [player, setPlayer] = React.useState(true);
  const winner = calculateWinner(history[stepNumber]);

  function handlePlayerSquareSelect(index) {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];

    if (squares[index] || winner) return;

    squares[index] = player ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setPlayer(!player);
  }

  function newGame() {
    setHistory([Array(9).fill(null)]);
    setPlayer(true);
    setStepNumber(0);
  }

  function timeTravel(step) {
    setStepNumber(step);
    setPlayer(step % 2 === 0);
  }

  const lineOfTime = history.map((_step, move) => {
    const destination = move ? `Ruchu numer ${move}` : "Ruch otwierający";
    return (
      <li key={move}>
        <button onClick={() => timeTravel(move)}>{destination}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <Board squares={history[stepNumber]} onClick={handlePlayerSquareSelect} />
      {winner ? (
        <div className="winner">
          <p>Wygrywa gracz: {winner}</p>
        </div>
      ) : (
        <div className="player">
          <p>Ruch gracza: {player ? "X" : "O"}</p>
        </div>
      )}
      <div className="time--travel">
        <ul>{lineOfTime}</ul>
        {winner && <button onClick={newGame}>Nowa gra</button>}
      </div>
    </div>
  );
};

export default Game;
