import { Navigate, Route, Routes } from "react-router";

import ItemsListingPage from "./routes/ItemsListingPage";
import CategoriesPage from "./routes/CategoriesPage";

import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/categories" replace />} />

      <Route path={"/categories"} element={<Layout />}>
        <Route index element={<CategoriesPage />} />
        <Route path=":categoryId" element={<ItemsListingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
