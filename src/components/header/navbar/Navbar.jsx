import classes from "./Navbar.module.css";
import searchIcon from "/assets/search-icon-darkmode.svg";
import cartIcon from "/assets/cart-icon.svg";
import AccountIcon from "/assets/account-icon.svg";
import { useNavigate } from "react-router";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const showCart = () => {
    navigate("/cart");
  };

  return (
    <nav className={classes.navbar}>
      <div>
        <h1>PowerPulse</h1>
        <button className={classes.cartButton}>
          <img src={AccountIcon} alt="" />
          <p>log in</p>
        </button>
        <div className={classes.searchContainer}>
          <img src={searchIcon} alt="" />
          <input type="search" />
        </div>
      </div>
      <div>
        <button onClick={showCart} className={classes.cartButton}>
          <img src={cartIcon} alt="" />
          <p>Cart</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
