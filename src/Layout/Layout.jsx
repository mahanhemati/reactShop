import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CardContext";
import { Link } from "react-router-dom";
function Layout({ children }) {
  const { state, dispatch } = useCart();
  return (
    <>
      {state.itemCounter > 0 && (
        <span className="counter">{state.itemCounter}</span>
      )}
      <header>
        <Link to="/homePage">
         <p>Mahan Shop</p>
        </Link>
        <Link to="/checkout">
          <div>
            <span>
              <FiShoppingCart />
            </span>
          </div>
        </Link>
      </header>
      {children}
      <footer>
        <p>Developed With 💙 By Mahan</p>
      </footer>
    </>
  );
}

export default Layout;
