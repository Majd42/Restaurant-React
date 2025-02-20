import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getCategories } from "../store/features/categoriesSlice";
import SearchBar from "../components/SearchBar";
import AppButton from "../components/AppButton";

const Categories = () => {
  const dispatch = useAppDispatch();
  const useSelector = useAppSelector;

  const categories = useSelector((state) => state.categories.categories);
  const loadingCategories = useSelector(
    (state) => state.categories.loadingCategories
  );
  const errorCategories = useSelector(
    (state) => state.categories.errorCategories
  );

  console.log(categories, loadingCategories, errorCategories);
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <div className="mt-5">
      <SearchBar />
      {/* <div className="mx-2 flex flex-row mt-5 gap-2">
        <AppButton onClick={() => console.log("ksjdf")}>Main Courses</AppButton>
        <AppButton secondary onClick={() => console.log("ksjdf")}>
          Side Courses
        </AppButton>
      </div> */}
    </div>
  );
};

export default Categories;
