import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={classes.navigation}>
      <Link to="/">Home</Link>
      <Link to="/products">Shop</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About us</Link>
      <Link to="/contact">Contact us</Link>
    </div>
  );
};

export default Navigation;
