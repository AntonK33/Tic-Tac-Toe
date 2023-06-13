import React from 'react';
import { useState } from 'react';
import { Board } from './Board/Board';

export const App = () => {
  const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xNext, setXNext] = useState(true);
    const currentSquares = history[history.length - 1];
    const handlePlay = nextSquares => {
      setHistory([...history, nextSquares]);
      setXNext(!xNext);
    };

    const jampTo = nextMove => {
      if (nextMove === 0) {
        setHistory([Array(9).fill(null)]);
      } else {
        let deleteHistory = history.slice(0, nextMove);
        setHistory(deleteHistory);
      }
    };

    const moves = history.map((square, move) => {
      let description;
      if (move <= 0) {
        description = 'Start the game';
      } else {
        description = 'Step #' + move;
      }

      return (
        <li key={move}>
          <button
            onClick={() => {
              jampTo(move);
            }}
          >
            {description}
          </button>
        </li>
      );
    });

    return (
      <div
        style={{
          display: 'flex',
          //flexDirection: 'column',
          justifyContent: 'center',
          //alignItems: 'center',
        }}
      >
        <div>
          <Board xNext={xNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  };

  return <Game />;
};
