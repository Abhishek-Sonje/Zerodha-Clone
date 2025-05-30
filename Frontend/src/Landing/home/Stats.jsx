import React from "react";
import ecosystemImg from "../../assets/media/images/ecosystem.png"; // adjust path as needed
import mediaLogos from "../../assets/media/images/pressLogos.png"; // adjust path as needed
import "./Stats.css";

function Stats() {
  return (
    <div className="container stats-container">
      <div className="row align-items-center stats">
        {/* LEFT COLUMN */}
        <div className="col-md-5 stats-left  ">
          <h1 className="mb-5">Trust with confidence</h1>

          <div className="mb-4">
            <h4>Customer-first always</h4>
            <p>
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
          </div>

          <div className="mb-4">
            <h4>No spam or gimmicks</h4>
            <p>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="mb-4">
            <h4>The Zerodha universe</h4>
            <p>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer tailored services specific to your needs.
            </p>
          </div>

          <div className="mb-4">
            <h4>Do better with money</h4>
            <p>
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-md-7 text-center">
          <img src={ecosystemImg} alt="ecosystem" className="ecosystem-img" />
          <div className="row links mt-4" >
            <div className="col   ml-6">
              <a href="#">
                Explore our products<i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="col ">
              <a href="#">
                Try kite demo<i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center mt-4">
          <img src={mediaLogos} className="mediaImg" alt="Media logos" />
        </div>
      </div>
    </div>
  );
}

export default Stats;
