import "./App.css"

import { Path, routes } from "../routes/router"
import { Routes, Route } from "react-router-dom"

/**
 * App
 *
 * @returns - Rendu des Views de l'application
 * @author Quentin
 * @version 1.0
 */
function App() {
	// Rendu du composant
	return (
		<>
			<Routes>
				{routes.map((route, i) => (
					<Route key={i} path={route.path} element={<Path {...route} />} />
				))}
			</Routes>
		</>
	)
}

export default App
