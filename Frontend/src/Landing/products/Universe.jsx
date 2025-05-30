import React from "react";
import "./Universe.css";
import zerodhafundhouse from "../../assets/media/Images/zerodhaFundhouse.png";
import sensibull from "../../assets/media/Images/sensibullLogo.svg";
import smallcase from "../../assets/media/Images/smallcaseLogo.png";
import streak from "../../assets/media/Images/streakLogo.png";
import tijori from "../../assets/media/Images/tijori.svg";
import ditto from "../../assets/media/Images/dittoLogo.png";

const partners = [
  {
    name: "Zerodha Fund House",
    image: zerodhafundhouse,
    description:
      "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    link: "#",
  },
  {
    name: "Streak",
    image: streak,
    description:
      "Systematic trading platform that allows you to create and backtest strategies without coding.",
    link: "#",
  },
  {
    name: "Sensibull",
    image: sensibull,
    description:
      "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    link: "#",
  },
  {
    name: "Smallcase",
    image: smallcase,
    description:
      "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
    link: "#",
  },
  {
    name: "Tijori",
    image: tijori,
    description:
      "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    link: "#",
  },
  {
    name: "Ditto",
    image: ditto,
    description:
      "Personalized advice on life and health insurance. No spam and no mis-selling.",
    link: "#",
  },
];

function UniverseCard({ image, name, description, link }) {
  return (
    <div className="col-md-4 col-sm-6 text-center mb-4">
      <a href={link}>
        <img src={image} alt={name} className="universe-img mb-2" />
        <p className="universe-img-text">{description}</p>
      </a>
    </div>
  );
}

function Universe() {
  return (
    <div className="universe ">
      <div className="container">
        <div className="text-center mb-5 universe-header">
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="row universe-card-row">
          {partners.map((partner, idx) => (
            <UniverseCard key={idx} {...partner} />
          ))}
        </div>
        <div className="text-center  account-btn-container">
          <button className="account-btn">Sign up for free</button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
