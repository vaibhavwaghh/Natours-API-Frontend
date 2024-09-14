import { Link } from "react-router-dom";

function NoBooking() {
  return (
    <div className="main">
      <div className="no-bookings-container">
        <h1 className="no-bookings-title">
          You have not booked any tours yet!
        </h1>
        <p className="no-bookings-text">
          Start exploring amazing tours and make your first booking now.
        </p>
        <Link to="/" className="no-bookings-link">
          Start Booking
        </Link>
      </div>
    </div>
  );
}

export default NoBooking;
