import { useState } from 'react';
import CalcButton from '../../components/CalcButton/CalcButton.jsx';
import OnOffButton from '../../components/CalcButton/OnOffButton.jsx';
import CalcTopLine from '../../components/CalcButton/CalcTopLine.jsx';
import './calc.css';

function Calc() {
  const keys = [
    ['(', ')', '%', 'AC'],
    [7, 8, 9, '/'],
    [4, 5, 6, '*'],
    [1, 2, 3, '-'],
    [0, '.', '=', '+']
  ];

  const initalValue = 0;
  const [displayed, setDisplay] = useState(initalValue);

  const startMode = 'ON';
  const [status, setStatus] = useState(startMode);

  function OnOff() {
    status === 'ON' ? setStatus('OFF') : setStatus('ON');
    setDisplay(initalValue);
  }

  function onClickHandler(key) {
    key === '=' ? setDisplay(eval(displayed)) :
      key === 'AC' ? setDisplay(initalValue) :
        displayed === 0 ?
          setDisplay(key) :
          setDisplay(`${displayed}${key}`);
  }


  return (
    <>
      <div className='webContainer' style={{ display: 'flex', flexDirection: 'column' }}>
        <div id='calc' className='calcBody'>
          <CalcTopLine></CalcTopLine>
          <div>
            <div className='display'>{status === 'ON' ? displayed : ''}</div>
          </div>
          <br></br>
          <div>
            <OnOffButton onClickHandler={() =>
              OnOff()}>{status}
            </OnOffButton>
          </div>
          <div>
            {keys.map((nb, i) =>
              <div key={i}>
                {nb.map((button, index) =>
                  <CalcButton key={index} onClickHandler={() =>
                    onClickHandler(button)}>{button}
                  </CalcButton>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Calc;
