import { useState } from "react";
import classes from "./BigCard.module.css";
import { useNavigate } from "react-router";

const BigCard = (props) => {
  const [hovering, setHovering] = useState(false);
  const navigate = useNavigate();
  const { title, text, image, navigateTo } = props;

  const clickHandler = () => {
    navigate(navigateTo, { state: { title, text, image } });
  };

  return (
    <div
      onClick={clickHandler}
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
