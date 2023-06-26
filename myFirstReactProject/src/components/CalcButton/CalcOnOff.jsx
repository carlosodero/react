import './CalcOnOff.css';

function CalcOnOff({ children, onClickHandler }) {
  return (
    <button onClick={ onClickHandler } style={children === 'OFF' ? {backgroundColor: 'red'} : {backgroundColor: 'green'} } className='onoff'>{ children }</button>
  );
}

export default CalcOnOff;