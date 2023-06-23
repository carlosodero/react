import './CalcButton.css';

function CalcButton({ children, onClickHandler }) {
  return (
    <button onClick={ onClickHandler } className='button'>{ children }</button>
  );
}

export default CalcButton;
