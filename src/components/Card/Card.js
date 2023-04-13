import React from "react"
import "./Card.css"
const Card = (props) => {
	return (
		<div className="cmp-card">
			<h2 className="cmp-card-title">{props.title}</h2>
		</div>
	)
}

export default Card
