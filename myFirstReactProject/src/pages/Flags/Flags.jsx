import flagsConfig from './config.js';
import Flag from '../../components/Flag/Flag.jsx';
import './Flags.css';

function Flags() {
  return (
    <>
      <div className='webContainer'>
        <h1>React Components</h1>
        <br></br>
        <br></br>
        <div className='flagsContainer'>{flagsConfig.map(item => <div key={item.id}><Flag {...item} /></div>)}</div>
      </div>
    </>
  );
}

export default Flags;