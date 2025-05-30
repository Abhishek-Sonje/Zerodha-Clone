import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import "./LeftAndRight.css";

import productKite from "../../assets/media/Images/kite.png";
import console from "../../assets/media/Images/console.png";
import coin from "../../assets/media/Images/coin.png";
import kiteconnect from "../../assets/media/Images/kiteconnect.png";
import varsity from "../../assets/media/Images/varsity.png";
function LeftAndRight() {
  return (
    <>
      <LeftSection
        Img={productKite}
        Title="Kite"
        Description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        Button1="Try demo"
        Button2="Learn more"
      />
      <RightSection
        Img={console}
        Title="Console"
        Description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        Button1="Learn more"
      />
      <LeftSection
        Img={coin}
        Title="Coin"
        Description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.Oruultra-fast flagship trading platform with streaming market data, advanced charts, an  elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        Button1="Coin"
        // Button2="Learn more"
      />
      <RightSection
        Img={kiteconnect}
        Title="Kite Connect API"
        Description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        Button1="Kite Connect"
      />
      <LeftSection
        Img={varsity}
        Title="Varsity mobile"
        Description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
      />
      <div className="LeftRightText text-center">
        <p>
          Want to know more about our technology stack? Check out the
          <a href="#"> Zerodha.tech</a> blog.
        </p>
      </div>
    </>
  );
}

export default LeftAndRight;
