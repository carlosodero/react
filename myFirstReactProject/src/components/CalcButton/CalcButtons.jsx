import './CalcButtons.css';

function CalcButton({ children, onClickHandler }) {
  return (
    <button onClick={ onClickHandler } style={children === '=' ? {backgroundColor: 'orange'} : {backgroundColor: 'white'}} className='button'>{ children }</button>
  );
}

export default CalcButton;
