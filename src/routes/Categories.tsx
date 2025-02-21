import { useEffect } from "react";
import CategoryListing from "../components/CategoryListing";
import SearchBar from "../components/SearchBar";
import { useAppDispatch } from "../hooks/reduxHooks";
import { getCategories } from "../store/features/categoriesSlice";

const Categories = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <div className="mt-5">
      <SearchBar />

      <CategoryListing />
    </div>
  );
};

export default Categories;
