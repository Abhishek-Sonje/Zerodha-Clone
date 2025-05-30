import React from "react";

function Hero() {
  return (
    <div className="container text-center hero" style={{padding:"100px 0"}}>
      <h1
        style={{
          fontSize: "44px",
          fontWeight: 500,
          lineHeight: "55px",
          color: "rgb(66, 66, 66)",
        }}
      >
        Charges
      </h1>
      <p
        style={{
          fontSize: "20px",
          fontWeight: 400,
          lineHeight: "36px",
          color: "rgb(155, 155, 155)",
        }}
      >
        List of all charges and taxes
      </p>
    </div>
  );
}

export default Hero;
