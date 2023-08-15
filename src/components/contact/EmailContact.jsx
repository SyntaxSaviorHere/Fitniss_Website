import { Fragment } from "react";
import classes from "./EmailContact.module.css";

const EmailContact = () => {
  return (
    <Fragment>
      <form className={classes.form}>
        <h2>Send us a Message</h2>
        <div>
          <label htmlFor="name">Your name </label>
          <input className={classes.input1} name="name" htmlFor="text" />
        </div>
        <div>
          <label htmlFor="email ">Your email </label>
          <input className={classes.input1} name="email" type="text" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea type="text" name="message" />
        </div>
        <div className={classes.flexRight}>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default EmailContact;
