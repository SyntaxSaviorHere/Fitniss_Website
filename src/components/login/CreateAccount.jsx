import { useEffect, useState } from "react";
import BackButton from "../../UI/BackButton";
import classes from "./Create.module.css";
import { useUsers } from "../../context/UserContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const validate = (value, type) => {
  if (type === "name") {
    const a = value.trim().length > 5;
    const b = /\d/.test("abc123def");
    if (a && b) {
      return true;
    } else {
      return false;
    }
  }
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

const CreateAccount = () => {
  const navigate = useNavigate();
  const { usersList, addUser } = useUsers();
  const [disableButton, setDisabeleButton] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState();

  const [nameValidated, setNameValidated] = useState(true);
  const [emailValidated, setEmailValidated] = useState(true);
  const [passwordValidated, setPasswordValidated] = useState(true);

  const validateName = () => setNameValidated(validate(name, "name"));
  const validateEmail = () => setEmailValidated(validate(email, "email"));
  const validatePassword = () =>
    setPasswordValidated(validate(password, "pass"));

  const submitHandler = (e) => {
    e.preventDefault();
    if ((nameValidated, emailValidated, passwordValidated)) {
      if (password === checkPassword) {
        addUser({
          name,
          email,
          password,
        });

        setDisabeleButton((prevState) => !disableButton);
        setTimeout(() => navigate("/"), 1000);
        return;
      }
    }
  };

  return (
    <section className={classes.container}>
      <BackButton />
      <div>
        <h2>Creating an PowerPulse Account</h2>
      </div>
      <form onSubmit={(e) => submitHandler(e)} action="">
        <label htmlFor="name">Name: </label>
        <input
          value={name}
          onChange={(e) => setName((prevState) => e.target.value)}
          onBlur={validateName}
          type="text"
          name="name"
          placeholder="Enter first-lastname"
        />
        {!nameValidated && <p>Name should be longer that 5 characters</p>}

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

        <label htmlFor="check">Enter your Password again: </label>
        <input
          onChange={(e) => setCheckPassword(e.target.value)}
          type="password"
          name="check"
        />
        <button
          className={disableButton ? classes.gray : ""}
          type="submit"
          disabled={disableButton}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default CreateAccount;
