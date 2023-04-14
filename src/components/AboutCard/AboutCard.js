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
			{isOpen &&
				(props.description ? (
					<div className="cmp-AboutCard-description">{props.description}</div>
				) : (
					<ul className="cmp-AboutCard-description">
						{props.list.map((item) => (
							<li>{item}</li>
						))}
					</ul>
				))}
		</div>
	)
}

export default AboutCard
