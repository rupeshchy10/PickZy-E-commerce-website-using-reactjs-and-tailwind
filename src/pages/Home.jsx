import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Product from "../components/Product";


const Home = () => {
	return (
		<div>
			<Navbar />
            <Banner/>
            <Product/>
		</div>
	);
};

export default Home;
