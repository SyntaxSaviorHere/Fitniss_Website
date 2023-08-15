import SuggestedCard from "./SuggestedCard";
import classes from "./SuggestedProblems.module.css";

const SuggestedProblems = () => {
  return (
    <div className={classes.container}>
      <h2>Common Issues: </h2>
      <SuggestedCard />
      <SuggestedCard />
      <SuggestedCard />
    </div>
  );
};
export default SuggestedProblems;
