import products from "../../Products.json";

const useRender = () => {
  return products.map((product) => <Card key={product.id} product={product} />);
};

export default useRender;
