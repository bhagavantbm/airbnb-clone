import React from "react";
import "./HostSection.css";

function HostSection() {
  const coHosts = [
    { name: "Sharath", image: "https://i.pravatar.cc/100?img=12" },
    { name: "Aman Dev Pahwa", image: "https://i.pravatar.cc/100?img=13" },
    { name: "Maria Karen Priyanka", image: "https://i.pravatar.cc/100?img=14" },
    { name: "Simran", image: "https://i.pravatar.cc/100?img=หญิง" },
    { name: "Pallavi", image: "https://i.pravatar.cc/100?img=16" },
    { name: "Sanyukta", image: "https://i.pravatar.cc/100?img=17" },
  ];

  return (
    <section className="host-section">
      <h2>Meet your host</h2>

      <div className="host-layout">
        {/* HOST CARD */}
        <div className="host-left">
          <div className="host-card">
            <div className="host-profile">
              <div className="host-logo">MIRASHYA</div>

              <h3>Mirashya</h3>
              <h3>Homes</h3>
              <p>Host</p>
            </div>

            <div className="host-stats">
              <div>
                <strong>1,463</strong>
                <span>Reviews</span>
              </div>

              <div>
                <strong>4.68★</strong>
                <span>Rating</span>
              </div>

              <div>
                <strong>2</strong>
                <span>Years hosting</span>
              </div>
            </div>
          </div>

          <div className="host-info">
            <p>♧ &nbsp; Born in the 80s</p>
            <p>🎓 &nbsp; Where I went to school: NICMAR GOA</p>
          </div>
        </div>

        {/* HOST DETAILS */}
        <div className="host-right">
          <h2>Co-Hosts</h2>

          <div className="co-hosts">
            {coHosts.map((host, index) => (
              <div className="co-host" key={index}>
                <img src={host.image} alt={host.name} />
                <span>{host.name}</span>
              </div>
            ))}
          </div>

          <h2>Host details</h2>

          <p>Response rate: 100%</p>
          <p>Responds within an hour</p>

          <button className="message-host-button">
            Message host
          </button>
        </div>
      </div>
    </section>
  );
}

export default HostSection;