import React from 'react'
import './Education.css';
import education from '../../assets/media/Images/education.svg';

function Education() {
    return (
      <div className="container education">
        <div className="row">
          <div className="col text-center education-img">
            <img src={education} alt="Education" />
          </div>
          <div className="col education-info ">
            <h1 className="mb-4">Free and open marcket education</h1>
            <div className="para1 mb-4">
              <p className="mb-4">
                Varsity, the largest online stock market education book in the
                world covering everything from the basics to advanced trading.
              </p>
              <a href="#" className="mb-4">
                Varsity <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="para2 mb-4">
              <p className="mb-4">
                TradingQ&A, the most active trading and investment community in
                India for all your market related queries.
              </p>
              <a href="#" className="mb-4">
                TradingQ&A <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Education;