import classes from "./Create.module.css";
import { useEffect, useState } from "react";
import BackButton from "../../UI/BackButton";
import { useUsers } from "../../context/UserContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const validate = (value, type) => {
  if (type === "email") {
    const b = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const a = b.test(value);
    if (a) {
      return true;
    } else {
      return false;
    }
  }
  if (type === "pass") {
    const b = value.length > 8;
    const a = isNaN(value);
    if (a && b) {
      return true;
    } else {
      return false;
    }
  }
};

const Login = () => {
  const navigate = useNavigate();
  const { usersList, addUser } = useUsers();
  const [disableButton, setDisabeleButton] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValidated, setEmailValidated] = useState(true);
  const [passwordValidated, setPasswordValidated] = useState(true);

  const validateEmail = () => setEmailValidated(validate(email, "email"));
  const validatePassword = () =>
    setPasswordValidated(validate(password, "pass"));

  const submitHandler = (e) => {
    e.preventDefault();
    if ((emailValidated, passwordValidated)) {
      // findUser();
      setDisabeleButton((prevState) => !disableButton);
      setTimeout(() => navigate("/"), 1000);
      return;
    }
  };

  return (
    <section className={classes.container}>
      <BackButton />
      <div>
        <h2>Login</h2>
      </div>
      <form onSubmit={(e) => submitHandler(e)} action="">
        <label htmlFor="email">Email && number: </label>
        <input
          value={email}
          onChange={(e) => setEmail((prevState) => e.target.value)}
          onBlur={validateEmail}
          type="email"
          name="email"
          placeholder="someperson@email.com"
        />
        {!emailValidated && <p>Please enter a valid email</p>}

        <label htmlFor="password">Password: </label>
        <input
          value={password}
          onChange={(e) => setPassword((prevState) => e.target.value)}
          onBlur={validatePassword}
          type="password"
          name="password"
          placeholder="At least 6 characters"
        />
        {!passwordValidated && (
          <p>Password can't be only numbers, or shorter than 8 characters</p>
        )}

        <button
          className={disableButton ? classes.gray : ""}
          type="submit"
          disabled={disableButton}
        >
          Submit
        </button>
      </form>
      <Link className={classes.link} to={"/createaccount"}>
        don't have account
      </Link>
    </section>
  );
};

export default Login;
