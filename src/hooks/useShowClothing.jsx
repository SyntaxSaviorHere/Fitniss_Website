import products from "../../Products.json";

const useShowClothing = () => {
  const newList = products.filter((product) => product.type === "clothing");
  return newList;
};

export default useShowClothing;
