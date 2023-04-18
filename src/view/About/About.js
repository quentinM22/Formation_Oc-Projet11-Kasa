import React, { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"

import AboutCard from "../../components/AboutCard/AboutCard"

const About = () => {
	const [about, setAbout] = useState([])
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
	useEffect(() => {
		document.title = `Kasa - A propos`
		getData()
	}, [])
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
