import { useState } from 'react';
import css from './Board.module.css';

const Square = ({ onChange, value }) => {
  return (
    <button className={css.square_style} onClick={onChange}>
      {value}
    </button>
  );
};
export const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xNext, setXNext] = useState(true);
  console.log(squares);

  const hendlerClick = i => {
    if (squares[i] || nextPlayer) {
      return;
    }
    let nextSquares = squares;
    if (xNext) {
      nextSquares[i] = 'x';
    } else {
      nextSquares[i] = '0';
    }

    setSquares(nextSquares);
    setXNext(!xNext);
    //console.log(squares);
    calculateWinner(squares);
  };
  let show;
  let winner = nextPlayer;

  if (winner) {
    show = 'Winner: ' + winner;
  } else {
    show = 'Next player: ';
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <p>{show}</p>
      </div>
      <div>
        <Square
          value={squares[0]}
          onChange={() => {
            hendlerClick(0);
          }}
        />

        <Square
          value={squares[1]}
          onChange={() => {
            hendlerClick(1);
          }}
        />

        <Square
          value={squares[2]}
          onChange={() => {
            hendlerClick(2);
          }}
        />
      </div>

      <div>
        <Square
          value={squares[3]}
          onChange={() => {
            hendlerClick(3);
          }}
        />

        <Square
          value={squares[4]}
          onChange={() => {
            hendlerClick(4);
          }}
        />

        <Square
          value={squares[5]}
          onChange={() => {
            hendlerClick(5);
          }}
        />
      </div>

      <div>
        <Square
          value={squares[6]}
          onChange={() => {
            hendlerClick(6);
          }}
        />

        <Square
          value={squares[7]}
          onChange={() => {
            hendlerClick(7);
          }}
        />

        <Square
          value={squares[8]}
          onChange={() => {
            hendlerClick(8);
          }}
        />
      </div>
    </div>
  );
};

let nextPlayer;

const calculateWinner = squares => {
  const line = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [8, 4, 0],
    [6, 4, 2],
    [2, 1, 0],
    [5, 4, 3],
    [8, 7, 6],
    [6, 3, 0],
    [7, 4, 1],
    [8, 5, 2],
  ];

  // const lineMap = line.map(lin => lin);
  // const [a, b, c, d] = lineMap;
  // console.log(lineMap);
  // console.log(a, b, c, d);
  // if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //   return squares[a];
  // } else {
  //   return;
  // }

  for (let i = 0; i < line.length; i++) {
    const [a, b, c] = line[i];
    console.log(line[i]);
    console.log(a, b, c);
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return (nextPlayer = squares[a]);
    }
    //else {
    //     return;
    //   }
  }
};
