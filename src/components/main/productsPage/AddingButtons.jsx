import classes from "./AddingButton.module.css";
import { Fragment, useEffect, useState } from "react";

const AddingButtons = ({ onButtonClick, id }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    setIsButtonDisabled(false);
  }, [id]);

  const handleButtonClick = () => {
    setIsButtonDisabled(true);
    onButtonClick(id);
  };

  return (
    <Fragment>
      <button
        onClick={handleButtonClick}
        className={isButtonDisabled ? classes.gray : classes.yellow}
        disabled={isButtonDisabled}
      >
        {isButtonDisabled ? "Added" : "Add to cart"}
      </button>
      <button
        onClick={handleButtonClick}
        className={isButtonDisabled ? classes.gray : classes.orange}
        disabled={isButtonDisabled}
      >
        {isButtonDisabled ? "Added to cart" : "Buy now!"}
      </button>
    </Fragment>
  );
};

export default AddingButtons;
