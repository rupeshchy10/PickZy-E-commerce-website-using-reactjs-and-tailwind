import React, { useState } from "react";
import ProductList from "../assets/ProductList";
import { GoHeartFill } from "react-icons/go";

const Product = ({ searchTerm, addToCart, addToWishlist, wishlist }) => {
	const categories = [
		"All",
		"Men",
		"Women",
		"Kids",
		"New Arrivals",
		"On Sale",
	];
	const [activeTab, setActiveTab] = useState("All");

	const filteredItems = ProductList.filter((item) => {
		const matchesCategory =
			activeTab === "All" ||
			(activeTab === "New Arrivals" && item.newArrival) ||
			(activeTab === "On Sale" && item.onSale) ||
			activeTab === item.category;

		const matchesSearch = item.name
			.toLowerCase()
			.includes(searchTerm.toLowerCase());

		return matchesCategory && matchesSearch;
	});

	const renderProducts = filteredItems.map((product) => {
		return (
			// Card
			<div key={product.id} className="bg-zinc-100 dark:bg-zinc-800 p-5 border border-zinc-300 dark:border-zinc-700 rounded-lg transition">
				<div className="flex items-center justify-between">
					<button
						className={`text-3xl cursor-pointer ${wishlist.some(
							(item) =>
								item.id === product.id)
									? "text-red-600"
									: "text-zinc-300 dark:text-zinc-400"
						}`}
						onClick={() => addToWishlist(product)}
					>
						<GoHeartFill />
					</button>

						{(product.onSale || product.newArrival) && (
							<span
								className={`px-3 py-1 text-white rounded-sm ${
									product.onSale
										? "bg-red-600"
										: "bg-green-600"
								}`}
							>
								{product.onSale ? "Sale" : "New"}
							</span>
						)}
					</div>

				{/* Product Image */}
				<div className="w-full h-100 sm:h-56 md:64 mt-4">
					<img src={product.image} className="w-full h-full object-cover"/>
				</div>

				{/* Product Detail */}
				<div className="text-center mt-3">
					<h3 className="text-[1.4rem] font-semibold dark:text-white">
						{product.name}
					</h3>
					<div className="mt-1 mb-5">
						{product.onSale && (
							<span className="text-zinc-600 dark:text-zinc-400 font-semibold text-lg line-through mr-4 md:mr-8">
								${product.oldPrice.toFixed(2)}
							</span>
						)}
						<span className="text-red-600 font-semibold text-lg ">
							${product.price.toFixed(2)}
						</span>
					</div>
					<button
						className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 w-full rounded-lg cursor-pointer active:bg-blue-700 transition"
						onClick={() => addToCart(product)}
					>
						Add to Cart
					</button>
				</div>
			</div>
		);
	});
	return (
		<section
			id="product-section"
			className="max-w-[1300px] mx-auto p-6 sm:p-10 md:p-12 transition dark:bg-zinc-800"
		>
			{/* Tabs */}
			<div className="flex flex-wrap gap-3 justify-center items-center mt-8">
				{categories.map((category) => {
					return (
						<button
							key={category}
							className={`px-8 py-2 rounded-full text-lg cursor-pointer transition ${
								activeTab === category
									? "bg-blue-600 text-white"
									: "bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200"
							}`}
							onClick={() => setActiveTab(category)}
						>
							{category}
						</button>
					);
				})}
			</div>

			{/* Product Listing */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 mt-12">
				{filteredItems.length === 0 ? (
					<p className="text-center col-span-full text-zinc-800 dark:text-zinc-300 text-lg">
						No Product found
					</p>
				) : (
					renderProducts
				)}
			</div>
		</section>
	);
};

export default Product;
