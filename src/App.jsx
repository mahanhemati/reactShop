import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Layout from "./Layout/Layout";
import ProductContext from "./context/productContext";
import ProductDeatils from "./page/ProductsDeatils";
import CardContext from "./context/CardContext";
import PageNotFound from "./page/404";
import Checkout from "./page/Checkout";
function App() {
  return (
    <>
      <BrowserRouter>
        <ProductContext>
          <CardContext>
            <Layout>
              <Routes>
                <Route index element={<Navigate to="/homePage" replace />} />
                <Route path="/homePage" element={<HomePage />} />
                <Route
                  path="/productsDeatils/:id"
                  element={<ProductDeatils />}
                />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </Layout>
          </CardContext>
        </ProductContext>
      </BrowserRouter>
    </>
  );
}

export default App;
