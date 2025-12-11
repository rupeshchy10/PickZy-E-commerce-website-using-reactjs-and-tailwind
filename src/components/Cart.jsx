import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const Cart = ({
	activePanel,
	handleClose,
	cart,
	removeItem,
	quantityIncrement,
	quantityDecrement,
	subtotal,
	orderTotal,
	shippingFee,
	setOrderSummary,
}) => {
	return (
		<div
			className={`flex flex-col justify-between gap-5 bg-zinc-100 dark:bg-zinc-900 fixed top-0 right-0 bottom-0 z-40 left-auto w-full max-w-[400px] border border-zinc-300 dark:border-zinc-700 py-7 transform transition-transform duration-300 ${
				activePanel === "cart" ? "translate-x-0" : "translate-x-full"
			}`}
		>
			{/* Heading */}
			<div className="px-6 sm:px-10">
				<h3 className="text-2xl sm:text-3xl font-bold text-zinc-800 dark:text-zinc-200 text-center">
					Your Cart
				</h3>
			</div>

			{/* Cart Items */}
			<div className="flex-1 flex flex-col gap-2 overflow-y-auto scroll px-4 sm:px-0">
				{cart.length === 0 ? (
					<p className="text-zinc-800 dark:text-zinc-300 text-center">
						Your cart is empty.
					</p>
				) : (
					cart.map((product, index) => {
						return (
							<div
								className={`flex items-center gap-3 px-4 sm:px-5 py-1 border-y border-zinc-300 dark:border-zinc-700 ${
									index % 2 === 0
										? "bg-blue-100 dark:bg-zinc-400/30"
										: "bg-white dark:bg-zinc-800/30"
								}`}
								key={index}
							>
								{/* Cart Image */}
								<div className="w-16 sm:w-20 h-16 sm:h-20 shrink-0">
									<img
										src={product.image}
										className="w-full h-full object-contain"
									/>
								</div>

								{/* Product Detail */}
								<div className="flex-1">
									<div className="flex justify-between items-start">
										<h4 className="font-semibold text-zinc-800 dark:text-zinc-300 text-base sm:text-lg">
											{product.name}
										</h4>
										<button
											className="w-7 h-7 sm:w-8 sm:h-8 bg-red-600 dark:bg-red-500 rounded-full text-white flex justify-center items-center mr-[25px] cursor-pointer active:bg-red-700 active:scale-110"
											onClick={() => removeItem(product)}
										>
											<FaTrash />
										</button>
									</div>

									<div className="flex justify-between items-center mt-1">
										<div>
											{product.onSale && (
												<span className="text-zinc-600 dark:text-zinc-400 font-semibold text-base sm:text-lg line-through mr-3">
													$
													{product.oldPrice.toFixed(
														2
													)}
												</span>
											)}
											<span className="text-red-600 font-semibold text-base sm:text-lg">
												${product.price.toFixed(2)}
											</span>
										</div>

										{/* Quantity */}
										<div className="flex gap-2 items-center">
											<button
												className="w-7 h-7 bg-blue-600 dark:bg-blue-500 rounded-full text-white flex justify-center items-center text-[12px] sm:text-[14px] cursor-pointer active:bg-blue-700 active:scale-110"
												onClick={() =>
													quantityDecrement(product)
												}
											>
												<FaMinus />
											</button>
											<span className="text-zinc-800 dark:text-zinc-200">
												{product.quantity}
											</span>
											<button
												className="w-7 h-7 bg-blue-600 dark:bg-blue-500 rounded-full text-white flex justify-center items-center text-[12px] sm:text-[14px] cursor-pointer active:bg-blue-700 active:scale-110"
												onClick={() =>
													quantityIncrement(product)
												}
											>
												<FaPlus />
											</button>
										</div>
									</div>
								</div>
							</div>
						);
					})
				)}
			</div>

			{/* Cart Total */}
			<div className="px-6 sm:px-10 border-y border-zinc-300 dark:border-zinc-600">
				<div className="flex justify-between pt-1">
					<span className="text-zinc-800 dark:text-zinc-300">
						Subtotal
					</span>
					<span className="text-zinc-800 dark:text-zinc-300">
						${subtotal.toFixed(2)}
					</span>
				</div>
				<div className="flex justify-between py-2">
					<span className="text-zinc-800 dark:text-zinc-300">
						Shipping & Handling
					</span>
					<span className="text-zinc-800 dark:text-zinc-300">
						${shippingFee.toFixed(2)}
					</span>
				</div>
				<div className="flex justify-between py-2 border-t border-zinc-300 dark:border-zinc-500">
					<span className="text-blue-600 text-lg font-bold">
						Order Total
					</span>
					<span className="text-blue-600 text-lg font-bold">
						${orderTotal.toFixed(2)}
					</span>
				</div>
			</div>

			{/* Buttons */}
			<div className="flex gap-2 px-6 sm:px-10">
				<button
					className="bg-blue-600 dark:bg-blue-500 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700 active:scale-105"
					onClick={handleClose}
				>
					Close
				</button>
				<button
					className={`text-white flex-1 h-[7vh] active:bg-blue-700 active:scale-105 ${
						cart.length === 0
							? "bg-gray-400 cursor-not-allowed"
							: "bg-blue-600 dark:bg-blue-500 cursor-pointer"
					}`}
					disabled={cart.length === 0}
					onClick={() => setOrderSummary(true)}
				>
					Checkout
				</button>
			</div>
		</div>
	);
};

export default Cart;
