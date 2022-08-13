/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 13/08/2022 - 11:38:17
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 13/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React, { useState, useEffect } from "react";
import axios from "axios";

const apiData = () => {
  const [coins, setCoins] = useState([]);

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

  return {
    coins,
  };
};

export default apiData;
