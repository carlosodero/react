import './OnOffButton.css';

function OnOffButton({ children, onClickHandler }) {
  return (
    <button onClick={ onClickHandler } style={children === 'OFF' ? {backgroundColor: 'red'} : {backgroundColor: 'green'} } className='onoff'>{ children }</button>
  );
}

export default OnOffButton;