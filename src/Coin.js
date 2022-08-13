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

export default function Coin({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) {
  return (
    <div className="border">
      {/* symbol, currency and priceChange */}
      <div className="flex justify-evenly">
        <div className="flex justify-evenly">
          <a href="#">
            <img
              alt="profil"
              src={image}
              class="mx-auto object-cover rounded-full h-6 w-6 "
            />
          </a>
          <p>{name} </p>
        </div>
        <div>
          {priceChange < 0 ? (
            <p className="text-red-500 whitespace-nowrap font-semibold">
              {" "}
              {priceChange.toFixed(2)}%{" "}
            </p>
          ) : (
            <p className="text-green-500 whitespace-nowrap font-semibold">
              {priceChange.toFixed(2)}%{" "}
            </p>
          )}
        </div>
      </div>
      {/* price change */}
      <div className="flex justify-evenly">
        <p className="text-gray-600 whitespace-nowrap font-semibold">Price</p>
        <p className="text-gray-600 whitespace-nowrap font-semibold">
          ${price.toLocaleString()}
        </p>
      </div>
      {/* volume */}
      <div className="flex justify-evenly">
        <p className="text-gray-600 whitespace-nowrap font-semibold">Volume</p>
        <p className="text-gray-600 whitespace-nowrap font-semibold">
          ${volume.toLocaleString()}{" "}
        </p>
      </div>
      {/* market cap */}
      <div className="flex justify-evenly">
        <p className="text-gray-600 whitespace-nowrap font-semibold">
          {" "}
          Market Cap{" "}
        </p>
        <p className="text-gray-600 whitespace-nowrap font-semibold">
          ${marketcap.toLocaleString()}{" "}
        </p>
      </div>
    </div>
    // <tbody>
    //   <tr>
    //     <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //       <div class="flex items-center">
    //         <div class="flex-shrink-0">
    //           <a href="#" class="block relative">
    //             <img
    //               alt="profil"
    //               src={image}
    //               class="mx-auto object-cover rounded-full h-10 w-10 "
    //             />
    //           </a>
    //         </div>
    //         <div class="ml-3">
    //           <p class="text-gray-900 whitespace-no-wrap">{name} </p>
    //         </div>
    //       </div>
    //     </td>
    //     <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //       <p class="text-gray-900 whitespace-no-wrap">
    //         ${price.toLocaleString()}
    //       </p>
    //     </td>
    //     <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //       <p class="text-gray-900 whitespace-no-wrap">
    //         ${volume.toLocaleString()}
    //       </p>
    //     </td>
    //     <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //       {priceChange < 0 ? (
    //         <p className="text-red-500 whitespace-nowrap font-bold">
    //           {" "}
    //           {priceChange.toFixed(2)}%{" "}
    //         </p>
    //       ) : (
    //         <p className="text-green-500 whitespace-nowrap font-bold">
    //           {priceChange.toFixed(2)}%{" "}
    //         </p>
    //       )}
    //     </td>

    //     <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //       <p class="text-gray-900 whitespace-no-wrap">
    //         ${marketcap.toLocaleString()}
    //       </p>
    //     </td>
    //   </tr>
    // </tbody>
  );
}
