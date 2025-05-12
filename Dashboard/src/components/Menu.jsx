import React from "react";
import kiteLogo from "../assets/kite-logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isMenuSelected, setIsMenuSelected] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setIsMenuSelected(index);
  };
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  let menuSelected = "selected menu";
  let menu = "menu";
  return (
    <div className="menu-container">
      <img src={kiteLogo} style={{ width: "30px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              to={"/"}
              onClick={() => handleMenuClick(0)}
              style={{ textDecoration: "none" }}
            >
              <p className={isMenuSelected == 0 ? menuSelected : menu}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              to={"/orders"}
              onClick={() => handleMenuClick(1)}
              style={{ textDecoration: "none" }}
            >
              <p className={isMenuSelected == 1 ? menuSelected : menu}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              to={"/holdings"}
              onClick={() => handleMenuClick(2)}
              style={{ textDecoration: "none" }}
            >
              <p className={isMenuSelected == 2 ? menuSelected : menu}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              to={"/positions"}
              onClick={() => handleMenuClick(3)}
              style={{ textDecoration: "none" }}
            >
              <p className={isMenuSelected == 3 ? menuSelected : menu}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              to={"/funds"}
              onClick={() => handleMenuClick(4)}
              style={{ textDecoration: "none" }}
            >
              <p className={isMenuSelected == 4 ? menuSelected : menu}>Funds</p>
            </Link>
          </li>
          <li>
            <Link
              to={"/apps"}
              onClick={() => handleMenuClick(5)}
              style={{ textDecoration: "none" }}
            >
              <p className={isMenuSelected == 5? menuSelected : menu}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleDropdownToggle}>
          <div className="avatar">ZU</div>
          <p className= "username" >USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
