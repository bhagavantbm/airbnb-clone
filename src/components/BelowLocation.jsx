
import React from "react";
import "./BelowLocation.css";


function BelowLocation() {
  const nearbyStays = [
    {
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80",
      title: "Beautiful Studio with a view to die for",
      price: "₹23,600",
      rating: "4.91",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
      title: "NAQAB - 1bhk with private pool",
      price: "₹42,218",
      rating: "4.95",
    },
    {
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
      title: "Greentique Luxury Flat with plunge pool",
      price: "₹44,506",
      rating: "4.94",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80",
      title: "The Tropical Studio | 5 mins to Beach",
      price: "₹22,824",
      rating: "4.96",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=600&q=80",
      title: "Luxury Casa Bella 1BHK with plunge pool",
      price: "₹39,942",
      rating: "4.95",
    },
  ];

  return (
    <section className="below-location">

      {/* PAYMENT PROTECTION */}
      <div className="payment-protection">
        <span className="protection-icon">♢</span>
        <p>
          To help protect your payment, always use Airbnb to send money
          and communicate with hosts.
        </p>
      </div>

      {/* THINGS TO KNOW */}
      <section className="things-to-know">
        <h2>Things to know</h2>

        <div className="things-grid">

          <div className="things-column">
            <span className="things-icon">▣</span>
            <h3>Cancellation policy</h3>
            <p>
              Free cancellation before 17 October. Cancel before
              check-in on 18 October for a partial refund.
            </p>
            <p>Review this host’s full policy for details.</p>
            <a href="#details">Learn more</a>
          </div>

          <div className="things-column">
            <span className="things-icon">♧</span>
            <h3>House rules</h3>
            <p>Check-in after 2:00 pm</p>
            <p>Checkout before 11:00 am</p>
            <p>3 guests maximum</p>
            <a href="#details">Learn more</a>
          </div>

          <div className="things-column">
            <span className="things-icon">♢</span>
            <h3>Safety & property</h3>
            <p>Carbon monoxide alarm not reported</p>
            <p>Smoke alarm not reported</p>
            <p>Exterior security cameras on property</p>
            <a href="#details">Learn more</a>
          </div>

        </div>
      </section>

      {/* MORE STAYS NEARBY */}
      <section className="nearby-section">
        <div className="nearby-heading">
          <h2>More stays nearby</h2>

          <div className="nearby-controls">
            <span>1 / 2</span>
            <button>‹</button>
            <button>›</button>
          </div>
        </div>

        <div className="nearby-cards">
          {nearbyStays.map((stay, index) => (
            <article className="nearby-card" key={index}>
              <img src={stay.image} alt={stay.title} />

              <h3>{stay.title}</h3>

              <p>
                {stay.price} <span>★ {stay.rating}</span>
              </p>
            </article>
          ))}
        </div>
      </section>

    </section>
  );
}

export default BelowLocation;