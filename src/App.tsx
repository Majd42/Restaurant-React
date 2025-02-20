import { Route, Routes } from "react-router";

import ItemsListing from "./routes/ItemsListing";
import Categories from "./routes/Categories";

import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path={"/categories"} element={<Layout />}>
        <Route index element={<Categories />} />
        <Route path=":id" element={<ItemsListing />} />
      </Route>
    </Routes>
  );
}

export default App;
