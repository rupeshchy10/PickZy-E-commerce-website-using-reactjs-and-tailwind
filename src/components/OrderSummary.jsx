import React from "react";
import { SiTrueup } from "react-icons/si";

const OrderSummary = ({
	cart,
	subtotal,
	shippingFee,
	orderTotal,
	setOrderPlaced,
	setOrderSummary,
	setCart,
}) => {
	const handlePlaceOrder = () => {
		setOrderSummary(false);
		setOrderPlaced(true);
		setCart([]);
	};
	return (
		<section className="flex justify-center items-center bg-black/95 fixed inset-0 z-40 px-4">
			<div className="bg-zinc-100 dark:bg-zinc-900 p-6 sm:p-8 w-full max-w-[600px] rounded-xl border border-zinc-300 dark:border-zinc-700">
				<h2 className="text-2xl sm:text-3xl text-zinc-800 dark:text-zinc-200 font-bold mb-5 text-center">
					OrderSummary
				</h2>

                {/* Cart Items */}
					<div className="space-y-2 max-h-[250px] overflow-y-auto pr-1">
						{cart.map((item) => (
							<div
								key={item.id}
								className="flex justify-between items-center border-b border-zinc-300 dark:border-zinc-500"
							>
								<span className="text-zinc-800 dark:text-zinc-200 py-2">
									{item.name} (x{item.quantity})
								</span>
								<span className="text-zinc-800 dark:text-zinc-200 py-2">
									${(item.price * item.quantity).toFixed(2)}
								</span>
							</div>
						))}
					</div>

					{/* Subtotal */}
					<div className="flex justify-between pt-3">
						<span className="text-zinc-800 dark:text-zinc-200">Subtotal</span>
						<span className="text-zinc-800 dark:text-zinc-200">
							${subtotal.toFixed(2)}
						</span>
					</div>

					{/* Shipping */}
					<div className="flex justify-between py-3">
						<span className="text-zinc-800 dark:text-zinc-200">
							Shipping & Handling
						</span>
						<span className="text-zinc-800 dark:text-zinc-200">
							${shippingFee.toFixed(2)}
						</span>
					</div>

					{/* Order Total */}
					<div className="flex justify-between pt-3 border-t-2 border-zinc-300 dark:border-zinc-500 mb-5">
						<span className="text-blue-600 font-bold text-xl">
							Order Total
						</span>
						<span className="text-blue-600 font-bold text-xl">
							${orderTotal.toFixed(2)}
						</span>
					</div>

				{/* Buttons */}
				<div className="flex mt-8 gap-3 flex-colm sm:flex-row">
					<button
						className="bg-zinc-800 hover:bg-zinc-700 flex-1 py-3 active:bg-zinc-900 text-white rounded-lg cursor-pointer"
						onClick={() => setOrderSummary(false)}
					>
						Cancel
					</button>
					<button
						className="bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 flex-1 py-3 active:bg-blue-700 text-white rounded-lg cursor-pointer"
						onClick={handlePlaceOrder}
					>
						Place Order
					</button>
				</div>
			</div>
		</section>
	);
};

export default OrderSummary;
