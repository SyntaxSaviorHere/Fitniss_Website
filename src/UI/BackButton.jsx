import { useNavigate } from "react-router";
import classes from "./Backbutton.module.css";

const BackButton = (props) => {
  const navigate = useNavigate();

  const moveToHome = () => {
    navigate(-1);
  };
  return (
    <div onClick={moveToHome} className={classes.container}>
      <p> &lt; &lt; BACK</p>
    </div>
  );
};

export default BackButton;
