import React, { useState } from "react"

import "./SlideShow.css"

/**
 * Component SlideShow
 *
 * @param {*} props
 * @returns {JSX.Element} - Component SlideShow
 * @author Quentin
 * @version 1.0
 */
const SlideShow = (props) => {
	// Déclaration des états
	const [count, setCount] = useState(0)
	// Fonction Incrémentation états
	// avec retour au premier élément du tableau si on count++ et >= longueur du tableau
	const handleIncrement = () => {
		setCount(count + 1 >= props.picture.length ? 0 : count + 1)
	}
	// Fonction Décrémentation états
	// avec retour au dernier élément du tableau si on count-- et < à 0
	const handleDecrement = () => {
		setCount(count - 1 < 0 ? props.picture.length - 1 : count - 1)
	}
	// Rendu du composant
	return (
		<div>
			<div
				style={{
					backgroundImage: `url(${props.picture[count]})`,
				}}
				className="cmp-carousel"
			>
				<div>
					{props.picture.length > 1 ? (
						<div className="cmp-btn-carousel">
							<i
								className="fa-solid fa-chevron-left "
								onClick={handleDecrement}
							></i>
							<i
								className="fa-solid fa-chevron-right"
								onClick={handleIncrement}
							></i>
						</div>
					) : null}
					<p className="cmp-count-pics">
						{count + 1} / {props.picture.length}
					</p>
				</div>
			</div>
		</div>
	)
}

export default SlideShow
