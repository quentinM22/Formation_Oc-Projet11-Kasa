import React from "react"
import { NavLink } from "react-router-dom"

import "./Header.css"

import Logo from "../../assets/images/Logo.png"

/**
 * Component Header
 * Avec <nav></nav> navigation du site
 *
 * @returns {JSX.Element} - Component header
 * @author Quentin
 * @version 1.0
 */
const Header = () => {
	// Rendu du composant
	return (
		<>
			<header>
				<NavLink to="/">
					<img src={Logo} alt="Kasa Logo" />
				</NavLink>
				<nav>
					<ul>
						<li>
							<NavLink to="/" className="active-link">
								Accueil
							</NavLink>
						</li>
						<li>
							<NavLink to="/about" className="active-link">
								A propos
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}

export default Header
