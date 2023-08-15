import { usePrice } from "../../../../context/CartPriceContext";
import { useRef, useState } from "react";
import classes from "./Receipt.module.css";
import DeliveryIcon from "/assets/icons/delivery-icon.svg";

const Receipt = (props) => {
  const { addedProducts } = props;
  const { cartPrices } = usePrice();
  let totalPrice = 0;
  const containerElement = useRef();

  for (let i = 0; i < cartPrices.length; i++) {
    const num = parseFloat(cartPrices[i]);
    totalPrice = totalPrice + num;
  }

  const totalPriceTaxed = Math.round(((totalPrice * 4) / 100) * 100) / 100;
  const all = totalPrice + totalPriceTaxed;
  totalPrice = totalPrice.toFixed(2);

  return (
    <div ref={containerElement} className={classes.receipt}>
      <h2 className={classes.title}>Your Orders</h2>
      <ul className={classes.ul}>
        {addedProducts.map((addedProduct) => {
          return (
            <li key={addedProduct.id}>
              <p>{addedProduct.title}</p>
              <p>{addedProduct.price}</p>
            </li>
          );
        })}
      </ul>
      <div className={classes.tax}>
        <p className={classes.show}>4% tax of luxury</p>
        <p>
          <span>before tax:</span>
          <span>${totalPrice}</span>
        </p>
        <p>
          <span>Tax amount:</span>
          <span>${totalPriceTaxed}</span>
        </p>
        <p>
          <span>totalPrice:</span>
          <span>${all.toFixed(2)} </span>
        </p>
      </div>
      <div className={classes.delivery}>
        <p>It will be delivered on the 18th of August</p>
        <img src={DeliveryIcon} alt="" />
      </div>
      <div className={classes.flex}>
        <p className={classes.show}>${all.toFixed(2)}</p>
        <button>Order NOW!</button>
      </div>
    </div>
  );
};

export default Receipt;
