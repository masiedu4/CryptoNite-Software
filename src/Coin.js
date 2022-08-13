/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 28/09/2021 - 13:24:09
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 28/09/2021
 * - Author          : Michael
 * - Modification    :
 **/
import React from "react";
const style = {
  wrapper: "m-5 border border-header p-2 rounded-md",
  wrapperB: "flex justify-evenly",
  image: "mx-auto object-cover rounded-full h-6 w-6 ",
  lowPriceChangeText: "text-red-500 whitespace-nowrap font-semibold",
  highPriceChangeText: "text-green-500 whitespace-nowrap font-semibold",
  text: "text-gray-600 whitespace-nowrap font-semibold",
};

export default function Coin({
  image,
  name,
  price,
  volume,
  priceChange,
  marketcap,
}) {
  return (
    <div className={style.wrapper}>
      {/* symbol, currency and priceChange */}
      <div className={style.wrapperB}>
        <div className={style.wrapperB}>
          <a href="#">
            <img alt="profil" src={image} class={style.image} />
          </a>
          <p>{name} </p>
        </div>
        <div>
          {priceChange < 0 ? (
            <p className={style.lowPriceChangeText}>
              {" "}
              {priceChange.toFixed(2)}%{" "}
            </p>
          ) : (
            <p className={style.highPriceChangeText}>
              {priceChange.toFixed(2)}%{" "}
            </p>
          )}
        </div>
      </div>
      {/* price change */}
      <div className={style.wrapperB}>
        <p className={style.text}>Price</p>
        <p className={style.text}>${price.toLocaleString()}</p>
      </div>
      {/* volume */}
      <div className={style.wrapperB}>
        <p className={style.text}>Volume</p>
        <p className={style.text}>${volume.toLocaleString()} </p>
      </div>
      {/* market cap */}
      <div className={style.wrapperB}>
        <p className={style.text}> Market Cap </p>
        <p className={style.text}>${marketcap.toLocaleString()} </p>
      </div>
    </div>
  );
}
