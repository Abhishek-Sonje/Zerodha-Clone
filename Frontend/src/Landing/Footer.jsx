import React from "react";
import "./Footer.css"; // adjust path as needed
import logo from "../assets/media/Images/logo.svg"; // adjust path as needed

function Footer() {
  return (
    <div className="footer">
      <div className="container footer-container">
        <div className="row footer-row">
          <div className="col-3 logo-col footer-col">
            <img src={logo} alt="Zerodha logo" className="zerodha-logo" />
            <p className="copyright">
              © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className="socials">
              <a href="#">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <hr className="footer-hr"/>
              <a href="#">
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>

          <div className="col-3">
            <ul className="list-style">
              <li className="nav-head footer-title">Company</li>
              <li>
                <a href="#">About </a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Referral</a>
              </li>
              <li>
                <a href="#">programme</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Zerodha.tech</a>
              </li>
              <li>
                <a href="#">Open source</a>
              </li>
              <li>
                <a href="#">Press & media</a>
              </li>
              <li>
                <a href="#">Zerodha Cares (CSR)</a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="list-style">
              <li className="nav-head footer-title">Support</li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Support portal</a>
              </li>
              <li>
                <a href="#">Z-Connect blog </a>
              </li>
              <li>
                <a href="#">List of charges</a>
              </li>
              <li>
                <a href="#">Downloads & resources</a>
              </li>
              <li>
                <a href="#">Videos</a>
              </li>
              <li>
                <a href="#">Market overview</a>
              </li>
              <li>
                <a href="#">How to file a complaint?</a>
              </li>
              <li>
                <a href="#">Status of your complaints </a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="list-style">
              <li className="nav-head footer-title">Account</li>
              <li>
                <a href="#">Open an account</a>
              </li>
              <li>
                <a href="#">Fund transfer</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row smallprint">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to <a href="#">complaints@zerodha.com</a>, for DP related to
            <a href="#">dp@zerodha.com</a>. Please ensure you carefully read the
            Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on <a href="#"> SEBI SCORES</a>:
            Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>
          <p>
            <a href="#">Smart Online Dispute Resolution </a>|{" "}
            <a href="#">Grievances Redressal Mechanism</a>
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            <a href="#"> create a ticket here</a> .
          </p>
        </div>
        <div class="footer-graveyard-links text-center">
          <ul>
            <li>
              <a href="https://nseindia.com">NSE</a>
            </li>
            <li>
              <a href="https://www.bseindia.com/">BSE</a>
            </li>
            <li>
              <a href="https://www.mcxindia.com/">MCX</a>
            </li>
            <li>
              <a href="https://zerodha.com/terms-and-conditions/">
                Terms &amp; conditions
              </a>
            </li>
            <li>
              <a href="https://zerodha.com/policies-and-procedures/">
                Policies &amp; procedures
              </a>
            </li>
            <li>
              <a href="https://zerodha.com/privacy-policy/">Privacy policy</a>
            </li>
            <li>
              <a href="https://zerodha.com/disclosure/">Disclosure</a>
            </li>
            <li>
              <a href="https://zerodha.com/investor-attention/">
                For investor's attention
              </a>
            </li>
            <li>
              <a href="https://zerodha.com/tos/investor-charter/">
                Investor charter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
