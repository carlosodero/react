import { useNavigate, useParams } from 'react-router-dom';
import bookingsconfig from './config.js';
import './Bookings.css';
import '../../components/booking/Booking.css';

function BookingDet() {
  const navigate = useNavigate();
  const { id } = useParams();
  const idAsNumber = parseInt(id);
  const selectedBooking = bookingsconfig.find(obj =>obj.id === idAsNumber);

  return (
    <>
      <div className='webContainer'>
        <div className='cardContainer'>
          <h3 style={{ color: 'black' }}> Booking for {selectedBooking.client} </h3>
          <div>{selectedBooking.description}</div>
          <div>{selectedBooking.date}</div>
          <div>{selectedBooking.service}</div>
          <div>{selectedBooking.price}</div>
          <br></br>
          <button onClick={() => navigate('/')}>
            Back to Bookings List
          </button>
        </div>
      </div>
    </>
  );
}

export default BookingDet;