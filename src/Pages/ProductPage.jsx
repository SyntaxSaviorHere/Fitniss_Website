import classes from "./ProductPage.module.css";
import { useLocation } from "react-router";
import ProductComponent from "../components/main/productsPage/ProductComponent";

const ProductPage = (props) => {
  const location = useLocation();
  const product = location.state;
  return (
    <div className={classes.container}>
      <ProductComponent product={product} />
    </div>
  );
};
export default ProductPage;
