import { useEffect, useState } from "react";
import { useProducts } from "../context/productContext.jsx";
import { ThreeDots } from "react-loader-spinner";
import styles from "./HomePage.module.css";
import Card from "../components/Card.jsx";
import SideBar from "../components/SideBar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import {
  SearchProducts,
  categoryProducts,
  getInitialQuery,
  getItemCounter,
  sortProducts,
} from "../helper/helper.js";
import { useSearchParams } from "react-router-dom";
function HomePage() {
  const [searchPrams, setSearchPrams] = useSearchParams();
  const [query, setQuery] = useState({});
  const [productData, setProductData] = useState(null);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const PRODUCTS_DATA = useProducts();
  useEffect(() => {
    setProductData(PRODUCTS_DATA);
    const query = {};
    const category = searchPrams.get("category");
    const search = searchPrams.get("search");
    const sortBy = searchPrams.get("sortBy");
    if (category) {
      query.category = category;
    }
    if (search) {
      query.search = search;
    }
    if (sortBy) {
      query.sortBy = sortBy;
    }
    setQuery(query);
  }, [PRODUCTS_DATA]);
  useEffect(() => {
    setSearchPrams(query);
    if (PRODUCTS_DATA) {
      let serachProducts = SearchProducts(query.search, PRODUCTS_DATA);
      let FinalProductData = categoryProducts(query.category, serachProducts);
      FinalProductData = sortProducts(query.sortBy, FinalProductData , productData);
      setProductData(FinalProductData);
    }
  }, [query]);
  useEffect(() => {
    setQuery((value) => getInitialQuery(value, { sortBy }));
  }, [sortBy]);
  const SearchHandler = () => {
    setQuery((value) => getInitialQuery(value, { search }));
  };
  const CategoryHandler = (e) => {
    const { tagName } = e.target;
    const text = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((value) => getInitialQuery(value, { category: text }));
  };
  const sortHandler = (e) => {
    setSortBy(e.target.value);
  };
  return (
    <>
      <SearchBar
        handler={SearchHandler}
        state={search}
        setSate={setSearch}
        selectState={sortBy}
        selectHandler={sortHandler}
      />
      <div className={styles.contianer}>
        {!productData ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#fe5d42"
              radius="9"
            />
          </div>
        ) : (
          <div className={styles.products}>
            {productData.map((pro) => (
              <Card key={pro.id} data={pro} />
            ))}
          </div>
        )}
        <div className={styles.sideBar}>
          <SideBar handler={CategoryHandler} query={query}/>
        </div>
      </div>
    </>
  );
}

export default HomePage;
