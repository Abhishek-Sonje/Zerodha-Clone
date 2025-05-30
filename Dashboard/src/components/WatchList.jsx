import React, { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  FormatAlignCenter,
  TrendingUp,
  MoreHoriz,
} from "@mui/icons-material";
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnutChart";

const WatchList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWatchlist = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const labels = watchlist.map((stock) => stock["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: "WatchList",
        data: watchlist.map((stock)=>stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="counts">
          {filteredWatchlist.length} / {watchlist.length}
        </span>
      </div>

      <ul className="list">
        {filteredWatchlist.length > 0 ? (
          filteredWatchlist.map((stock, index) => (
            <WatchlistItem stock={stock} key={`${stock.name}-${index}`} />
          ))
        ) : (
          <li className="no-results">No matching stocks found</li>
        )}
      </ul>
      <DoughnutChart data={data} />
    </div>
  );
};

const WatchlistItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);
  const generalContext = useContext(GeneralContext);

  const handleMouseEnter = () => setShowActions(true);
  const handleMouseLeave = () => setShowActions(false);

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={`${stock.name}, price: ${stock.price}, change: ${stock.percent}`}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" aria-hidden="true" />
          ) : (
            <KeyboardArrowUp className="up" aria-hidden="true" />
          )}
          <span className={stock.isDown ? "down price" : "up price"}>
            {stock.price}
          </span>
        </div>
      </div>
      {showActions && <WatchlistActions stock={stock} />}
    </li>
  );
};

const WatchlistActions = ({ stock }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => generalContext.openBuyWindow(stock.name);
  const handleSellClick = () => generalContext.openSellWindow(stock.name);

  return (
    <div className="actions" role="toolbar" aria-label="Stock actions">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button
          className="buy"
          onClick={handleBuyClick}
          aria-label={`Buy ${stock.name}`}
        >
          B
        </button>
      </Tooltip>
      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        slot={{ transiton: Grow }}
      >
        <button
          className="sell"
          onClick={handleSellClick}
          aria-label={`Sell ${stock.name}`}
        >
          S
        </button>
      </Tooltip>
      <Tooltip
        title="Market Depth (D)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="action" aria-label="View market depth">
          <FormatAlignCenter className="watchlist-icon" />
        </button>
      </Tooltip>
      <Tooltip
        title="Charts (C)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="action" aria-label="View charts">
          <TrendingUp className="icon" />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="action" aria-label="More options">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
      
    </div>
  );
};

export default WatchList;
