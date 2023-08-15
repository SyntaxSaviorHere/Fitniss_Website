import { useState } from "react";
import classes from "./BigCard.module.css";

const BigCard = (props) => {
  const [hovering, setHovering] = useState(false);
  const { title, text, image } = props;
  return (
    <div
      onMouseOver={() => setHovering((prevState) => true)}
      onMouseLeave={() => setHovering((prevState) => false)}
      style={{ backgroundImage: `url(${image})` }}
      className={`${classes.offer} ${hovering ? classes.animation : ""}`}
    >
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
        {hovering && (
          <div className={classes.onHovering}>
            <p>Subscribe Now!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BigCard;
