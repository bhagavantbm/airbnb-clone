import React from "react";
import "./ListingNav.css";

function ListingNav() {
  return (
    <nav className="listing-nav">
      <div className="listing-nav-links">
        <a href="#photos">Photos</a>
        <a href="#amenities">Amenities</a>
        <a href="#reviews">Reviews</a>
        <a href="#location">Location</a>
      </div>

      <div className="listing-nav-right">
        <div className="nav-price">
          <strong>₹28,499</strong>
          <span> for 5 nights</span>
          <small>★ 4.95 · 19 reviews</small>
        </div>

        <button className="nav-reserve-button">
          Reserve
        </button>
      </div>
    </nav>
  );
}

export default ListingNav;