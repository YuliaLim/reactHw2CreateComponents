import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totaltems: 0,
  totalPrice: 0,
};

const deletefromPizzaArray = (array, id) => {
  return array.filter((item) => item.id !== id);
};
const actionWithCountPizzaSlice = createSlice({
  name: "actionWithCount",
  initialState,
  reducers: {
    addPizza: (state, action) => {
      const existedPizza = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existedPizza) {
        state.items.push({ ...action.payload, qty: 1 });
      } else {
        existedPizza.qty = existedPizza.qty + 1;
      }
    },
    deletePizza: (state, action) => {
      state.items = deletefromPizzaArray(state.items, action.payload);
      //state.items = state.items.filter((item) => item.id !== action.payload);
    },
    decrementPizza: (state, action) => {
      const deletedPizza = state.items.find(
        (item) => item.id === action.payload
      );

      if (deletedPizza.qty > 1) {
        deletedPizza.qty = deletedPizza.qty - 1;
      } else {
        state.items = deletefromPizzaArray(state.items, action.payload);
      }
      //  }
    },
  },
});

export default actionWithCountPizzaSlice.reducer;
export const { addPizza, deletePizza, decrementPizza } =
  actionWithCountPizzaSlice.actions;
