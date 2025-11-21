import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Product from "../components/Product";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";

const Home = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isScrolled, setIsScrolled] = useState(false);
	const [activePanel, setActivePanel] = useState(null);
	const [cart, setCart] = useState([]);

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
			/>
			<Wishlist activePanel={activePanel} handleClose={handleClose} />
		</div>
	);
};

export default Home;
