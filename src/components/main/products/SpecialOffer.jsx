import classes from "./SpecialOffer.module.css";
import BigCard from "../../../UI/BigCard";
import man from "/assets/images/offer/man.jpg";
import women from "/assets/images/offer/women.jpg";

const SpecialOffer = () => {
  // div => div*2 > h4 || p
  return (
    <section className={classes.container}>
      <BigCard
        title="Get free 2 Months "
        image={man}
        text="lorem ipisum wolm amanakium"
      />
      <BigCard
        title="costum trainers"
        image={women}
        text="lorem ipisum wolm amanakium"
      />
    </section>
  );
};

export default SpecialOffer;
