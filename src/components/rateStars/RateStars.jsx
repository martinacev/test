import { useState, useEffect } from "react";
import classes from "./RateStars.module.css";

const RateStars = () => {
	const [clickedStars, setClickedStars] = useState(() => {
		const storedStars = JSON.parse(localStorage.getItem("clickedStars"));
		return storedStars || new Array(5).fill(0);
	});

	useEffect(() => {
		localStorage.setItem("clickedStars", JSON.stringify(clickedStars));
	}, [clickedStars]);

	const handleClick = (index, isHalf) => {
		const newClickedStars = [...clickedStars];

		if (isHalf) {
			newClickedStars[index] = newClickedStars[index] === 0.5 ? 1 : 0.5;
		} else {
			newClickedStars[index] = newClickedStars[index] === 1 ? 0.5 : 1;
		}

		for (let i = 0; i < index; i++) {
			newClickedStars[i] = 1;
		}
		for (let i = index + 1; i < newClickedStars.length; i++) {
			newClickedStars[i] = 0;
		}

		setClickedStars(newClickedStars);
	};

	const stars = [1, 2, 3, 4, 5];

	return (
		<div className={classes.container}>
			<svg width="0" height="0">
				<defs>
					<linearGradient
						id="halfGradient"
						x1="0%"
						y1="0%"
						x2="100%"
						y2="0%"
					>
						<stop
							offset="50%"
							style={{ stopColor: "gold", stopOpacity: 1 }}
						/>
						<stop
							offset="50%"
							style={{ stopColor: "grey", stopOpacity: 1 }}
						/>
					</linearGradient>
				</defs>
			</svg>
			{stars.map((starId, index) => (
				<div
					key={starId}
					className={`${classes.star} ${
						clickedStars[index] === 1
							? classes.full
							: clickedStars[index] === 0.5
							? classes.half
							: ""
					}`}
					onClick={(e) =>
						handleClick(
							index,
							e.nativeEvent.offsetX <
								e.currentTarget.clientWidth / 2
						)
					}
				>
					<svg viewBox="0 0 60 45">
						<path d="M33.6923 32.0283L41.8146 29.5849L45.2081 42L33.6923 32.0283ZM52.3846 15.9811H38.0872L33.6923 0L29.2974 15.9811H15L26.5714 25.8868L22.1765 41.8679L33.7479 31.9623L40.8688 25.8868L52.3846 15.9811Z" />
					</svg>
				</div>
			))}
		</div>
	);
};

export default RateStars;
