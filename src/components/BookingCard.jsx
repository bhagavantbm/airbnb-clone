
import React, { useState } from "react";
import "./BookingCard.css";

function BookingCard() {
  const [showMessage, setShowMessage] = useState(false);

  const handleReserve = () => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <>
      <div className="discount-card">
        <span>🏷️</span>

        <div>
          <p>Get 10% off your next stay.</p>
          <u>Terms apply.</u>
        </div>

        <button>Claim</button>
      </div>

      <div className="booking-card">
        <div className="price">
          ₹28,499 <span>for 5 nights</span>
        </div>

        <div className="booking-inputs">
          <div className="date-box">
            <label>CHECK-IN</label>
            <p>10/18/2026</p>
          </div>

          <div className="date-box">
            <label>CHECKOUT</label>
            <p>10/23/2026</p>
          </div>

          <div className="guests-box">
            <label>GUESTS</label>
            <p>2 guests</p>
            <span>⌄</span>
          </div>
        </div>

        <div className="cancellation">
          Free cancellation before <strong>17 October</strong>
        </div>

        <button
          className="reserve-button"
          onClick={handleReserve}
        >
          Reserve
        </button>

        <p className="charge-text">
          You won't be charged yet
        </p>
      </div>

      <div className="report-listing">
        ⚑ &nbsp; <u>Report this listing</u>
      </div>

      {showMessage && (
        <div className="reserve-message">
          You won't be charged yet
        </div>
      )}
    </>
  );
}

export default BookingCard;