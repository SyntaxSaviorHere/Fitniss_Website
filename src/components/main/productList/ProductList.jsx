import React, { useEffect, useState } from "react";
import classes from "./ProductList.module.css";
import ListNavbar from "./ListNavbar/ListNavbar";
import Filter from "./Filter/Filter";
import products from "../../../../Products.json";
import ProductCard from "./ProductCard/ProductCard";
import useShowProducts from "../../../hooks/useShowProducts";
import useShowFitnissGear from "../../../hooks/useShowFitnissGear";
import useShowClothing from "../../../hooks/useShowClothing";
import useShowFood from "../../../hooks/useShowFood";

const ProductList = () => {
  const [filterState, setFilterState] = useState("0");
  const [batchSize, setBatchSize] = useState(12);
  const [startingPoint, setStartingPoint] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (filterState === "0") {
      default2();
      const array = useShowProducts();
      setProducts((prevstate) => array);
    } else if (filterState === "1") {
      default2();
      const array2 = useShowFitnissGear();
      setProducts((prevState) => array2);
    } else if (filterState === "2") {
      default2();
      const array3 = useShowClothing();
      setProducts((prevstate) => array3);
    } else if (filterState === "3") {
      default2();
      const array4 = useShowFood();
      setProducts((prevState) => array4);
    }
  }, [filterState]);

  // Slice the products array to get the batch to be rendered
  const rendered = products
    .slice(startingPoint, startingPoint + batchSize)
    .map((product) => <ProductCard key={product.id} product={product} />);

  useEffect(() => {}, [startingPoint]);

  // const check = () => {
  //   if (startingPoint + batchSize > products.length) {
  //     showPrevious();
  //   } else {
  //     return;
  //   }
  // };

  const default2 = () => {
    setStartingPoint((prevState) => 0);
  };

  const handleShowMore = () => {
    if (startingPoint + batchSize > products.length) {
      return;
    } else {
      setStartingPoint((prevStartingPoint) => prevStartingPoint + batchSize);
    }
  };

  const showPrevious = () => {
    if (startingPoint + batchSize > products.length && products.length > 12) {
      setStartingPoint((prevStartingPoint) => prevStartingPoint - batchSize);
    } else {
      return;
    }
  };

  return (
    <section className={classes.container}>
      <ListNavbar
        showPrevious={showPrevious}
        handleShowMore={handleShowMore}
        setFilterState={setFilterState}
      />
      <div className={classes.align}>
        <Filter />
        <div className={classes.products}>{rendered}</div>
      </div>
      <div className={classes.controls}>
        <button onClick={showPrevious}>show less</button>
        <button onClick={handleShowMore}>show more</button>
      </div>
    </section>
  );
};

export default ProductList;
