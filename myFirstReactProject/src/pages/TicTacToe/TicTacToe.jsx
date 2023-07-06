import { useState, useEffect } from 'react';

import GameGrid from '../../components/TicTacToe/Grid.js';
import PlayerButton from '../../components/TicTacToe/PlayerButtons.js';

import './TicTacToe.css';

function TicTacToe() {

  const boardGrid = ['', '', '', '', '', '', '', '', ''];
  const [board, setBoard] = useState(boardGrid);
  const [selectedCell, setSelectedCell] = useState();
  const [gameTurn, setGameTurn] = useState('circle');
  const [startPlay, setStartPlay] = useState(false);
  const [gamePlay, setgamePlay] = useState();
  const [error, seterror] = useState();
  const [winner, setwinner] = useState();


  useEffect(() => {
    console.log('board', board);
    if (gameTurn === 'circle') {
      let boardCopy = [...board];
      boardCopy[selectedCell] = '0';
      console.log('boardCopy', boardCopy);
      setBoard(boardCopy);
      console.log('board[selectedCell]', board[selectedCell]);
    } else if (gameTurn === 'square') {
      let boardCopy = [...board];
      boardCopy[selectedCell] = 'X';
      setBoard(boardCopy);
    }
  }, [selectedCell]);

  useEffect(() => {
    gameTurn === 'circle' ? setGameTurn('square') : setGameTurn('circle');
    console.log(gameTurn);
  }, [board]);



  return (
    <>
      <div className='webContainer'>
        <h1 style={{ fontWeight: 'Bold' }}>Tic Tac Toe</h1>
        <h2 style={{ fontWeight: 'Bold' }}>Turno de</h2>
        <div><PlayerButton type={gameTurn}></PlayerButton></div>
        <br></br>
        <div className='row gridContainer'>
          {board.map((pos, index) =>
            <GameGrid key={index} className='col-4' onClick={() =>
              setSelectedCell(index)}></GameGrid>
          )}
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
