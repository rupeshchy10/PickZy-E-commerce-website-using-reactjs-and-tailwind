import React, { useEffect, useState } from "react";
import BannerImage from "../assets/banner.jpg";

const Banner = () => {
	const initialTime = 3 * 60 * 60;
	const [timeLeft, setTimeLeft] = useState(() => {
		const storedTime = localStorage.getItem("remainingTime");
		return storedTime && parseInt(storedTime, 10) > 0
			? parseInt(storedTime, 10)
			: initialTime;
	});

	useEffect(() => {
		if (timeLeft <= 0) return;
		const timer = setInterval(() => {
			setTimeLeft((prev) => {
				if (prev <= 1) {
					clearInterval(timer);
					localStorage.setItem("remainingTime", 0);

					return 0;
				}
				const remaining = prev - 1;
				localStorage.setItem("remainingTime", remaining);
				return remaining;
			});
		}, 1000);
		return () => clearInterval(timer);
	}, [timeLeft]);

	//Format the timer
	const formatTime = (time) => {
		const hours = Math.floor(time / 3600);
		const minutes = Math.floor((time % 3600) / 60);
		const seconds = time % 60;

		return {
			hours: String(hours).padStart(2, "0"),
			minutes: String(minutes).padStart(2, "0"),
			seconds: String(seconds).padStart(2, "0"),
		};
	};

	const { hours, minutes, seconds } = formatTime(timeLeft);

	return (
		<section
			className="h-[60vh] sm:h-[70vh] mt-[14vh] bg-cover bg-center relative"
			style={{ backgroundImage: `url(${BannerImage})` }}
		>
			{/* Background overlay */}
			<div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
			<div className="relative max-w-[1300px] mx-auto px-6 sm:px-12 h-full flex flex-col justify-center gap-3">
				<h1 className="text-red-600 text-5xl sm:text-7xl lg:text-9xl uppercase font-bold tracking-tight">
					Big Sale!
				</h1>
				<h2 className="text-zinc-800 dark:text-zinc-200 text-xl sm:text-3xl">
					Up to 50% OFF - Limited Time Only!
				</h2>

				{/* Timer */}
				<div className="flex items-center text-3xl sm:text-5xl lg:text-6xl font-bold text-zinc-800 dark:text-white gap-x-3 mt-5">
					<span className="text-white bg-zinc-800 p-3 rounded">
						{hours}
					</span>
					:
					<span className="text-white bg-zinc-800 p-3 rounded">
						{minutes}
					</span>
					:
					<span className="text-white bg-zinc-800 p-3 rounded">
						{seconds}
					</span>
				</div>
			</div>
		</section>
	);
};

export default Banner;
