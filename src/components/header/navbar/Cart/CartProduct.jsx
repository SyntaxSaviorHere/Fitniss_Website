import { Fragment, useState, useEffect } from "react";
import classes from "./CartProduct.module.css";
import { usePrice } from "../../../../context/CartPriceContext";
const Cartproduct = (props) => {
  const [amount, setAmount] = useState(1);
  const { cartPrices, addPrice } = usePrice();

  const { addedProduct } = props;

  const addOne = () => {
    if (amount === 10) {
      return;
    } else {
      setAmount((prevState) => prevState + 1);
    }
  };
  const removeOne = () => {
    if (amount === 1) {
      return;
    } else {
      setAmount((prevState) => prevState - 1);
    }
  };

  const priceWithoutDollar = addedProduct.price.replace("$", "");
  const totalPrice = (priceWithoutDollar * amount).toFixed(2);

  useEffect(() => {
    const priceWithoutDollar = addedProduct.price.replace("$", "");
    const totalPrice = (priceWithoutDollar * amount).toFixed(2);
    addPrice(totalPrice);
  }, [amount, addedProduct.price]);

  return (
    <Fragment>
      <div className={classes.card} key={addedProduct.id}>
        <div className={classes.imgContainer}>
          <img src={addedProduct.image} alt="" />
        </div>
        <div className={classes.textContainer}>
          <h5>{addedProduct.title}</h5>
          <p>{addedProduct.text.split(" ").slice(0, 15).join(" ")}...</p>
          <div className={classes.flex}>
            <div className={classes.flex2}>
              <h6>{amount}x</h6>
              <p>${totalPrice}</p>
            </div>
            <div>
              <button onClick={removeOne}>-</button>
              <button onClick={addOne}>+</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cartproduct;
