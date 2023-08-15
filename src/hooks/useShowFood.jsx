import products from "../../Products.json";

const useShowFood = () => {
  const newList = products.filter((product) => product.type === "food");
  return newList;
};

export default useShowFood;
