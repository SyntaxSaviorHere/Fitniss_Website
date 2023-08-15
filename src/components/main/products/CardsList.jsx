import React from "react";
import products from "../../../../Products.json";
import Card from "./Card";

const CardsList = () => {
  function getRandomIndexes(array, numberOfIndexes) {
    const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, numberOfIndexes);
  }

  const randomlySelectedIndexes = getRandomIndexes(products, 8);

  return randomlySelectedIndexes.map((product) => (
    <Card key={product.id} product={product} />
  ));
};

export default CardsList;

/* 
    <div className={classes.card}>
        <div className={classes.cardHeader}>
          <img src={img} alt="" />
        </div>
        <div className={classes.cardBody}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>


*/
