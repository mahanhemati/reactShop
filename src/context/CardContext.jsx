import React, { createContext, useContext, useReducer } from "react";
import { sumProdutcs } from "../helper/helper";
const Card_Context = createContext();
const initialState = {
  selectedItem: [],
  itemCounter: 0,
  total: 0,
  checkout: false,
};
const reducer = (state, action) => {
  const Data = action.payload;
  switch (action.type) {
    case "ADD_PRODUCT":
      const Check = !!state.selectedItem.find(
        (p) => p.id === action.payload.id
      );
      if (!Check) {
        state.selectedItem = [...state.selectedItem, { ...Data, quentity: 1 }];
      } else {
        return {
          ...state,
          selectedItem: [...state.selectedItem],
          ...sumProdutcs(state.selectedItem),
          checkout: false,
        };
      }
    case "INCREASE":
      const productsIndex = state.selectedItem.findIndex(
        (p) => p.id === Data.id
      );
      state.selectedItem[productsIndex].quentity++;
      return {
        ...state,
        ...sumProdutcs(state.selectedItem),
      };
    case "DECRESE":
      const deletedIndex = state.selectedItem.findIndex(
        (p) => p.id === Data.id
      );
      state.selectedItem[deletedIndex].quentity--;
      return { ...state, ...sumProdutcs(state.selectedItem), checkout: false };
    case "REMOVE_ITEM":
      const deleted = state.selectedItem.filter((p) => p.id !== Data.id);
      return {
        ...state,
        selectedItem: [...deleted],
        ...sumProdutcs(deleted),
        checkout: false,
      };
    case "CHECKOUT":
      return {
        selectedItem: [],
        itemCounter: 0,
        total: 0,
        checkout: false,
      };
    default:
      break;
  }
};
function CardContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Card_Context.Provider value={{ state, dispatch }}>
      {children}
    </Card_Context.Provider>
  );
}
const useCart = () => {
  const Data = useContext(Card_Context);
  return Data;
};
export { useCart };
export default CardContext;
