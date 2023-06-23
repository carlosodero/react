import { useState } from 'react';
import CalcButton from '../../components/CalcButton/CalcButton.jsx';
import './calc.css';

function Calc() {
  const symbols = ['+', '-', '*', '/', 'C', '='];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const initalValue = 0;
  const [displayed, setDisplay] = useState(initalValue);

  function onClickHandler(num) {
    num === '=' ? setDisplay(eval(displayed)) :
      num === 'C' ? setDisplay(initalValue) :
        displayed === 0 ?
          setDisplay(num) :
          setDisplay(`${displayed}${num}`);
  }

  return (
    <>
      <div className='webContainer' style={{ display: 'flex', flexDirection: 'column' }}>
        <div className='display'>{displayed}</div>
        <div>
          {numbers.map((nb, index) =>
            <CalcButton key={index} onClickHandler={() => onClickHandler(nb)}>{nb}</CalcButton>
          )}
        </div>
        <div>
          {symbols.map((symbol, index) =>
            <CalcButton key={index} onClickHandler={() => onClickHandler(symbol)}>{symbol}</CalcButton>
          )}
        </div>
      </div>
    </>
  );
}

export default Calc;