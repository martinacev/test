import { useState } from "react";
import classes from "./RateStars.module.css";

const RateStars = () => {
  const [clickedStars, setClickedStars] = useState(new Array(5).fill(false));

  const handleClick = (index) => {
    const newClickedStars = [...clickedStars];

    newClickedStars[index] = !newClickedStars[index];

    for (let i = 0; i <= index; i++) {
      newClickedStars[i] = true;
    }
    setClickedStars(newClickedStars);
  };

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={classes.container}>
      {stars.map((starId, index) => (
        <svg
          key={starId}
          fill={clickedStars[index] ? "gold" : "grey"}
          onClick={() => handleClick(index)}
          style={{ cursor: "pointer" }}
          viewBox="0 0 60 45"
        >
          <path d="M33.6923 32.0283L41.8146 29.5849L45.2081 42L33.6923 32.0283ZM52.3846 15.9811H38.0872L33.6923 0L29.2974 15.9811H15L26.5714 25.8868L22.1765 41.8679L33.7479 31.9623L40.8688 25.8868L52.3846 15.9811Z" />
        </svg>
      ))}
    </div>
  );
};

export default RateStars;
