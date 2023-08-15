import classes from "./Cart.module.css";
import { useCart } from "../../../../context/CartContext";
import products from "../../../../../Products.json";
import { Fragment, useEffect, useState } from "react";
import Cartproduct from "./CartProduct";
import Receipt from "./Receipt";
import BackButton from "../../../../UI/BackButton";

const Cart = () => {
  const { cart } = useCart();
  const [addedProducts, setAddedProducts] = useState([]);
  const [emptyCart, setEmptyCart] = useState(true);

  useEffect(() => {
    if (addedProducts.length === 0) {
      setEmptyCart(true);
    } else {
      setEmptyCart(false);
    }
  }, [addedProducts]);

  useEffect(() => {
    const matchingProducts = products.filter((product) =>
      cart.some((addedProduct) => addedProduct === product.id)
    );
    setAddedProducts(matchingProducts);
  }, [cart]);

  return (
    <div
      style={{
        marginTop: "50px",
        minHeight: "100vw",
      }}
    >
      <BackButton root={"/products"} />
      {!emptyCart ? (
        <Fragment>
          <h2 className={classes.title}>Added Products</h2>
          <div className={classes.container}>
            <div>
              {addedProducts.map((addedProduct) => {
                return (
                  <Cartproduct
                    key={addedProduct.id}
                    addedProduct={addedProduct}
                  />
                );
              })}
            </div>
            <div style={{ width: "50%" }}>
              <Receipt addedProducts={addedProducts} />
            </div>
          </div>
        </Fragment>
      ) : (
        <h2 className={classes.empthyWarn}>Your cart is empthy</h2>
      )}
    </div>
  );
};

export default Cart;
