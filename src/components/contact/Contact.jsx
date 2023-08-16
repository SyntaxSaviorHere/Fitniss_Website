import { Fragment } from "react";
import SuggestedProblems from "./SuggestedProblems";
import EmailContact from "./EmailContact";
import Telefon from "./Telefon";
import BackButton from "../../UI/BackButton";

const Contact = () => {
  return (
    <Fragment>
      <BackButton />
      <SuggestedProblems />
      <EmailContact />
      <Telefon />
    </Fragment>
  );
};
export default Contact;
