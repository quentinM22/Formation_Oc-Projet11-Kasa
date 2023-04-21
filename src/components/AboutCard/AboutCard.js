import React, { useState } from "react"
import "./AboutCard.css"

/**
 * Component aboutCard
 *
 * @param {*} props
 * @returns {JSX.Element} - Component aboutCard
 * @author Quentin
 * @version 1.0
 */
const AboutCard = (props) => {
	// Déclaration des états
	const [isOpen, setIsOpen] = useState(false)
	// Fonction pour changer l'état isOpen en fonction du click
	function toggle() {
		setIsOpen(!isOpen)
	}
	// Rendu du composant
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
						{props.list.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				))}
		</div>
	)
}

export default AboutCard
