import React from "react"

// Importation des differentes View
import Home from "../view/Home/Home"
import Error from "../view/Error/Error"
import About from "../view/About/About"
import FicheLogement from "../view/FicheLogement/FicheLogement"

// Création des routes
const routes = [
	{
		path: "/",
		exact: true,
		component: <Home />,
	},
	{
		path: "/about",
		component: <About />,
	},
	{
		path: "/FicheLogement",
		component: <FicheLogement />,
	},
	{
		path: "/*",
		component: <Error />,
	},
]

const Path = (route) => route.component

export { Path, routes }
