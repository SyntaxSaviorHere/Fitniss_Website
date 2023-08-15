import { Fragment } from "react";
import Offer from "./offer/Offer";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Offer />
    </header>
  );
};

export default Header;
