import React from "react"
import "./Loading.css"
/**
 * Component Loading
 *
 * @returns {JSX.Element} - Component Loading
 * @author Quentin
 * @version 1.0
 */
const Loading = () => {
	// Rendu du composant
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
