import { useState } from "react";
import { useUsers } from "../../context/UserContext";
import classes from "./Account.module.css";
import BackButton from "../../UI/BackButton";

const Account = () => {
  const { usersList } = useUsers();
  const [show, setShow] = useState(false);
  console.log(usersList);
  console.log(usersList[0]);
  const { name, password, email } = usersList[0];

  return (
    <div className={classes.container}>
      <BackButton />
      <h2>Your Account information: </h2>
      <div>
        <p>Name:</p>
        <p>{name}</p>
      </div>
      <div>
        <p>Email:</p>
        <p>{email}</p>
      </div>
      <div>
        {show && <p>Password: </p>}
        <p>
          {!show && "Password"} {show ? <p>{password}</p> : ""}
        </p>
        {show ? (
          ""
        ) : (
          <button
            onClick={() => {
              setShow(true);
            }}
          >
            show
          </button>
        )}
      </div>
    </div>
  );
};

export default Account;
