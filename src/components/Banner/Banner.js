import React from "react"
import { useLocation } from "react-router-dom"

import imgBg1 from "../../assets/images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg"
import imgBg2 from "../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg"

import "../Banner/Banner.css"

/**
 * Component banner
 *
 * @returns {JSX.Element} - Component
 * @author Quentin
 * @version 1.0
 */
const Banner = () => {
	// Récupération Url dans variable location
	const location = useLocation()
	// Varibles initialisé
	let imageSource = ""
	let titleBanner = ""
	// Changement images Banner en fonction de l'url
	if (location.pathname === "/") {
		imageSource = imgBg1
		titleBanner = "block"
	} else if (location.pathname === "/about") {
		imageSource = imgBg2
		titleBanner = "none"
	}
	// Rendu du composant
	return (
		<div
			className="cmp-banner"
			style={{
				backgroundImage: `linear-gradient(
                    to bottom,
                    rgba(112, 112, 112, 0.25),
                    rgba(52, 52, 52, 0.50)),
                url(${imageSource})`,
			}}
		>
			<h1 className="cmp-banner-title" style={{ display: `${titleBanner}` }}>
				Chez vous, partout et ailleurs
			</h1>
		</div>
	)
}

export default Banner
