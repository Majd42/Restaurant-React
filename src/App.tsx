import { useState } from "react";
import { Route, Routes } from "react-router";

import ItemsListing from "./routes/ItemsListing";
import Categories from "./routes/Categories";

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
