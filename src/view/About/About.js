import React, { useEffect } from "react"
import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"

import Data from "../../data/about.json"
import AboutCard from "../../components/AboutCard/AboutCard"

const About = () => {
	// Changement title onglet page
	useEffect(() => {
		document.title = `Kasa - A propos`
	})
	return (
		<div>
			<div className="cmp-body">
				<Header />
				<Banner />
				<div className="cmp-about-card-container">
					{Data.map((item, index) => (
						<AboutCard
							key={index}
							title={item.title}
							description={item.description}
						/>
					))}
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default About
