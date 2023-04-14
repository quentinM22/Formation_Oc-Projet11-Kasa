import React, { useEffect } from "react"

import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import LocationCard from "../../components/LocationCard/LocationCard"
import Footer from "../../components/Footer/Footer"

import Data from "../../data/logements.json"

const Home = () => {
	// Changement title onglet page
	useEffect(() => {
		document.title = `Kasa - Accueil`
	})

	return (
		<div>
			<div className="cmp-body">
				<Header />
				<Banner />
				<div className="cmp-card-container">
					{Data.map((item) => (
						<LocationCard key={item.id} title={item.title} />
					))}
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Home
