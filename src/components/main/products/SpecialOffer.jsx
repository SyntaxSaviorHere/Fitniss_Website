import classes from "./SpecialOffer.module.css";
import BigCard from "../../../UI/BigCard";
import man from "/assets/images/offer/man.jpg";
import women from "/assets/images/offer/women.jpg";

const SpecialOffer = () => {
  // div => div*2 > h4 || p
  return (
    <section className={classes.container}>
      <BigCard
        title="Get 2 Months Gym Subscription for free! "
        image={man}
        text="lorem ipisum wolm amanakium"
        navigateTo={"/subscription"}
      />
      <BigCard
        title="Get access to Professionel Trainers"
        image={women}
        text="lorem ipisum wolm amanakium"
        navigateTo={"/trainer"}
      />
    </section>
  );
};

export default SpecialOffer;
