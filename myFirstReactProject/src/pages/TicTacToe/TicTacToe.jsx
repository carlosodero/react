import { useState, useEffect } from 'react';

import GameGrid from '../../components/TicTacToe/Grid.js';
import PlayerButton from '../../components/TicTacToe/PlayerButtons.js';

import './TicTacToe.css';

function TicTacToe() {

  const boardGrid = ['', '', '', '', '', '', '', '', ''];
  const [board, setBoard] = useState(boardGrid);
  const [selectedCell, setSelectedCell] = useState();
  const [gameTurn, setGameTurn] = useState('circle');
  const [token, setToken] = useState();
  const [startPlay, setStartPlay] = useState(false);
  const [error, seterror] = useState();
  const [winner, setwinner] = useState();


  useEffect(() => {
    if (gameTurn === 'circle') {
      const boardCopy = [...board];
      boardCopy[selectedCell] = '0';
      setBoard(boardCopy);
    } else {
      const boardCopy = [...board];
      boardCopy[selectedCell] = 'X';
      setBoard(boardCopy);
    }
  }, [selectedCell]);

  useEffect(() => {
    if (gameTurn === 'circle' && board[selectedCell] === '0') {
      setGameTurn('square');
    } else {
      setGameTurn('circle');
    }
    // console.log(gameTurn);
    console.log('UseEffectBoard', board);
  }, [board]);

  // useEffect(() => {
  //   console.log(board[selectedCell]);
  //   if (board[selectedCell] === '0') {
  //     setToken(<div><PlayerButton type='circle'></PlayerButton></div>);
  //   } else if (board[selectedCell] === 'X') {
  //     setToken(<div><PlayerButton type='square'></PlayerButton></div>);
  //   }
  // }, [gameTurn]);

  // useEffect(() => {
  //   console.log(board[selectedCell]);
  //   if (board[selectedCell] === '0') {
  //     setToken(<div><PlayerButton type='circle'></PlayerButton></div>);
  //   } else if (board[selectedCell] === 'X') {
  //     setToken(<div><PlayerButton type='square'></PlayerButton></div>);
  //   }
  // }, [gameTurn]);


  return (
    <>
      <div className='webContainer'>
        <h1 style={{ fontWeight: 'Bold' }}>Tic Tac Toe</h1>
        <h2 style={{ fontWeight: 'Bold' }}>Turno de</h2>
        <div><PlayerButton type={gameTurn}></PlayerButton></div>
        <br></br>
        <div className='row gridContainer'>
          {board.map((pos, index) =>
            <GameGrid
              key={index}
              className='col-4'
              onClick={() =>
                setSelectedCell(index)}>
              <PlayerButton type={index}></PlayerButton>
            </GameGrid>
          )}
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
