import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getCategories } from "../store/features/categoriesSlice";
import SearchBar from "../components/SearchBar";
import AppButton from "../components/AppButton";
import CategoryListingItem from "../components/CategoryListingItem";
import CategoryListing from "../components/CategoryListing";

const Categories = () => {
  const dispatch = useAppDispatch();

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
      <CategoryListing />
    </div>
  );
};

export default Categories;
