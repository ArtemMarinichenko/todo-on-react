import React from "react";

const Display = (props) => {
	return (
		<header className="header">
			<div>
				<h1>Active tasks:</h1>
				<p>{props.active}</p>
			</div>
			<div className="actual">
				<h3>Actual tasks:</h3>
				<p>{props.actual}</p>
			</div>
		</header>
	)
}

export default Display;