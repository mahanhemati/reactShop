import React, { useEffect, useState } from "react";
import { TbH1 } from "react-icons/tb";
import { ThreeDots } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";
import { IoIosPricetags } from "react-icons/io";
import { MdOutlinePriceChange } from "react-icons/md";
import styles from "./ProductsDeatils.module.css"
function ProductsDeatils() {
  let { id } = useParams();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
    // id = null;
  }, []);
  return (
    <>
      {!products ? (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#fe5d42"
          radius="9"
        />
      ) : (
        <div className={styles.contianer}>
          <img src={products.image} alt={products.title} />
          <div className={styles.information}>
            <h3>{products.title}</h3>
            <p className={styles.description}>{products.description}</p>
            <p className={styles.category}>
              <IoIosPricetags />
              {products.category}
            </p>
            <div>
              <span><MdOutlinePriceChange/> {products.price+1000}</span>
              <Link to="/homePage">Back To Shop</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductsDeatils;
