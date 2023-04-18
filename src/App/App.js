import "./App.css"

import { Path, routes } from "../routes/router"
import { Routes, Route } from "react-router-dom"

function App() {
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
