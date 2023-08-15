import classes from "./Special.module.css";
import showMore from "/assets/show-more-icon.svg";
import CardsList from "./CardsList";
import { Fragment } from "react";
import { useNavigate } from "react-router";

const Special = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <section className={classes.specialSection}>
        <button>
          <img className={classes.leftIcon} src={showMore} alt="" />
        </button>
        <div className={classes.specialProductsCards}>
          <CardsList />
        </div>
        <button>
          <img className={classes.rightIcon} src={showMore} alt="" />
        </button>
      </section>
      <div className={classes.specialContainer}>
        <button
          onClick={() => navigate("/products")}
          className={classes.specialButton}
        >
          See All Products &gt;
        </button>
      </div>
    </Fragment>
  );
};

export default Special;
