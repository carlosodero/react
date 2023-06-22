import bookingsconfig from './config';
import Booking from '../../components/booking/Booking.jsx';
// import '/.Bookings.css';

function Bookings() {
  return (
    <>
      <div className='webContainer'>
        <h1>Bookings Panel</h1>
        <br></br>
        <br></br>
        <div className='bookingsContainer'>{bookingsconfig.map(item => <div key={item.id}><Booking {...item} /></div>)}</div>
      </div>
    </>
  );
}

export default Bookings;