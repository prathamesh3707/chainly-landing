import React from "react";
import styles from "./Form.module.css";

function Form() {
	return (
		<div className="bg-links p-8 ">
			<div className="border-2 border-brand flex flex-col justify-center md:w-2/5 w-4/5 mx-auto p-4 rounded-sm">
				<h1 className={styles.heading}>Contact</h1>
				<input
					placeholder="Name"
					className="my-4 mx-auto w-48 md:w-96  border-2 border-brand rounded-lg p-1"
				></input>
				<input
					placeholder="Email"
					className="my-4 mx-auto w-48 md:w-96 mt-4 border-2 border-brand rounded-lg p-1"
				></input>

				<textarea
					placeholder="Reason of Contact"
					className="my-4 mx-auto w-48 md:w-96 mt-4 border-2 border-brand rounded-lg p-1"
					name="Text1"
					cols="20"
					rows="4"
				></textarea>
			</div>
		</div>
	);
}

export default Form;
