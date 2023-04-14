import React from "react"
import "./LocationCard.css"
import { Link } from "react-router-dom"
import { routes } from "../../routes/router"
const LocationCard = (props) => {
	return (
		<Link to={`${routes[2].path}${props.id}`} className="cmp-card">
			<h2 className="cmp-card-title">{props.title}</h2>
		</Link>
	)
}

export default LocationCard
