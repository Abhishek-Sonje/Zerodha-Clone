import React from 'react'
import './RightSection.css'

 
function RightSection({Img,Title, Description, Button1="", Button2=""}) {
    return (
      <div className="rightSection">
        <div className="container RightSectionContainer">
          <div className="row">
            <div className="col-md-4 rightSectionText">
              <h1>{Title}</h1>
              <p>{Description}</p>
              <span className="rightSectionButtons row">
                {Button1 !== "" && (
                  <a href="#" className="col-6">
                    {Button1} <i class="fa-solid fa-arrow-right"></i>
                  </a>
                )}
                {Button2 !== "" && (
                  <a href="#" className="col-6">
                    {Button2}
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                )}
              </span>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-7">
              <img src={Img} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default RightSection;