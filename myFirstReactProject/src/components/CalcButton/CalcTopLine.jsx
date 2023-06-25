import './CalcTopLine.css';

function CalcTopLine() {

  return (
    <>
      <div className='topLine'>
        <div className='casioBrand'>CASIO</div>
        <div style={{ display: 'flex' }}>
          <div className='solarCharge'></div>
          <div className='solarCharge'></div>
          <div className='solarCharge'></div>
          <div className='solarCharge'></div>
        </div>
      </div>
    </>
  );
}

export default CalcTopLine;