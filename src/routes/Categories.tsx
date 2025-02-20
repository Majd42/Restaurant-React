import React, { useEffect } from "react";
import { useAppDispatch } from "../hooks/reduxHooks";
import { getCategories } from "../store/features/categoriesSlice";

const Categories = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return <div>categories</div>;
};

export default Categories;
