import React from "react";
import { TbShoppingBagCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import styles from "./Card.module.css";
import { getItemCounter, getShortenText } from "../helper/helper";
import { useCart } from "../context/CardContext";
import { IoMdTrash } from "react-icons/io";
function Card({ data }) {
  const { id, title, price, description, category, image, rating } = data;
  const { rate, count } = rating;
  const { state, dispatch } = useCart();
  const qentity = getItemCounter(state, id) / 2;
  return (
    <div className={styles.card}>
      <div className={styles.aboutThisProduct}>
        <span className={styles.rate}>
          {<FaStar />} {rate}
        </span>
        <span className={styles.count}>
          {<FaUser />} {count}
        </span>
      </div>
      <img src={image} alt={title} />
      <h3>{getShortenText(title)}</h3>
      <p>{price + 1000} Toman</p>
      <div className={styles.actions}>
        <Link to={`/productsDeatils/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {qentity === 0 && (
            <button
              onClick={() => {
                dispatch({ type: "ADD_PRODUCT", payload: data });
              }}
            >
              <TbShoppingBagCheck />
            </button>
          )}
          {qentity === 1 && (
            <button
              onClick={() => {
                dispatch({ type: "REMOVE_ITEM", payload: data });
              }}
            >
              <IoMdTrash />
            </button>
          )}
          {qentity >= 2 && (
            <button
              onClick={() => {
                dispatch({ type: "DECRESE", payload: data });
              }}
            >
              -
            </button>
          )}

          {qentity > 0 && <span>{qentity}</span>}

          {qentity >= 1 && (
            <button
              onClick={() => {
                dispatch({ type: "INCREASE", payload: data });
              }}
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
