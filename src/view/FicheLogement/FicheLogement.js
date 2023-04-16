import React, { useEffect } from "react"

import "../../App/App.css"
import "./FicheLogement.css"

import { Navigate, useParams } from "react-router-dom"

import Data from "../../data/logements.json"

import SlideShow from "../../components/SlideShow/SlideShow"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import AboutCard from "../../components/AboutCard/AboutCard"

const FicheLogement = () => {
	useEffect(() => {
		document.title = `Kasa - Logement`
	})
	//Recuperation Data en fonction de l'id
	const { id } = useParams()
	const logement = Data.find((item) => item.id === id.split(":id")[1])
	//Rating
	const stars = []
	for (let i = 1; i <= 5; i++) {
		stars.push(
			<i
				className={`fa-solid fa-star ${i <= logement.rating ? "active" : ""}`}
				key={i}
			></i>
		)
	}
	// Gestion du rendu en fonction de l'id de l'Url
	return !logement ? (
		<Navigate to="/error" />
	) : (
		<div>
			<div className="cmp-body">
				<Header />
				<div>
					<SlideShow picture={logement.pictures} />
					<div className="cmp-page-head">
						<div className="cmp-page-title">
							<h1>{logement.title}</h1>
							<h2>{logement.location}</h2>
						</div>
						<div className="cmp-page-host">
							<p>{logement.host.name}</p>
							{logement.host.picture ? (
								<div
									className="cmp-pics-host"
									style={{
										backgroundImage: `url(${logement.host.picture})`,
									}}
								/>
							) : (
								<div
									className="cmp-pics-host"
									style={{
										backgroundColor: "grey",
									}}
								/>
							)}
						</div>
					</div>
					<div className="cmp-page-head">
						<div className="cmp-tag-container">
							{logement.tags.map((tag) => (
								<div className="cmp-tag" key={tag}>
									{tag}
								</div>
							))}
						</div>
						<div>
							<div className="star-rating">{stars}</div>
						</div>
					</div>
					<div className="cmp-page-card-container">
						<div className="cmp-page-card">
							<AboutCard
								title="Description"
								description={logement.description}
							/>
						</div>

						<div className="cmp-page-card">
							<AboutCard title="Équipements" list={logement.equipments} />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default FicheLogement
