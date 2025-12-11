import React, { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeToggleBtn = () => {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
	);
	useEffect(() => {
		const prefersDarkMode = window.matchMedia(
			"(prefers-color-scheme:dark)"
		).matches;
		setTheme(theme || (prefersDarkMode ? "dark" : "light"));
	}, []);
	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);
	return (
		<>
			{/* -----------Dark Mode Toggle---------- */}
			<button className="text-2xl text-zinc-800 dark:text-blue-300 cursor-pointer">
				{theme === "dark" ? (
					<BsSun onClick={() => setTheme("light")} />
				) : (
					<BsMoon onClick={() => setTheme("dark")} />
				)}
			</button>
		</>
	);
};

export default ThemeToggleBtn;
