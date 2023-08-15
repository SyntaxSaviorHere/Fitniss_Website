import { useState, useContext, useEffect } from "react";
import classes from "./ProductCard.module.css";
import { useCart } from "../../../../context/CartContext";

const ProductShow = (props) => {
  const { addToCart, cart } = useCart();
  const [clicked, setClicked] = useState(false);

  const { image, title, price, id } = props.product;

  const addToCartHandler = () => {
    if (!clicked) {
      addToCart(id);
      setClicked((prevState) => true);
    }
  };

  return (
    <div className={classes.card}>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backggroundRepeat: "no repeat",
          backgroundPosition: "center center",
        }}
      >
        <p>{price}</p>
        <div className={classes.flex}>
          <h5>{title}</h5>
          <button
            className={clicked ? classes.clicked : classes.nothing}
            onClick={addToCartHandler}
          >
            {clicked ? "ADDED!" : "+ADD"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductShow;
