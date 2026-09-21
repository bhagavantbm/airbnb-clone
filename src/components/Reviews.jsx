import React from "react";
import "./Reviews.css";

function Reviews() {
  const reviews = [
    {
      name: "Amit",
      duration: "2 months on Airbnb",
      date: "1 week ago",
      image: null,
      review:
        "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.",
    },
    {
      name: "Aheesh",
      duration: "3 years on Airbnb",
      date: "2 weeks ago",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      review:
        "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.",
    },
    {
      name: "Samiksha",
      duration: "8 months on Airbnb",
      date: "May 2026",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
      review: "the host nitish was really great help",
    },
    {
      name: "Vedant",
      duration: "4 years on Airbnb",
      date: "May 2026",
      image: null,
      review:
        "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....",
    },
    {
      name: "Vaibhav S",
      duration: "3 years on Airbnb",
      date: "May 2026",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
      review:
        "Great great experience living out there, can't expect more, will always look for it in the future and will recommend my friends too.",
    },
    {
      name: "Mohd",
      duration: "5 years on Airbnb",
      date: "May 2026",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100",
      review: "Great place. Exactly as described in the listing.",
    },
  ];

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-heading">
        <h2>Guest reviews</h2>

        <p className="reviews-rating">
          ★ 4.95 · 19 reviews
        </p>
      </div>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <article className="review-card" key={index}>
            <div className="review-user">
              {review.image ? (
                <img
                  src={review.image}
                  alt={review.name}
                  className="review-avatar"
                />
              ) : (
                <div className="review-avatar letter-avatar">
                  {review.name.charAt(0)}
                </div>
              )}

              <div>
                <h3>{review.name}</h3>
                <p>{review.duration}</p>
              </div>
            </div>

            <div className="review-date">
              ★★★★★ <span>· {review.date}</span>
            </div>

            <p className="review-text">{review.review}</p>

            {(index === 1 || index === 3) && (
              <button className="show-more-review">
                Show more
              </button>
            )}
          </article>
        ))}
      </div>

      <button className="all-reviews-button">
        Show all 19 reviews
      </button>
    </section>
  );
}

export default Reviews;