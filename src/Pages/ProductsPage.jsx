import { Fragment } from "react";
import ProductList from "../components/main/productList/ProductList";
import BackButton from "../UI/BackButton";

const ProductsPage = () => {
  return (
    <Fragment>
      <BackButton />
      <ProductList />
    </Fragment>
  );
};

export default ProductsPage;
