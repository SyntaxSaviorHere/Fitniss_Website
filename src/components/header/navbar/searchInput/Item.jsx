import { useNavigate } from "react-router";
import classes from "./Item.module.css";

const Item = ({ found, setInputValue }) => {
  const navigate = useNavigate();

  const navigateToProduct = () => {
    setInputValue((prevState) => "");
    navigate(`/products/${found.title}`, { state: found });
  };
  return (
    <div onClick={navigateToProduct} className={classes.item} key={found.id}>
      <img src={found.image} alt="" />
      <p>{found.title}</p>
    </div>
  );
};

export default Item;
