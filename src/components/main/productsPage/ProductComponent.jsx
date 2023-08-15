import { Fragment, useEffect, useState } from "react";
import classes from "./ProductComponent.module.css";

import grayStar from "/assets/icons/star-gray.svg";
import orangeStar from "/assets/icons/start-orange.svg";
import Special from "../products/Special";

import AddingButtons from "./AddingButtons";
import { useCart } from "../../../context/CartContext";

const ProductComponent = (props) => {
  const { title, price, image, id, text } = props.product;
  const { addToCart } = useCart();

  window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top when component is rendered

  const handleButtonClick = (productId) => {
    console.log(`Product with ID ${productId} added to cart`);
    addToCart(productId);
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <img src={image} alt="" />
        </div>
        <div className={classes.description}>
          <h1>{title}</h1>
          <div className={classes.rating}>
            <img src={orangeStar} alt="" />
            <img src={orangeStar} alt="" />
            <img src={orangeStar} alt="" />
            <img src={grayStar} alt="" />
            <img src={grayStar} alt="" />
          </div>
          <span>{price}</span>
          <p>{text}</p>
        </div>
        <div className={classes.billing}>
          <h2>{price}</h2>
          <p>Free Delivery from August 17th to August 19th.</p>
          <p>In stock.</p>
          <p className={classes.amount}>
            Menge:
            <select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
            </select>
          </p>
          <AddingButtons id={id} onButtonClick={handleButtonClick} />{" "}
        </div>
      </div>
      <Special />
    </Fragment>
  );
};

export default ProductComponent;
