import classes from "./SearchSuggestions.module.css";
import Item from "./Item";

const SearchSuggestions = ({ foundArr, setInputValue }) => {
  const array = foundArr.slice(0, 5);
  return (
    <div className={classes.container}>
      {array.map((found) => {
        return (
          <Item setInputValue={setInputValue} key={found.id} found={found} />
        );
      })}
    </div>
  );
};
export default SearchSuggestions;
