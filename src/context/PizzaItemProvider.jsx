import { createContext, useReducer } from "react";

export const PizzaItemContext = createContext(null);
const PizzaItemProvider = ({ children }) => {
  const initialState = {
    items: [],
    totaltems: 0,
    totalPrice: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_PIZZA":
        const isExist = state.items.find(
          (item) => item.id === action.payload.id
        );
        if (!isExist) {
          return {
            ...state,
            items: [...state.items, { ...action.payload, qty: 1 }],
          };
        }
        const updateItems = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          }
          return item;
        });
        return {
          ...state,
          items: updateItems,
        };

      case "DELETE_PIZZA":
        const filteredItems = state.items.filter(
          (item) => item.id !== action.payload
        );
        return {
          ...state,
          items: filteredItems,
        };
      case "DECREMENT_PIZZA":
        let updateItemsDecrement = state.items.map((item) => {
          if (item.id === action.payload) {
            let qtyPizzas = 0;
            if (item.qty > 0) {
              qtyPizzas = item.qty - 1;
            }

            return { ...item, qty: qtyPizzas };
          }
          return item;
        });

        return {
          ...state,
          items: updateItemsDecrement,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PizzaItemContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </PizzaItemContext.Provider>
  );
};
export default PizzaItemProvider;
