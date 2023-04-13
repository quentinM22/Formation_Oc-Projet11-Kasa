import React from "react"
import "./Footer.css"
import Logo from "../../assets/images/Logo-footer.png"

const Footer = () => {
	return (
		<footer>
			<img src={Logo} alt="Logo" />
			<h2>© 2020 Kasa. All rights reserved</h2>
		</footer>
	)
}

export default Footer
