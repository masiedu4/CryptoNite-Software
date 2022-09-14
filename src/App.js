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
import React, { useState } from "react";
import Header from "./Header";
import Coin from "./Coin";
import { Data } from "./hoc/Data";

// wrapping App/ importing coins from a HOC

const App = Data(({ coins }) => {
  const [search, setSearch] = useState("");

  function handleChange(event) {
    setSearch(event.target.value);
  }

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto sm:m-5">
      <Header search={search} handleChange={handleChange} />
      <div className="flex flex-wrap mt-10 justify-center">
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
  );
});

export default App;
