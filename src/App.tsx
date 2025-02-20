import { useState } from "react";
import { Route, Routes } from "react-router";
import Categories from "./routes/categories";
import ItemsListing from "./routes/ItemsListing";

function App() {
  return (
    <Routes>
      <Route path={"/categories"}>
        <Route index element={<Categories />} />
        <Route path=":id" element={<ItemsListing />} />
      </Route>
    </Routes>
  );
}

export default App;
