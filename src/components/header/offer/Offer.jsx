import classes from "./Offer.module.css";

const Offer = () => {
  return (
    <div className={classes.container}>
      <div>
        <p>Upto 50% Sales!</p>
        <h1>"Empowering Your Fitness Potential, One Pulse at a Time!"</h1>
        <button
          onClick={() =>
            window.scrollTo({
              top: 1000,
              behavior: "smooth",
            })
          }
        >
          Discover!
        </button>
      </div>
    </div>
  );
};

export default Offer;
