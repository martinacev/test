import { useState } from "react";
import classes from "./RateStars.module.css";

const RateStars = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const stars = [1, 2, 3, 4, 5]; 

  return (
    <div className={classes.container}>
      {stars.map((starId) => (
        <svg
          key={starId} 
          fill="none"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          <path
            d="M33.6923 32.0283L41.8146 29.5849L45.2081 42L33.6923 32.0283ZM52.3846 15.9811H38.0872L33.6923 0L29.2974 15.9811H15L26.5714 25.8868L22.1765 41.8679L33.7479 31.9623L40.8688 25.8868L52.3846 15.9811Z"
            fill={clicked ? "gold" : "grey"}
          />
        </svg>
      ))}
    </div>
  );
};

export default RateStars;
