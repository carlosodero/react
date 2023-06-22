
import './Booking.css';

function BookingCard(props) {
  const { description } = props;
  return (
    <>
      <div className='cardContainer'>
        {description.map((book) =>
          <div key={book.id}>{book.id}</div>)}
      </div>

    </>
  );
}

export default BookingCard;