import Header from ".././components/header/Header";
import Main from ".././components/main/Main";
import Footer from ".././components/footer/Footer";
import { CartProvider } from ".././context/CartContext";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
};

export default HomePage;
