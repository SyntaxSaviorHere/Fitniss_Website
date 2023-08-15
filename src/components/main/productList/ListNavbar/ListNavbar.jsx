// import useShowClothing from "../../../../hooks/useShowClothing";
// import useShowFitnissGear from "../../../../hooks/useShowFitnissGear";
// import useShowFood from "../../../../hooks/useShowFood";
import useShowProducts from "../../../../hooks/useShowProducts";
import { useEffect, useState } from "react";
import classes from "./ListNavbar.module.css";

const ListNavbar = (props) => {
  const [selected, setSelected] = useState("0");

  const filterClickHandler = (e) => {
    let chara;
    if (e.target.tagName === "A") {
      chara = e.target.textContent;
    } else if (e.target.tagName === "LI") {
      chara = e.target.firstElementChild.textContent;
    } else {
      return;
    }
    switch (chara) {
      case "All":
        setSelected((prevState) => "0");
        props.setFilterState("0");
        const products = useShowProducts();
        // useRender(products);
        break;
      case "Fitnis Gear":
        props.setFilterState("1");
        setSelected((prevState) => "1");
        break;
      case "Sports Wear":
        props.setFilterState("2");
        setSelected((prevState) => "2");
        break;
      case "nutrition":
        props.setFilterState("3");
        setSelected((prevState) => "3");
        break;
    }
  };

  return (
    <div className={classes.navbar}>
      <ul>
        <li
          onClick={filterClickHandler}
          className={selected === "0" ? classes.selected : ""}
        >
          <a>All</a>
        </li>
        <li
          onClick={filterClickHandler}
          className={selected === "1" ? classes.selected : ""}
        >
          <a>Fitnis Gear</a>
        </li>
        <li
          onClick={filterClickHandler}
          className={selected === "2" ? classes.selected : ""}
        >
          <a>Sports Wear</a>
        </li>
        <li
          onClick={filterClickHandler}
          className={selected === "3" ? classes.selected : ""}
        >
          <a>nutrition</a>
        </li>
        <li onClick={() => props.showPrevious()}>show less</li>
        <li onClick={() => props.handleShowMore()}>show more</li>
      </ul>
    </div>
  );
};

export default ListNavbar;
