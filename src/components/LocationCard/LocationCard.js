import React from "react"
import "./LocationCard.css"
import { Link } from "react-router-dom"
import { routes } from "../../routes/router"
const LocationCard = (props) => {
	return (
		<>
			{props.picture ? (
				<Link
					to={`${routes[2].path}${props.id}`}
					className="cmp-card"
					style={{
						backgroundImage: `linear-gradient(
				  180deg,
				  rgba(255, 255, 255, 0) 0%,
				  rgba(0, 0, 0, 0.5) 100%
				), url(${props.picture})`,
					}}
				>
					<h2 className="cmp-card-title">{props.title}</h2>
				</Link>
			) : (
				<Link to={`${routes[2].path}${props.id}`} className="cmp-card-nocover">
					<h2 className="cmp-card-title">{props.title}</h2>
				</Link>
			)}
		</>
	)
}

export default LocationCard
