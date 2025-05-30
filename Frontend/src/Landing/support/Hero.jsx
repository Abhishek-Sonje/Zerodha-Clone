import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="support-hero">
      <div className="container support-container">
        <div className="row support-head-row">
          <div className="col-4">
            <a href="/" className="supportPortal">
              Support Portal
            </a>
          </div>
          <div className="col-4 support-mid-col"></div>
          <div className="col-4 text-end">
            <a href="/" className="trackTicket">
              Track ticket
            </a>
          </div>
        </div>
        <div className="row support-main-row">
          <div className="col-7 support-search-col">
            <div className="support-subheading">
              Search for an answer or browse help topics to create a ticket
            </div>
            <div className="search-input-grp">
              <input
                id="search-text"
                type="text"
                className="form-control typeahead"
                autoComplete="off"
                placeholder="Eg: how do i activate F&amp;O, why is my order getting rejected ..."
                autoFocus=""
              />
                {" "}
              
            </div>
            <div className="super-links">
              <p className="quick-links">
                <a href="#">Track account opening</a>
              </p>
              <p className="quick-links">
                <a href="#">Track segment activation</a>
              </p>
              <p className="quick-links">
                <a href="#">Intraday margins</a>
              </p>
              <p className="quick-links">
                <a href="#">Kite user manual</a>
              </p>
            </div>
          </div>
          <div className="col-5 support-featured-col">
            <div class="alert-banner" style={{display: "block"}}>
              <div class="support-featured-header">Featured</div>
              <div class="alert-back">
                <div class="banner-content">
                  <ol>
                    <li>
                      <a
                        href="https://zerodha.com/marketintel/bulletin/413177/change-in-mutual-fund-settlement-cycle-due-to-settlement-holiday-on-account-of-buddha-pournima-on-may-12-2025"
                        target="_blank"
                        class="banner-link"
                      >
                        Change in mutual fund settlement cycle due to settlement
                        holiday on account of Buddha Pournima on May 12, 2025
                      </a>
                    </li>
                    &nbsp;
                    <li>
                      <a
                        href="https://zerodha.com/marketintel/bulletin/412871/current-takeovers-and-delisting-may-2025"
                        target="_blank"
                        class="banner-link"
                      >
                        Current Takeovers and Delisting – May 2025
                      </a>
                    </li>
                    &nbsp;
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
