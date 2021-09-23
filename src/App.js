import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Coin from "./Coin";

export default function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  // Get data from API

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // set search when input it filtered

  function handleChange(event) {
    setSearch(event.target.value);
  }

  // filter search keyword from api data

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text"> CryptoNite</h1>
        <p className="coin-text-2"> Made with 💛 by Michael</p>
        <form>
          <input
            className="coin-input"
            onChange={handleChange}
            type="text"
            placeholder="Search"
            value={search}
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            image={coin.image}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
          />
        );
      })}
    </div>
  );
}
