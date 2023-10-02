import React from "react";
import Title from "../Title";
import styles from "./Test.module.css";
function Test() {
	return (
		<div style={{ position: "relative" }}>
			{/* Header */}
			<div className={styles.header}>
				<h1 className={styles.secondHeading}>
					{" "}
					<br />
					<Title titleName="Chainly Plans 🚀" />
					<br />
					<div style={{ marginTop: "2rem" }}>Start your web3 journey today</div>
				</h1>
				<br />
				<br />
			</div>
			<div className={styles.rightImage}></div>
			<div className={styles.leftImage}></div>

			{/* Boxes */}
			<div
				className="flex flex-col md:flex-row justify-evenly w-5/6 md:w-3/4 mx-auto"
				style={{
					background: "#000211",
					width: "100%",
					paddingBottom: "5rem",
				}}
			>
				<div className="border w-96 border-brand rounded-lg h-3/5 p-2 my-8 bg-gradient-to-b from-back to-black">
					<div
						className="w-3/5 mx-auto h-12 -mt-10 py-3 rounded-2xl bg-brand flex"
						style={{ fontFamily: "Gilroy-Bold", color: "white" }}
					>
						<div className="mx-auto">INCUBATION</div>
					</div>
					<div style={{ color: "white", fontFamily: "Gilroy" }}>
						<div className="border-b border-borbot mt-4 p-2 flex">
							<div className="mx-auto">Access Top Incubators</div>
						</div>
						<div className="border-b border-borbot mt-3 p-2 flex">
							{" "}
							<div className="mx-auto">Reputed Callers</div>
						</div>
						<div className="border-b border-borbot mt-3 p-2 flex">
							<div className="mx-auto">Better growth Advice</div>
						</div>
						<div className="border-b border-borbot mt-3 p-2 flex">
							<div className="mx-auto">Amazing discounted deals</div>
						</div>
						<div className="border-b border-borbot mt-3 p-2 flex">
							<div className="mx-auto"> Private group membership</div>
						</div>
						<div className="border-b border-borbot mt-3 p-2 flex">
							<div className="mx-auto">Fund raising strategy</div>
						</div>
						<div className="border-b border-borbot mt-3 p-2 flex">
							<div className="mx-auto"> Demo day</div>
						</div>
					</div>
					<div className="w-3/5 mx-auto h-12 text-white mt-6 mb-3 py-3 rounded-2xl bg-gradient-to-r from-brand1 to-brand flex">
						<div
							className="mx-auto"
							style={{ fontFamily: "Gilroy-Bold", color: "white" }}
						>
							GET IN TOUCH
						</div>
					</div>
				</div>
				<div className="border w-96 border-brand rounded-lg h-3/5 p-2 my-8 bg-gradient-to-b from-back to-black">
					<div
						className="w-3/5 mx-auto h-12 -mt-10 py-3 rounded-2xl bg-brand flex"
						style={{ fontFamily: "Gilroy-Bold", color: "white" }}
					>
						<div className="mx-auto">MARKETING</div>
					</div>
					<div style={{ color: "white", fontFamily: "Gilroy" }}>
						<div className="border-b border-borbot mt-4 p-2 flex">
							<div className="mx-auto">Access Top Incubators</div>
						</div>
						<div className="border-b border-borbot mt-3 p-2 flex">
							{" "}
							<div className="mx-auto">Reputed Callers</div>
						</div>
						<div className="border-b border-borbot mt-3 p-2 flex">
							<div className="mx-auto">Better growth Advice</div>
						</div>
						<div className="border-b border-borbot mt-3 p-2 flex">
							<div className="mx-auto">Amazing discounted deals</div>
						</div>
						<div className="border-b border-borbot mt-3 p-2 flex">
							<div className="mx-auto"> Private group membership</div>
						</div>
						<div className="border-b border-borbot mt-3 p-2 flex">
							<div className="mx-auto">Fund raising strategy</div>
						</div>
						<div className="border-b border-borbot mt-3 p-2 flex">
							<div className="mx-auto"> Demo day</div>
						</div>
					</div>
					<div className="w-3/5 mx-auto h-12 text-white mt-6 mb-3 py-3 rounded-2xl bg-gradient-to-r from-brand1 to-brand flex">
						<div
							className="mx-auto"
							style={{ fontFamily: "Gilroy-Bold", color: "white" }}
						>
							GET IN TOUCH
						</div>
					</div>
				</div>
				<div className="border w-96 border-brand rounded-lg h-3/5 p-2 my-8 bg-gradient-to-b from-back to-black">
					<div
						className="w-3/5 mx-auto h-12 -mt-10 py-3 rounded-2xl bg-brand flex"
						style={{ fontFamily: "Gilroy-Bold", color: "white" }}
					>
						<div className="mx-auto">LISTING</div>
					</div>
					<div style={{ color: "white", fontFamily: "Gilroy" }}>
						<div className="border-b border-borbot mt-4 p-2 flex">
							<div className="mx-auto">Access Top Incubators</div>
						</div>
						<div className="border-b border-borbot mt-3 p-2 flex">
							{" "}
							<div className="mx-auto">Reputed Callers</div>
						</div>
						<div className="border-b border-borbot mt-3 p-2 flex">
							<div className="mx-auto">Better growth Advice</div>
						</div>
						<div className="border-b border-borbot mt-3 p-2 flex">
							<div className="mx-auto">Amazing discounted deals</div>
						</div>
						<div className="border-b border-borbot mt-3 p-2 flex">
							<div className="mx-auto"> Private group membership</div>
						</div>
						<div className="border-b border-borbot mt-3 p-2 flex">
							<div className="mx-auto">Fund raising strategy</div>
						</div>
						<div className="border-b border-borbot mt-3 p-2 flex">
							<div className="mx-auto"> Demo day</div>
						</div>
					</div>
					<div className="w-3/5 mx-auto h-12 text-white mt-6 mb-3 py-3 rounded-2xl bg-gradient-to-r from-brand1 to-brand flex">
						<div
							className="mx-auto"
							style={{ fontFamily: "Gilroy-Bold", color: "white" }}
						>
							GET IN TOUCH
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Test;
