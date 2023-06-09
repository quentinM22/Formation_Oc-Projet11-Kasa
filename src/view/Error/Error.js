import React, { useEffect } from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Link } from "react-router-dom"
import { routes } from "../../routes/router"
import "./Error.css"

/**
 * View pages Error404
 *
 * @returns  {JSX.Element} - Template page Erreur
 * @author Quentin
 * @version 1.0
 */
function Error() {
	// Générer title onglet page
	useEffect(() => {
		document.title = `Kasa - Error ❌`
	})
	// Rendu du composant
	return (
		<>
			<Header />
			<div className="cmp-body">
				<div className="cmp-error-body">
					<h1 className="cmp-error-title">404</h1>
					<h2 className="cmp-error-subtitle">
						Oups! La page que vous demandez n'existe pas.
					</h2>
					<Link to={routes[0].path}>Retourner sur la page d’accueil</Link>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Error
