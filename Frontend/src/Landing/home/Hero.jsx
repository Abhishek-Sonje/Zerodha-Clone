import React from "react";
import "./Hero.css";
import heroImg from "../../assets/media/Images/homeHero.png";

function Hero() {
  return (
    <div className="hero-container mb-7">
      <img
        src={heroImg}
        alt="Investment platform illustration"
        className="hero-image"
      />
      <h1 className="home-hero-title ">Invest in everything</h1>
      <p className="hero-description">
        Online platform to invest in stocks, derivatives, mutual funds, ETFs,
        bonds, and more.
      </p>
      <button className="hero-button">Sign up for free</button>
    </div>
  );
}

export default Hero;
