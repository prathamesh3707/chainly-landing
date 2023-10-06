import React, { useState, useEffect } from "react";
import styles from "./Car.module.css";

const Car = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const images = [
		"https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg",
		"../../assets/Partners2.svg",
		"../../assets/Partners2.svg",
	];

	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000); // Change image every 3 seconds

		return () => {
			clearTimeout(timer);
		};
	}, [currentIndex, images.length]);

	return (
		<div className={styles.carousel}>
			{images.map((image, index) => (
				<img
					key={index}
					src={image}
					alt={`Slide ${index}`}
					className={index === currentIndex ? styles.active : styles.slide}
				/>
			))}
		</div>
	);
};

export default Car;
