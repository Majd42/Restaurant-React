import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getCategories } from "../store/features/categoriesSlice";

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
  return <div>categories</div>;
};

export default Categories;
