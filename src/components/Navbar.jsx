import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { BsSun, BsMoon } from "react-icons/bs";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Navbar = ({
	handleScroll,
	setSearchTerm,
	isScrolled,
	handlePanel,
	totalItems,
	wishlist,
	theme,
	setTheme,
}) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [mobileSearch, setMobileSearch] = useState(false);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 bg-[#e4e4f3] dark:bg-zinc-800 ${
				isScrolled ? "shadow-lg" : ""
			}`}
		>
			<nav className="max-w-[1300px] mx-auto px-6 lg:px-12 h-[14vh] flex items-center justify-between">
				{/* Logo */}
				<a
					href="#"
					className="flex items-center w-14 h-14 bg-zinc-100 dark:bg-zinc-800 rounded-full p-2 font-bold"
				>
					<img src={Logo} className="w-full h-full object-contain" />
					<h1 className="dark:text-white text-2xl ml-4">
						Pick<span className="text-red-500">Zy</span>
					</h1>
				</a>

				{/* ------------Navbar Menu-------------- */}
				{/* ------------Desktop Search-------------- */}
				<div className="flex items-center gap-x-5">
					{/* Search Bar */}
					<div className="hidden md:flex items-center p-1 rounded-full border-2 border-blue-600 dark:border-blue-400">
						<input
							type="text"
							name="search"
							id="search"
							placeholder="Search..."
							autoComplete="off"
							className="h-[5vh] pl-4 flex-1 focus:outline-none bg-transparent dark:text-white"
							onFocus={handleScroll}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<button className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-500 text-white text-xl">
							<IoSearch />
						</button>
					</div>

					{/* ------------Desktop Icons------------ */}
					<div className="hidden md:flex gap-x-5">
						{/* -----------Dark Mode Toggle---------- */}
						
						<ThemeToggleBtn theme={theme} setTheme={setTheme} />

						{/* ----------Wishlist---------- */}
						<button
							className="text-[1.7rem] text-zinc-800 dark:text-white relative cursor-pointer"
							onClick={() => handlePanel("wishlist")}
						>
							<GoHeartFill />
							{wishlist.length > 0 && (
								<span className="flex justify-center items-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px] absolute top-4 right-3 border-2 border-white">
									{wishlist.length}
								</span>
							)}
						</button>

						{/* Cart Icon */}
						<button
							className="text-[1.7rem] text-zinc-800 dark:text-white relative cursor-pointer"
							onClick={() => handlePanel("cart")}
						>
							<HiShoppingBag />
							{totalItems > 0 && (
								<span className="flex justify-center items-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px] absolute top-4 right-4 border-2 border-white">
									{totalItems}
								</span>
							)}
						</button>
					</div>

					{/* -----------MOBILE ICONS---------- */}
					<div className="flex items-center gap-4 md:hidden">
						{/* -----------Dark Mode Toggle----------- */}
												<ThemeToggleBtn theme={theme} setTheme={setTheme} />


						{/* ----------Mobile Search Toggle--------- */}
						<button
							className="text-2xl text-zinc-800 dark:text-gray-400"
							onClick={() => setMobileSearch(!mobileSearch)}
						>
							<IoSearch />
						</button>

						{/* ------------Hamburger Menu--------- */}
						<button
							className="text-3xl text-zinc-800 dark:text-gray-400"
							onClick={() => setMenuOpen(!menuOpen)}
						>
							{menuOpen ? <IoClose /> : <RxHamburgerMenu />}
						</button>
					</div>
				</div>
			</nav>

			{/* -----------MOBILE SEARCH BAR--------- */}
			{mobileSearch && (
				<div className="md:hidden flex items-center p-2 border-t border-zinc-300 bg-[#e4e4f3] dark:bg-[#111] dark:border-zinc-700">
					<input
						type="text"
						placeholder="Search..."
						className="flex-1 h-12 px-4 rounded-l-full border border-blue-600 dark:border-blue-400 bg-transparent dark:text-white"
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<button className="w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-r-full text-xl flex items-center justify-center">
						<IoSearch />
					</button>
				</div>
			)}

			{/* MOBILE MENU */}
			{menuOpen && (
				<div className="md:hidden bg-[#e4e4f3] dark:bg-[#111] border-t border-zinc-300 dark:border-zinc-700 p-4">
					<button
						className="w-full flex justify-between items-center text-lg py-3 text-zinc-800 dark:text-white"
						onClick={() => handlePanel("wishlist")}
					>
						<span>Wishlist</span>
						<span className="text-2xl">
							<GoHeartFill />
						</span>
					</button>

					<button
						className="w-full flex justify-between items-center text-lg py-3 text-zinc-800 dark:text-white"
						onClick={() => handlePanel("cart")}
					>
						<span>Cart</span>
						<span className="text-2xl">
							<HiShoppingBag />
						</span>
					</button>
				</div>
			)}
		</header>
	);
};

export default Navbar;
