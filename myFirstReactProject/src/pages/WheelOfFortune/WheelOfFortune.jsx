import { useState, useEffect } from 'react';
import './WheelOfFortune.css';

function WheelOfFortune() {
  const scores = [10, 20, 50, 100, 200, 500];
  const [film, setFilm] = useState('');
  const [encriptedFilm, setencriptedFilm] = useState('');
  const [points, setPoints] = useState();
  const [letters, setLetters] = useState();
  const [playerResult, setPlayerResult] = useState();
  const [playerPoints, setPlayerPoints] = useState(0);


  useEffect(() => {
    const splitedFilm = film.split('');
    const splitedEncriptedFilm = splitedFilm.map(() => ' _');
    setencriptedFilm(splitedEncriptedFilm);
  }, [film]);

  function getFilm(e) {
    e.target.value !== '' && setFilm(e.target.value);
  }

  function getPoints() {
    const points = scores[Math.floor(Math.random() * scores.length)];
    setPoints(points);
  }

  function checkFilm(e) {
    if (points) {
      checkLetter(e);
    } else {
      e.target.value === film ? setPlayerResult('You Win Boy!!!') : setPlayerResult('You Loose Fool!!!');
    }
  }

  function checkLetter(e) {
    const letterToCheck = e.target.value;
    let count = 1;
    // console.log('lettersFunctionCheckLetters', letters);
    for (let i = 0; i < encriptedFilm.length; i++) {
      const letterToCompare = film[i];
      const lettersToDiscover = encriptedFilm;
      if (letterToCheck === letterToCompare) {
        count =+ 1;
        console.log('count', count);
        setPlayerPoints(points*count);
        lettersToDiscover[i] = letterToCheck;
      }
      setLetters(lettersToDiscover);
    }
    console.log('lettersAfterCheckLetter', letters);
  }

  return (
    <>
      <div className='webContainer'>
        <h1>The Wheel of Fortune</h1>
        <div>{letters}</div>
        <br></br>
        <br></br>
        {!film &&
          <input type="password" placeholder='Insert a Film to Play' onBlur={(e) =>
            getFilm(e)} />
        }
        {film && !playerResult &&
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Score {playerPoints} points</h2>
            <h3>You have failed 0 times</h3>
            <br></br>
            <br></br>
            <div>{letters}</div>
            <br></br>
            {!points && <button onClick={() => getPoints()}>SPIN THE WHEEL</button>}
            <br></br>
            {points && <h3>You are Playing for <span style={{ fontWeight: 'bold', backgroundColor: 'red' }}>{points}</span> points</h3>}
            <br></br>
            <div></div>
            <input type="text" placeholder={!points ? 'Insert Answer' : 'Insert Letter'} onBlur={(e) =>
              checkFilm(e)} />
          </div>}
        {playerResult &&
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ color: 'yellow' }}>{playerResult}</h1>
            <br></br>
            <br></br>
            {playerResult === 'You Win Boy!!!' ?
              <img src="https://media2.giphy.com/media/dJubopzOcOUJqvNt6n/giphy.gif?cid=ecf05e471482dlqld934p3sw3syucq0wtzb6exdk7hzolg2z&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="" />
              :
              <img src="https://media4.giphy.com/media/DbNdB5IP4iPVtqdYjm/giphy.gif?cid=ecf05e47n2jdhhezuvvjjo3labrs20vr8h96lg85nvo26gc5&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="" />
            }
          </div>
        }
      </div>
    </>
  );
}

export default WheelOfFortune;
