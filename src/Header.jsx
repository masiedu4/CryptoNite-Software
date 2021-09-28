/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 28/09/2021 - 13:54:05
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/09/2021
    * - Author          : Michael
    * - Modification    : 
**/
import React from 'react'

const Header = ({handleChange,search}) => {
	return (
		<div>
			<div className="flex justify-center items-center  text-xl mb-5 ">
				<h1 className="text-header font-bold"> CryptoNite</h1>
			</div>
			<div class=" text-sm flex justify-center items-center relative mb-10 ">
				<p className="text-subheader"> Made with 💛 by Michael</p>
			</div>

			<div class="flex justify-center items-center relative ">
				<form>
					<input
						onChange={handleChange}
						value={search}
						type="text"
						id="simple-email"
						class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
						placeholder="Your favorite crypto here"
					/>
				</form>
			</div>

		</div>

	)
}

export default Header
