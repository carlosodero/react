import { useNavigate } from 'react-router-dom';
import './Booking.css';

function Booking(props) {
  const navigate = useNavigate();
  const { id, description, date } = props;
  return (
    <>
      <div className='cardTime'>{ date }</div>
      <div className='cardContainer'>
        <div>
          { description }
        </div>
        <button onClick={ () => navigate('/bookdet/' + id) }>
        Book details
        </button>
      </div>
    </>
  );
}

export default Booking;
