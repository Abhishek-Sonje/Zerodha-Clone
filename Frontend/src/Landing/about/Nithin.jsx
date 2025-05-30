import React from "react";
import "./Nithin.css";
import NithinImg from "../../assets/media/Images/nithinKamath.jpg";

function Nithin() {
  return (
    <div className="nithin">
      <div className="container nithin-container">
        <div className="row text-center nithin-title">
          <h1>People</h1>
        </div>
        <div className="row nithin-row">
          <div className="col-5  ">
            <div className="row nithin-img">
              <img src={NithinImg} alt="Founder" />
            </div>
            <div className="row nithin-name text-center">
              <h5>Nithin Kamath</h5>
              <p>Founder, CEO</p>
            </div>
          </div>
          <div className="col-7 nithin-info">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on <a href="/">Homepage </a>/ <a href="#"> TradingQnA </a>
              /<a href="#"> Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nithin;
