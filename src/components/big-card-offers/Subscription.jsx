import SuggestedCard from "../contact/SuggestedCard";
import Man3 from "/assets/images/offer/man3.jpg";
import Man2 from "/assets/images/offer/man2.jpg";
import classes from "./Subscription.module.css";
import BackButton from "../../UI/BackButton";
import { useEffect } from "react";

const Subscription = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component renders
    window.scrollTo({
      top: 0,
      behavior: "auto", // Use 'auto' for instant scroll to top
    });
  }, []); // Empty dependency array ensures it runs only after initial
  return (
    <main>
      <BackButton />
      <div
        className={classes.header}
        style={{ backgroundImage: `url(${Man3}) ` }}
      >
        <div className={classes.relative}>
          <h1>Get 2 Months FREE!</h1>
          <h2>Access to High Quality Gyms</h2>
          <p>Get the Muscle!</p>
        </div>
      </div>
      <div className={classes.section2}>
        <div className={classes.container}>
          <h3>Let's Train!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            assumenda nesciunt eveniet? Nam similique architecto saepe facilis,
            quidem enim voluptatum corrupti unde soluta quaerat? Iure laudantium
            nobis natus iste assumenda!
          </p>
        </div>
        <div className={classes.imgContainer}>
          <img className={classes.img} src={Man2} alt="" />
        </div>
      </div>
      <div className={classes.section3}>
        <SuggestedCard />
        <SuggestedCard />
        <SuggestedCard />
      </div>
    </main>
  );
};
export default Subscription;
