import { useState, useEffect } from 'react';
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
  // init useState onClickHandler()
  const initalValue = 0;
  const [displayed, setDisplay] = useState(initalValue);

  // init useState onOff()
  const startMode = 'ON';
  const [status, setStatus] = useState(startMode);

  // init useState setDisplaySize()
  const initialSize = 80;
  const [displaySize, setDisplaySize] = useState(initialSize);

  function onClickHandler(key) {
    key === '=' ? setDisplay(eval(displayed)) :
      key === 'AC' ? (setDisplay(initalValue), setDisplaySize(initialSize))  :
        displayed === 0 ?
          setDisplay(key) :
          setDisplay(`${displayed}${key}`);
  }

  function onOff() {
    status === 'ON' ? setStatus('OFF') : setStatus('ON');
    setDisplay(initalValue);
    setDisplaySize(initialSize);
  }

  useEffect(() => {
    const limitCharts = 6;
    const currentCharts = displayed.length;
    limitCharts < currentCharts ? setDisplaySize(displaySize > 30 ? displaySize - 10 : displaySize) : '';
    console.log('limitCharts', limitCharts);
    console.log('currentCharts', currentCharts);
  }, [displayed]
  );

  return (
    <>
      <div className='webContainer' style={{ display: 'flex', flexDirection: 'column' }}>
        <div id='calc' className='calcBody'>
          <CalcTopLine></CalcTopLine>
          <div>
            <div style={{ fontSize: `${displaySize}px` }} className='display'>{status === 'ON' ? displayed : ''}</div>
          </div>
          <br></br>
          <div>
            <CalcOnOff onClickHandler={() =>
              onOff()}>{status}
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
