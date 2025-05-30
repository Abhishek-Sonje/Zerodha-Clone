import React from 'react'
import './LeftSection.css'

import googlePlay from '../../assets/media/Images/googlePlayBadge.svg'
import appStore from '../../assets/media/Images/appStoreBadge.svg'
function LeftSection({Img,Title, Description, Button1="", Button2=""}) {
    return (
      <div className="leftSection">
        <div className="container LeftSectionContainer">
          <div className="row">
            <div className="col-md-7">
              <img src={Img} alt="" />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4 leftSectionText">
              <h1>{Title }</h1>
              <p>
                {Description}
              </p>
              <span className="leftSectionButtons row">
                {Button1 !== "" && (
                  <a href="#" className="col-6">
                    {Button1} <i class="fa-solid fa-arrow-right"></i>
                  </a>
                )}
                {Button2 !== "" && (
                  <a href="#" className="col-6">
                    {Button2}<i class="fa-solid fa-arrow-right"></i>
                  </a>
                )}
              </span>
              <br />
              <span className="storeBadges">
                <a href="#">
                  <img src={googlePlay} alt="" />
                </a>
                <a href="#">
                  <img src={appStore} alt="" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LeftSection;