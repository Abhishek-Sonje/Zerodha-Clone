import React from "react";
import { useState } from "react";

import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  FormatAlignCenter,
  TrendingUp,
  MoreHoriz,
} from "@mui/icons-material";
// import FormatAlignCenterOutlinedIcon from "@mui/icons-material/FormatAlignCenterOutlined";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchlistItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchlistItem = ({ stock }) => {
  const [showWatchlistItems, setShowWatchlistItems] = useState(false);

  let handleMouseEnter = () => {
    setShowWatchlistItems(true);
  };
  let handleMouseRemove = () => {
    setShowWatchlistItems(false);
  };
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseRemove}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className={stock.isDown ? "down price" : "up price"}>
            {stock.price}
          </span>
        </div>
      </div>
      {showWatchlistItems && <WatchlistActions uid={stock.name} />}
    </li>
  );
};

const WatchlistActions = ({ uid }) => {
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          slot={{ transiton: Grow }}
        >
          <buttton className="buy">B</buttton>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          slot={{ transiton: Grow }}
        >
          <buttton className="sell">S</buttton>
        </Tooltip>
        <Tooltip
          title="Marcket Depth (D)"
          placement="top"
          arrow
          slot={{ transiton: Grow }}
        >
          <buttton className="action">
            <FormatAlignCenter className="watchlist-icon" />
          </buttton>
        </Tooltip>
        <Tooltip
          title="Charts (C)"
          placement="top"
          arrow
          slot={{ transiton: Grow }}
        >
          <buttton className="action"><TrendingUp className="icon"/></buttton>
        </Tooltip>
        <Tooltip
          title="More"
          placement="top"
          arrow
          slot={{ transiton: Grow }}
        >
          <buttton className="action"><MoreHoriz className="icon"/></buttton>
        </Tooltip>
      </span>
    </span>
  );
};
