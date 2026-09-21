import React, { useState } from "react";
import "./ListingPage.css";

import BookingCard from "../components/BookingCard";
import BelowLocation from "../components/BelowLocation";
import HostSection from "../components/HostSection";

function ListingPage({ images = [] }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <>
      {/* MAIN CONTENT + BOOKING CARD */}
      <div className="listing-layout">

        {/* LEFT CONTENT */}
        <div className="listing-main">

          {/* TRANSLATION */}
          <section className="translation-box">
            Some info has been automatically translated.
            <u> Show original</u>
          </section>

          {/* DESCRIPTION */}
          <section className="description-section">
            <p>
              🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes!
              ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a
              private jacuzzi 🛁 for the perfect unwind.
            </p>

            {showFullDescription && (
              <>
                <p>
                  Enjoy high-speed WiFi, Smart TV, pet-friendly comfort,
                  and stylish interiors.
                </p>

                <p>
                  Just minutes from Candolim Beach, popular cafés,
                  restaurants, and nightlife. Ideal for couples seeking
                  romance, relaxation, and a touch of luxury in North Goa.
                </p>
              </>
            )}

            {!showFullDescription && (
              <p className="collapsed-description">
                Enjoy high-speed WiFi, Smart TV, pet-friendly comfort,
                and stylish interiors. Just minutes from Candolim Beach,
                popular cafés, restaurants, and nightlife...
              </p>
            )}

            <button
              className="description-toggle"
              onClick={() =>
                setShowFullDescription(!showFullDescription)
              }
            >
              {showFullDescription ? "Show less ❯" : "Show more ❯"}
            </button>
          </section>

          {/* SLEEPING AREA */}
          <section className="sleep-section">
            <h2>Where you'll sleep</h2>

            <div className="sleep-grid">
              <div>
                <img src={images[1]} alt="Bedroom" />
                <h3>Bedroom</h3>
                <p>1 double bed</p>
              </div>

              <div>
                <img src={images[2]} alt="Living room" />
                <h3>Living room</h3>
                <p>1 sofa</p>
              </div>
            </div>
          </section>

          {/* AMENITIES */}
          <section className="amenities-section">
            <h2>What this place offers</h2>

            <div className="amenities-grid">
              <p>🍴 Kitchen</p>
              <p>📶 Wifi</p>
              <p>🪑 Dedicated workspace</p>
              <p>🚗 Free parking on premises</p>
              <p>🏊 Pool</p>
              <p>🛁 Hot tub</p>
              <p>🐾 Pets allowed</p>
              <p>📹 Exterior security cameras</p>

              <p className="disabled-item">
                🚫 Carbon monoxide alarm
              </p>

              <p className="disabled-item">
                🚫 Smoke alarm
              </p>
            </div>

            <button className="outline-button">
              Show all 50 amenities
            </button>
          </section>

          {/* CALENDAR */}
          <section className="calendar-section">
            <h2>5 nights in Candolim</h2>

            <p className="calendar-date-text">
              18 Oct 2026 - 23 Oct 2026
            </p>

            <div className="calendar-wrapper">

              {/* OCTOBER */}
              <div className="month-calendar">
                <div className="month-header">
                  <button>‹</button>
                  <h3>October 2026</h3>
                  <span></span>
                </div>

                <div className="weekdays">
                  {["S", "M", "T", "W", "T", "F", "S"].map(
                    (day, index) => (
                      <span key={index}>{day}</span>
                    )
                  )}
                </div>

                <div className="calendar-days">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <span key={`empty-${index}`}></span>
                  ))}

                  {Array.from({ length: 31 }, (_, index) => {
                    const day = index + 1;

                    return (
                      <span
                        key={day}
                        className={
                          day === 18 || day === 23
                            ? "selected-date"
                            : day > 18 && day < 23
                            ? "date-range"
                            : ""
                        }
                      >
                        {day}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* NOVEMBER */}
              <div className="month-calendar">
                <div className="month-header">
                  <span></span>
                  <h3>November 2026</h3>
                  <button>›</button>
                </div>

                <div className="weekdays">
                  {["S", "M", "T", "W", "T", "F", "S"].map(
                    (day, index) => (
                      <span key={index}>{day}</span>
                    )
                  )}
                </div>

                <div className="calendar-days">
                  {Array.from({ length: 30 }, (_, index) => {
                    const day = index + 1;

                    return (
                      <span
                        key={day}
                        className={
                          day >= 18 && day <= 24
                            ? "disabled-date"
                            : ""
                        }
                      >
                        {day}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="calendar-footer">
              <button className="keyboard-button">▭</button>
              <button className="clear-dates">Clear dates</button>
            </div>
          </section>
        </div>

        {/* RIGHT BOOKING CARD */}
        <aside className="booking-sidebar">
          <BookingCard />
        </aside>
      </div>

      {/* GUEST FAVOURITE */}
      <section className="guest-favourite-section">
        <div className="rating-heading">
          <div className="rating-number">
            <span className="laurel">❮</span>
            <strong>4.95</strong>
            <span className="laurel">❯</span>
          </div>

          <h2>Guest favourite</h2>

          <p>
            This home is a guest favourite based on ratings,
            reviews and reliability
          </p>

          <a href="#reviews">How reviews work</a>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="reviews-section" id="reviews">

        {/* REVIEW RATING */}
        <div className="review-summary">

          <div className="overall-rating">
            <h3>Overall rating</h3>

            {[5, 4, 3, 2, 1].map((rating) => (
              <div className="rating-bar" key={rating}>
                <span>{rating}</span>

                <div className="bar">
                  <div
                    className="bar-fill"
                    style={{
                      width: rating === 5 ? "96%" : "0%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="review-categories">

            <div>
              <h3>Cleanliness</h3>
              <strong>5.0</strong>
              <span>🧹</span>
            </div>

            <div>
              <h3>Accuracy</h3>
              <strong>5.0</strong>
              <span>✓</span>
            </div>

            <div>
              <h3>Check-in</h3>
              <strong>5.0</strong>
              <span>🔑</span>
            </div>

            <div>
              <h3>Communication</h3>
              <strong>5.0</strong>
              <span>💬</span>
            </div>

            <div>
              <h3>Location</h3>
              <strong>4.8</strong>
              <span>🗺️</span>
            </div>

            <div>
              <h3>Value</h3>
              <strong>4.8</strong>
              <span>🏷️</span>
            </div>

          </div>
        </div>

        {/* REVIEW TAGS */}
        <div className="review-tags">
          <span>🛏️ Comfort 6</span>
          <span>✅ Accuracy 5</span>
          <span>🛁 Hot tub 5</span>
          <span>🧺 Condition 4</span>
          <span>🎁 Hospitality 8</span>
          <span>🧼 Cleanliness 4</span>
          <span>🍽️ Amenities 2</span>
        </div>

        {/* REVIEW CARDS */}
        <div className="review-grid">

          <ReviewCard
            name="Amit"
            duration="2 months on Airbnb"
            date="1 week ago"
            image={null}
            text="Very helpful and responsive team. Safe and peaceful stay. Loved everything about the property."
          />

          <ReviewCard
            name="Aheesh"
            duration="3 years on Airbnb"
            date="2 weeks ago"
            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
            text="We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again."
          />

          <ReviewCard
            name="Samiksha"
            duration="8 months on Airbnb"
            date="May 2026"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
            text="The host Nitish was really great help."
          />

          <ReviewCard
            name="Vedant"
            duration="4 years on Airbnb"
            date="May 2026"
            image={null}
            text="We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine."
          />

          <ReviewCard
            name="Vaibhav S"
            duration="3 years on Airbnb"
            date="May 2026"
            image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
            text="Great great experience living out there, can't expect more. Will always look for it in the future and will recommend my friends too."
          />

          <ReviewCard
            name="Mohd"
            duration="5 years on Airbnb"
            date="May 2026"
            image="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100"
            text="Great place. Exactly as described in the listing."
          />

        </div>

        <button className="all-reviews-button">
          Show all 19 reviews
        </button>
      </section>

      {/* LOCATION */}
      <section className="full-width-location">
        <h2>Where you'll be</h2>

        <p>Candolim, Goa, India</p>

        <div className="map-placeholder">
          <span>⌂</span>
        </div>

        <p>Exact location will be provided after booking.</p>
      </section>

      {/* HOST SECTION */}
      <HostSection />

      {/* PAYMENT PROTECTION + THINGS TO KNOW + NEARBY STAYS */}
      <BelowLocation />
    </>
  );
}

/* REVIEW CARD COMPONENT */
function ReviewCard({
  name,
  duration,
  date,
  text,
  image,
}) {
  return (
    <article className="review-card">

      <div className="review-user">

        {image ? (
          <img
            src={image}
            alt={name}
            className="user-avatar review-image"
          />
        ) : (
          <div className="user-avatar">
            {name.charAt(0)}
          </div>
        )}

        <div>
          <h3>{name}</h3>
          <p>{duration}</p>
        </div>

      </div>

      <div className="review-date">
        ★★★★★ <span>· {date}</span>
      </div>

      <p className="review-text">
        {text}
      </p>

      <button className="show-more-review">
        Show more
      </button>

    </article>
  );
}

export default ListingPage;