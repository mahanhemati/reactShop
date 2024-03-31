import { createContext, useContext, useEffect, useState } from "react";
const Product_Context = createContext();
function ProductContext({ children }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <>
      <Product_Context.Provider value={data}>
        {children}
      </Product_Context.Provider>
    </>
  );
}
const useProducts = () => {
  const productsData = useContext(Product_Context);
  return productsData;
};
export { useProducts };
export default ProductContext;
