import classes from "./Navbar.module.css";
import searchIcon from "/assets/search-icon-darkmode.svg";
import cartIcon from "/assets/cart-icon.svg";
import AccountIcon from "/assets/account-icon.svg";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Input from "./searchInput/Input";
import SearchSuggestions from "./searchInput/SearchSuggestions";
import { useUsers } from "../../../context/UserContext";

const Navbar = () => {
  const { usersList } = useUsers();
  const navigate = useNavigate();
  const [search, setSearch] = useState(false);
  const [foundArr, setFoundArr] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const showCart = () => {
    navigate("/cart");
  };

  const showProfile = () => {
    console.log("hello");
    // => go to /account
  };

  return (
    <nav className={classes.navbar}>
      <div>
        <h1
          onClick={() => {
            navigate("/");
          }}
        >
          PowerPulse
        </h1>
        {usersList.length < 1 ? (
          <button
            onClick={() => navigate("/login")}
            className={classes.cartButton}
          >
            <img src={AccountIcon} alt="" />
            <p>log in</p>
          </button>
        ) : (
          ""
        )}
        <div className={classes.searchContainer}>
          <img src={searchIcon} alt="" />
          <Input
            inputValue={inputValue}
            setInputValue={setInputValue}
            setFoundArr={setFoundArr}
            setSearch={setSearch}
          />
          {search && (
            <SearchSuggestions
              setInputValue={setInputValue}
              foundArr={foundArr}
            />
          )}
        </div>
      </div>
      <div>
        {usersList.length >= 1 ? (
          <button
            onClick={() => navigate("/account")}
            className={classes.cartButton}
          >
            <img src={AccountIcon} alt="" />
            <p>{usersList[0].name}</p>
          </button>
        ) : (
          ""
        )}
        <button onClick={showCart} className={classes.cartButton}>
          <img src={cartIcon} alt="" />
          <p>Cart</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
