import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./features/categoriesSlice";

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

export const store = configureStore({
  reducer: { rootReducer },
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
