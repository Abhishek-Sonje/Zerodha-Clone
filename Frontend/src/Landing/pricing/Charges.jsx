import React from "react";
import "./Charges.css";

import pricingFirst from "../../assets/media/Images/pricingEquity.svg";
import pricingThird from "../../assets/media/Images/otherTrades.svg";

function Charges() {
  return (
    <div className="charges">
      <div className="charges-container container">
        <div className="row charges-row">
          <div className="col-md-4 charges-col text-center">
            <img src={pricingFirst} alt="" />
            <h1>Free equity delivery</h1>
            <p>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-md-4 charges-col text-center">
            <img src={pricingThird} alt="" />
            <h1>Intraday and F&O trades</h1>
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-md-4 charges-col text-center">
            <img src={pricingFirst} alt="" />
            <h1>Free direct MF</h1>
            <p>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charges;
