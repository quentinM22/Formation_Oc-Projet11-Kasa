import React, { useState } from "react"
import "./AboutCard.css"
const AboutCard = (props) => {
	const [isOpen, setIsOpen] = useState(false)
	function toggle() {
		setIsOpen(!isOpen)
	}
	return (
		<div>
			<div className="cmp-AboutCard-btn" onClick={toggle}>
				{props.title}
				<i className={`fa-solid fa-chevron-${isOpen ? "up" : "down"}`}></i>
			</div>
			{isOpen && (
				<div className="cmp-AboutCard-description">{props.description}</div>
			)}
		</div>
	)
}

export default AboutCard
