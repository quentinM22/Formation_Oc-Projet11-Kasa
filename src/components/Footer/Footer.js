import React from "react"
import "./Footer.css"
import Logo from "../../assets/images/Logo-footer.png"
/**
 * Component Footer
 *
 * @returns {JSX.Element} - Component Footer
 * @author Quentin
 * @version 1.0
 */
const Footer = () => {
	// Rendu du composant
	return (
		<footer>
			<img src={Logo} alt="Logo" />
			<h2>© 2020 Kasa. All rights reserved</h2>
		</footer>
	)
}

export default Footer
