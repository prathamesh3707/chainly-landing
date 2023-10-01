import React, { useState } from "react";
import styles from "./Serv.module.css";
import { ReactComponent as Icon } from "../../assets/icons/paper.svg";

function Card(props) {
	const [isHovered, setIsHovered] = useState(false);

	const handleHover = () => {
		setIsHovered(!isHovered);
	};

	const fillColor = isHovered
		? "white"
		: "linear-gradient(189deg, #0169F0 4.47%, #01C2FF 4.48%, #0169F0 92.07%);";
	console.log(fillColor);
	return (
		<div>
			<div className={styles.main}>
				<div onMouseEnter={handleHover} onMouseLeave={handleHover}>
					{/* Use the SVG component with inline style to change fill color */}
					<Icon
						style={{
							fill: isHovered ? "#ffffff" : "#ffffff",
							width: "50px",
							height: "50px",
						}}
					/>
				</div>
				<div className="mx-auto my-auto text-white">Incubation</div>
			</div>
		</div>
	);
}

export default Card;
