import { useEffect, useState } from "react";
import classes from "./Filter.module.css";

const Filter = () => {
  const [price, setPrice] = useState(1);
  const [buttontext, setButtonText] = useState({
    text1: "+Add",
    text2: "+Add",
    text3: "+Add",
    text4: "+Add",
    text5: "+Add",
  });

  const priceHandler = (e) => {
    const num = Number(e.target.value);
    setPrice((prevState) => num);
  };

  useEffect(() => {}, [price]);

  const buttonFeedBack = (num) => {
    switch (num) {
      case 1:
        setButtonText((prevState) => ({ ...prevState, text1: "Done!" }));
        break;
      case 2:
        setButtonText((prevState) => ({ ...prevState, text2: "Done!" }));
        break;
      case 3:
        setButtonText((prevState) => ({ ...prevState, text3: "Done!" }));
        break;
      case 4:
        setButtonText((prevState) => ({ ...prevState, text4: "Done!" }));
        break;
      case 5:
        setButtonText((prevState) => ({ ...prevState, text5: "Done!" }));
        break;
    }
  };

  return (
    <div className={classes.sidelist}>
      <div className={classes.column}>
        <div className={classes.flex}>
          <label htmlFor="price">price</label>
          <p>${price}</p>
        </div>
        <input
          value={price}
          onChange={priceHandler}
          name="price"
          type="range"
        />
        <button onClick={() => buttonFeedBack(1)}>{buttontext.text1}</button>
      </div>
      <div className={classes.aside}>
        <p>Neu</p>
        <button
          onClick={() => {
            buttonFeedBack(2);
          }}
        >
          {buttontext.text2}
        </button>
      </div>
      <div className={classes.aside}>
        <p>Best seller</p>
        <button
          onClick={() => {
            buttonFeedBack(3);
          }}
        >
          {buttontext.text3}
        </button>
      </div>
      <div className={classes.aside}>
        <select className={classes.select} name="" id="">
          <option value="">Heute</option>
          <option value="">In 3 Tagen</option>
          <option value="">In einer Woche</option>
        </select>
        <button
          onClick={() => {
            buttonFeedBack(4);
          }}
        >
          {buttontext.text4}
        </button>
      </div>
      <div className={classes.aside}>
        <p>Gratis Versand</p>
        <button
          onClick={() => {
            buttonFeedBack(5);
          }}
        >
          {buttontext.text5}
        </button>
      </div>
    </div>
  );
};

export default Filter;
