import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./features/categoriesSlice";
import cartReducer from "./features/cartSlice";

// const rootReducer = combineReducers({
//   categories: categoriesReducer,
// });

export const store = configureStore({
  reducer: { categories: categoriesReducer, cart: cartReducer },
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
