import { useState } from 'react';
import CalcButton from '../../components/CalcButton/CalcButtons.jsx';
import CalcOnOff from '../../components/CalcButton/CalcOnOff.jsx';
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
  // init useState OnClickHandler()
  const initalValue = 0;
  const [displayed, setDisplay] = useState(initalValue);

  // init useState OnOff()
  const startMode = 'ON';
  const [status, setStatus] = useState(startMode);

  function onClickHandler(key) {
    key === '=' ? setDisplay(eval(displayed)) :
      key === 'AC' ? setDisplay(initalValue) :
        displayed === 0 ?
          setDisplay(key) :
          setDisplay(`${displayed}${key}`);
  }

  function OnOff() {
    status === 'ON' ? setStatus('OFF') : setStatus('ON');
    setDisplay(initalValue);
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
            <CalcOnOff onClickHandler={() =>
              OnOff()}>{status}
            </CalcOnOff>
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
