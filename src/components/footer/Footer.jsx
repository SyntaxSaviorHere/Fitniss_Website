import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <h5>About us</h5>
        <Link to="/about">About us</Link>
        <Link to="/contact">contact</Link>
        <Link to="/contact">email</Link>
        <Link to="/contact">call</Link>
      </div>
      <div>
        <h5>Uniue Products</h5>
        <Link to="/products">products</Link>
        <Link to="/products">sports wear</Link>
        <Link to="/products">food</Link>
        <Link to="/products">fitniss</Link>
      </div>
      <div>
        <h5>Blog</h5>
        <Link to="/blog">Blog</Link>
        <Link to="/blog">About food</Link>
        <Link to="/blog">About planing</Link>
        <Link to="/blog">Training</Link>
      </div>
    </footer>
  );
};

export default Footer;
