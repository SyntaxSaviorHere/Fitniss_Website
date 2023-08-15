import { useState } from "react";
import classes from "./SuggestedProblems.module.css";

const SuggestedCard = () => {
  const [show, setShow] = useState(false);
  const showAnswer = () => {
    setShow(!show);
  };

  return (
    <div
      onClick={showAnswer}
      className={show ? `${classes.card} ${classes.expand}` : `${classes.card}`}
    >
      <p className={classes.question}>
        Lorem, ipsum dolor sit amet consectetur adipisicing ?
      </p>
      {show && (
        <p className={classes.animation}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi earum
          quaerat amet, quas expedita molestias laboriosam sequi nam autem
          maiores veniam atque aperiam aliquam eligendi culpa ad ratione?
          Distinctio, aperiam. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Dolorum dolor facilis vitae itaque dignissimos
          provident commodi maiores accusamus fuga pariatur fugiat, repellat
          iusto eius soluta, mollitia culpa enim, voluptate voluptates sit
          placeat possimus sunt. Nam vero autem voluptates tempore labore?
        </p>
      )}
    </div>
  );
};
export default SuggestedCard;
