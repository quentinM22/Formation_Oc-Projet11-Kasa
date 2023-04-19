import React from "react"
import "./Loading.css"

const Loading = () => {
	return (
		<div className="cmp-loader-container">
			<p>Chargement...</p>
			<div className="lds-roller">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}
export default Loading
