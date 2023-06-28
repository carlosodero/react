import { useState, useEffect } from 'react';
import './WheelOfFortune.css';

function WheelOfFortune() {
  const scores = [10, 20, 50, 100, 200, 500];
  const [film, setFilm] = useState('');
  const [points, setPoints] = useState();
  const [letters, showletters] = useState('');
  // const [playerPoints, setPlayerPoints] = useState();

  useEffect(() => {
    const charsArray = film.split('');
    showletters(charsArray);
    console.log('charsArray', charsArray);
    console.log('letters', letters);
  }, [film]);

  function getFilm(e) {
    e.target.value !== '' && setFilm(e.target.value);
  }

  function getPoints() {
    const points = scores[Math.floor(Math.random() * scores.length)];
    setPoints(points);
  }

  return (
    <>
      <div className='webContainer'>
        <h1>The Wheel of Fortune</h1>
        <br></br>
        <br></br>
        {!film &&
          <input type="password" placeholder='Insert a Film to Play' onBlur={(e) =>
            getFilm(e)} />
        }
        {film && <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1>Score 0 points</h1>
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
          <input type="text" placeholder={!points ? 'Insert Answer' : 'Insert Letter'} />
        </div>}

      </div>

    </>
  );
}

export default WheelOfFortune;
