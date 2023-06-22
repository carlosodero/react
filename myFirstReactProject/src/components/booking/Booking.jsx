import { useNavigate } from 'react-router-dom';
import './Booking.css';

function Booking(props) {
  const navigate = useNavigate();
  const { description, date } = props;
  return (
    <>
      <div className='cardTime'>{ date }</div>
      <div className='cardContainer'>
        <div>
        { description }
          </div>
        <button onClick={ () => navigate('/flags') }>
        Book details
        </button>
      </div>
    </>
  );
}

export default Booking;
