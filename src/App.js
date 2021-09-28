/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 28/09/2021 - 12:50:33
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 28/09/2021
 * - Author          : Michael
 * - Modification    :
 **/
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header  from "./Header";
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
    <div className="m-10"> 
    
     <Header search={search} handleChange={handleChange}/>
        
          <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
            <div class="py-8">
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block sm:min-w-full shadow rounded-lg overflow-hidden">
                  <div class="sm:min-w-full leading-normal">
                    <thead>
                      <tr class="sm:table-row">
                        <th
                          scope="col"
                          class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Currency
                        </th>
                        <th
                          scope="col"
                          class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Current Price
                        </th>
                        <th
                          scope="col"
                          class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Circulating Volume
                        </th>
                        <th
                          scope="col"
                          class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Price Change
                        </th>
                        <th
                          scope="col"
                          class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Market Cap
                        </th>
                      </tr>
                    </thead>
 {filteredCoins.map((coin) => ( 
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
  ))} 
                  </div>
                </div>
              </div>
            </div>
          </div>
        
</div>

  ); 
 }