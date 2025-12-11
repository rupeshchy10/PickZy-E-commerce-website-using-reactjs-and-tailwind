import React from "react";

const OrderPlace = ({ setOrderPlaced }) => {
	return (
		<section className="flex justify-center items-center bg-black/95 fixed inset-0 z-40 px-4">
			<div className="bg-zinc-100 dark:bg-zinc-900 p-6 sm:p-8 w-full max-w-[400px] text-center rounded-lg border border-zinc-300 dark:border-zinc-700 shadow-xl transition-all">
				<h2 className="text-2xl sm:text-3xl text-green-600 dark:text-green-500 font-bold">
					Order Placed!
				</h2>
				<p className="text-zinc-800 dark:text-zinc-300 my-4 text-sm sm:text-base">
					Thanks for your purchase!
				</p>
				<button
					className="px-5 sm:px-6 py-2.5 sm:py-3 text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg w-full sm:w-auto mt-2 transition"
					onClick={() => setOrderPlaced(false)}
				>
					Close
				</button>
			</div>
		</section>
	);
};

export default OrderPlace;
