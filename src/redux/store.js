import { configureStore } from "@reduxjs/toolkit";
import actionWithCountPizzaReducer from "./slice/actionWithCountPizzaSlice";

export const store = configureStore({
  reducer: {
    actionWithPizza: actionWithCountPizzaReducer
  },
});
