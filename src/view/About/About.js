import React, { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"

import AboutCard from "../../components/AboutCard/AboutCard"

/**
 * View pages A propos
 *
 * @returns  {JSX.Element} - Template page a propos
 * @author Quentin
 * @version 1.0
 */
const About = () => {
	// Déclaration des états
	const [about, setAbout] = useState([])
	// Fonction pour récupérer les données des about depuis un fichier JSON
	const getData = async () => {
		await fetch("data/about.json")
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				setAbout(data)
			})
			.catch((err) => console.error(err))
	}
	// Chargement des données et générer title
	useEffect(() => {
		document.title = `Kasa - A propos`
		getData()
	}, [])
	// Rendu du composant
	return (
		<>
			<Header />
			<div className="cmp-body">
				<Banner />
				<div className="cmp-about-card-container">
					{about.map((item, index) => (
						<AboutCard
							key={index}
							title={item.title}
							description={item.description}
						/>
					))}
				</div>
			</div>
			<Footer />
		</>
	)
}

export default About
