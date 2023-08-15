import products from "../../Products.json";

const useShowFitnissGear = () => {
  const newList = products.filter((product) => product.type === "fitness");
  return newList;
};

export default useShowFitnissGear;
