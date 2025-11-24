import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Product from "../components/Product";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import OrderSummary from "../components/OrderSummary";
import OrderPlace from "../components/OrderPlace";

const Home = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isScrolled, setIsScrolled] = useState(false);
	const [activePanel, setActivePanel] = useState(null);
	const [cart, setCart] = useState([]);
	const [orderSummary, setOrderSummary] = useState(false);
	const [orderPlaced, setOrderPlaced] = useState(false);

	// Total Calculation
	const subtotal = cart.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);
	const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
	const shippingFee = totalItems * 1;
	const orderTotal = subtotal + shippingFee;

	useEffect(() => {
		const changeNavbar = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", changeNavbar);
	}, []);

	// Handle Scroll
	const handleScroll = () => {
		const section = document.getElementById("product-section");
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	// Cart and Wishlist handlePanel Function
	const handlePanel = (tabName) => {
		setActivePanel((prev) => (prev === tabName ? null : tabName));
	};

	// Cart and Wishlist handleClose Function
	const handleClose = () => setActivePanel(null);

	// RemoveItem
	const removeItem = (product) => {
		setCart(cart.filter((item) => item.id !== product.id));
	};

	// QuantityIncrement
	const quantityIncrement = (product) => {
		setCart(
			cart.map((item) =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			)
		);
	};

	// QuantityDecrement
	const quantityDecrement = (product) => {
		setCart(
			cart.map((item) =>
				item.id === product.id && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			)
		);
	};

	// AddToCart Function
	const addToCart = (product) => {
		const alreadyAdded = cart.find((item) => item.id === product.id);
		if (alreadyAdded) {
			alert("Item already added in cart");
			return;
		}

		setCart([...cart, { ...product, quantity: 1 }]);
	};

	return (
		<div>
			<Navbar
				handleScroll={handleScroll}
				setSearchTerm={setSearchTerm}
				isScrolled={isScrolled}
				handlePanel={handlePanel}
				totalItems={totalItems}
			/>
			<Banner />
			<Product searchTerm={searchTerm} addToCart={addToCart} />
			<Cart
				activePanel={activePanel}
				handleClose={handleClose}
				cart={cart}
				removeItem={removeItem}
				quantityIncrement={quantityIncrement}
				quantityDecrement={quantityDecrement}
				subtotal={subtotal}
				shippingFee={shippingFee}
				orderTotal={orderTotal}
				setOrderSummary={setOrderSummary}
			/>
			<Wishlist activePanel={activePanel} handleClose={handleClose} />

			{/* Order Summary */}
			{orderSummary && (
				<OrderSummary
					cart={cart}
					subtotal={subtotal}
					shippingFee={shippingFee}
					orderTotal={orderTotal}
					setOrderPlaced={setOrderPlaced}
					setOrderSummary={setOrderSummary}
                    setCart={setCart}
				/>
			)}

			{/* Order Placed */}
			{orderPlaced && <OrderPlace setOrderPlaced={setOrderPlaced}/>}
		</div>
	);
};

export default Home;
