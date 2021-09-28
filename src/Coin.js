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
    
              <tbody>
                <tr>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <a href="#" class="block relative">
                          <img
                            alt="profil"
                            src={image}
                            class="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">{name} </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">
                      ${price.toLocaleString()}
                    </p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">
                      ${volume.toLocaleString()}
                    </p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {priceChange < 0 ? (
                      <p className="text-red-500 whitespace-nowrap">
                        {" "}
                        {priceChange.toFixed(2)}%{" "}
                      </p>
                    ) : (
                      <p className="text-green-800 whitespace-nowrap">
                        {priceChange.toFixed(2)}%{" "}
                      </p>
                    )}
                  </td>

                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">
                      ${marketcap.toLocaleString()}
                    </p>
                  </td>
                </tr>
</tbody>              
          
  );
}
