import classes from "./Card.module.css";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const Card = (props) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const { product } = props;

  const handleClick = () => {
    const title = encodeURIComponent(props.product.title);

    navigate(`/products/${title}`, { state: product }); // Navigate to the desired route
  };
  return (
    <div onClick={handleClick} className={classes.card}>
      <div className={classes.cardHeader}>
        <img src={props.product.image} alt="" />
      </div>
      <div className={classes.cardBody}>
        <h3>{props.product.title}</h3>
        <p>{props.product.text.split(" ").slice(0, 10).join(" ")}...</p>
      </div>
    </div>
  );
};

export default Card;
