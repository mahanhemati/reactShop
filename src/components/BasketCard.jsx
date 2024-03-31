import { TbShoppingBagCheck } from "react-icons/tb";
import { getItemCounter, getShortenText } from "../helper/helper";
import styles from "./BasketCard.module.css";
import { IoMdTrash } from "react-icons/io";
function BasketCard({ data, state, dispatch }) {
  const qentity = getItemCounter(state, data.id) / 2;
  return (
    <div className={styles.card}>
      <img src={data.image} alt={data.title} />
      <p>{getShortenText(data.title)}</p>
      <div className={styles.actions}>
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
  );
}

export default BasketCard;
