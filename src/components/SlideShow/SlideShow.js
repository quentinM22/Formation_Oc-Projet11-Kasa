import React, { useState } from "react"

import "./SlideShow.css"
const SlideShow = (props) => {
	const [count, setCount] = useState(0)
	const handleIncrement = () => {
		setCount(count + 1 >= props.picture.length ? 0 : count + 1)
	}

	const handleDecrement = () => {
		setCount(count - 1 < 0 ? props.picture.length - 1 : count - 1)
	}
	return (
		<div>
			<div
				style={{
					backgroundImage: `url(${props.picture[count]})`,
				}}
				className="cmp-carousel"
			>
				<div>
					<div className="cmp-btn-carousel">
						<i
							className="fa-solid fa-chevron-left "
							onClick={handleDecrement}
						></i>
						<i
							className="fa-solid fa-chevron-right"
							onClick={handleIncrement}
						></i>
					</div>
					<p>
						{count + 1} / {props.picture.length}
					</p>
				</div>
			</div>
		</div>
	)
}

export default SlideShow
