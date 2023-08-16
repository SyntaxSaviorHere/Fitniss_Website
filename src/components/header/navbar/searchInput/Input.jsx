import { useEffect, useState } from "react";
import products from "../../../../../Products.json";
import classes from "./Input.module.css";
const Input = ({ setSearch, setFoundArr, setInputValue, inputValue }) => {
  const [found, setFound] = useState([]);
  const [foundRang2, setFoundRang2] = useState([]);

  const onFocus = () => {
    setSearch(true);
  };
  const onBlur = () => {
    setTimeout(() => {
      setSearch(false);
    }, 100);
  };

  const onChange = (e) => {
    setInputValue((prevState) => e.target.value);
    if (!e.target.value) {
      return;
    }
    setFound([]);
    const entered = e.target.value.toLowerCase();
    products.forEach((product) => {
      if (product.title.toLowerCase().includes(entered)) {
        setFound((prevState) => [...prevState, product]);
      }
      if (product.type.toLowerCase().includes(entered)) {
        setFound((prevState) => [...prevState, product]);
      }
      if (product.text.toLowerCase().includes(entered)) {
        setFoundRang2((prevState) => [...prevState, product]);
        if (found.length < 2 && found.length > 0) {
          setFound((prevState) => [...prevState, ...foundRang2]);
        }
      }
    });
  };

  useEffect(() => {
    setFoundArr((prevState) => [...found]);
  }, [found]);
  return (
    <input
      value={inputValue}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      type="text"
    />
  );
};

export default Input;
