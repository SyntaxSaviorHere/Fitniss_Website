import { Fragment } from "react";
import SuggestedProblems from "./SuggestedProblems";
import EmailContact from "./EmailContact";
import Telefon from "./Telefon";

const Contact = () => {
  return (
    <Fragment>
      <SuggestedProblems />
      <EmailContact />
      <Telefon />
    </Fragment>
  );
};
export default Contact;
