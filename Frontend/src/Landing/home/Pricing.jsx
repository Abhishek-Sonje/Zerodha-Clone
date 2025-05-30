import React from "react";
import "./Pricing.css";
import pricingFirst from "../../assets/media/Images/pricingEquity.svg";
import pricingThird from "../../assets/media/Images/otherTrades.svg";

function Pricing() {
  return (
    <div className="container pricing">
      <div className="row">
        <div className="col col-md-5 pricing-info">
          <h1 className="mb-3">Unbetable pricing</h1>
          <p className="mb-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#">
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col col-md-7 pricing-img ">
          <div className="row">
            <div className="col-md-4 first">
              <img src={pricingFirst} alt="" />
              <p>Free account<br></br> opening</p>
            </div>
            <div className="col-md-8 second">
              <img src={pricingFirst} alt="" />
              <p>Free equity delivery <br /> and direct mutual funds</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 third">
              <img src={pricingThird} alt="" />
              <p>Intraday and <br /> F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
