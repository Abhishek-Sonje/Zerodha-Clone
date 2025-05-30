import React from 'react'
import './Hero.css'

function Hero() {
    return (
      <div className="products-hero">
        <div className="container">
          <div className="row products-hero-row">
            <div className="col products-hero-col text-center">
              <h1>Zerodha Products</h1>
              <p className='products-hero-para'>Sleek, modern, and intuitive trading platforms</p>
              <p className="products-hero-link">
                Check out our <a href="#"> investment offerings →</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero;