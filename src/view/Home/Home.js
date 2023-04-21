import React, { useEffect, useState } from "react"

import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import LocationCard from "../../components/LocationCard/LocationCard"
import Footer from "../../components/Footer/Footer"

/**
 * View pages Accueil
 *
 * @returns  {JSX.Element} - Template page d'accueil
 * @author Quentin
 * @version 1.0
 */
const Home = () => {
	// Fonction pour récupérer les données des logements depuis un fichier JSON
	const [logements, setLogements] = useState([])
	const getData = async () => {
		await fetch("data/logements.json")
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				setLogements(data)
			})
			.catch((err) => console.error(err))
	}
	// Chargement des données et générer title
	useEffect(() => {
		document.title = `Kasa - Accueil`
		getData()
	}, [])
	// Rendu du composant
	return (
		<>
			<Header />
			<div className="cmp-body">
				<Banner />
				<div className="cmp-card-container">
					{logements.map((item) => (
						<LocationCard
							key={item.id}
							title={item.title}
							id={item.id}
							picture={item.cover}
						/>
					))}
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Home
