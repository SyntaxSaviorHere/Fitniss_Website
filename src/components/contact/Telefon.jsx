import classes from "./Telefon.module.css";

const Telefon = () => {
  return (
    <div className={classes.container}>
      <h4>You can also call us</h4>
      <div className={classes.workingTime}>
        <p>M-F: 8:00 - 12:00</p>
        <p>M-F: 15:00 - 20:00</p>
        <p>S: 8:00 - 12:00</p>
      </div>

      <div className={classes.numbers}>
        <p>
          <span className={classes.bold}>First Num:</span>{" "}
          <span>01 223 294 938 </span>
        </p>
        <p>
          <span className={classes.bold}>Second Num:</span>{" "}
          <span>04 223 294 938</span>
        </p>
      </div>
    </div>
  );
};

export default Telefon;
