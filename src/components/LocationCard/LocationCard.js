import React from "react"
import "./LocationCard.css"
const LocationCard = (props) => {
	return (
		<div className="cmp-card">
			<h2 className="cmp-card-title">{props.title}</h2>
		</div>
	)
}

export default LocationCard
