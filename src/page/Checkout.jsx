import styles from "./Checkout.module.css";
import { TbChecklist } from "react-icons/tb";
import { BsPatchCheck } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa6";
import { useCart } from "../context/CardContext";
import BasketCard from "../components/BasketCard";
function Checkout() {
  const { state, dispatch } = useCart();
  if (state.selectedItem.length === 0) {
    return <p>empty</p>;
  }
  return (
    <div className={styles.contianer}>
      <div className={styles.sideBar}>
        <div>
          <TbChecklist />
          <p>Total :</p>
          <span>{state.total.toFixed()}</span>
        </div>
        <div>
          <FaHashtag />
          <p>Quantity</p>
          <span>{state.itemCounter}</span>
        </div>
        <div>
          <BsPatchCheck />
          <p>Status</p>
          <span>{state.checkout ? "Succes" : "Pending..."}</span>
        </div>
        <button onClick={() => dispatch({ type: "CHECKOUT" })}>CheckOut</button>
      </div>
    <div className={styles.products}>
    {
        state.selectedItem.map(i => <BasketCard data={i} state={state} dispatch={dispatch} key={i.id}/>)
      }
    </div>
    </div>
  );
}

export default Checkout;
