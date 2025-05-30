import React from "react";
import "./CreateTicket.css";

function CreateTicket() {
  return (
    <div className="createTicket">
      <div className="ticket-container container">
        <h2 className="ticketHeader">
          To create a ticket, select a relevant topic
        </h2>

        <div className="row ticket-row">
          {/* Account Opening */}
          <div className="col-4 ticket-col">
            <h3 className="card-title text-muted">
              <a href="/category/account-opening">
                <i className="fa-solid fa-plus"></i> Account Opening
              </a>
            </h3>
            <span className="text-grey">
              <a href="#">Resident individual</a>
            </span>
            <span className="text-grey">
              <a href="#">Minor</a>
            </span>
            <span className="text-grey">
              <a href="#">Non Resident Indian (NRI)</a>
            </span>
            <span className="text-grey">
              <a href="#">Company, Partnership, HUF and LLP</a>
            </span>
            <span className="text-grey">
              <a href="#">Glossary</a>
            </span>
          </div>

          {/* Your Zerodha Account */}
          <div className="col-4 ticket-col">
            <h3 className="card-title text-muted">
              <a href="/category/zerodha-account">
                <i className="fa-regular fa-user"></i> Your Zerodha Account
              </a>
            </h3>
            <span className="text-grey">
              <a href="#">Your Profile</a>
            </span>
            <span className="text-grey">
              <a href="#">Account modification</a>
            </span>
            <span className="text-grey">
              <a href="#">Client Master Report (CMR) and DP</a>
            </span>
            <span className="text-grey">
              <a href="#">Nomination</a>
            </span>
            <span className="text-grey">
              <a href="#">Transfer and conversion of securities</a>
            </span>
          </div>

          {/* Kite */}
          <div className="col-4 ticket-col">
            <h3 className="card-title text-muted">
              <a href="/category/kite">
                <i className="fa-solid fa-chart-line"></i> Kite
              </a>
            </h3>
            <span className="text-grey">
              <a href="#">IPO</a>
            </span>
            <span className="text-grey">
              <a href="#">Trading FAQs</a>
            </span>
            <span className="text-grey">
              <a href="#">Margin Trading Facility (MTF) and Margins</a>
            </span>
            <span className="text-grey">
              <a href="#">Charts and orders</a>
            </span>
            <span className="text-grey">
              <a href="#">Alerts and Nudges</a>
            </span>
            <span className="text-grey">
              <a href="#">General</a>
            </span>
          </div>
        </div>

        <div className="row ticket-row mt-5">
          {/* Funds */}
          <div className="col-4 ticket-col">
            <h3 className="card-title text-muted">
              <a href="/category/funds">
                <i className="fa-regular fa-credit-card"></i> Funds
              </a>
            </h3>
            <span className="text-grey">
              <a href="#">Add money</a>
            </span>
            <span className="text-grey">
              <a href="#">Withdraw money</a>
            </span>
            <span className="text-grey">
              <a href="#">Add bank accounts</a>
            </span>
            <span className="text-grey">
              <a href="#">eMandates</a>
            </span>
          </div>

          {/* Console */}
          <div className="col-4 ticket-col">
            <h3 className="card-title text-muted">
              <a href="/category/console">
                <i className="fa-regular fa-circle-user"></i> Console
              </a>
            </h3>
            <span className="text-grey">
              <a href="#">Portfolio</a>
            </span>
            <span className="text-grey">
              <a href="#">Corporate actions</a>
            </span>
            <span className="text-grey">
              <a href="#">Funds statement</a>
            </span>
            <span className="text-grey">
              <a href="#">Reports</a>
            </span>
            <span className="text-grey">
              <a href="#">Profile</a>
            </span>
            <span className="text-grey">
              <a href="#">Segments</a>
            </span>
          </div>

          {/* Coin */}
          <div className="col-4 ticket-col">
            <h3 className="card-title text-muted">
              <a href="/category/coin">
                <i className="fa-regular fa-circle"></i> Coin
              </a>
            </h3>
            <span className="text-grey">
              <a href="#">Understanding mutual funds and Coin</a>
            </span>
            <span className="text-grey">
              <a href="#">Coin app</a>
            </span>
            <span className="text-grey">
              <a href="#">Coin web</a>
            </span>
            <span className="text-grey">
              <a href="#">Transactions and reports</a>
            </span>
            <span className="text-grey">
              <a href="#">National Pension Scheme (NPS)</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
