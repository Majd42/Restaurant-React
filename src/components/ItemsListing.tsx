import React from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import ItemListing from "./ItemListing";
import LoadingSpinner from "./LoadingSpinner";

const ItemsListing = () => {
  const useSelector = useAppSelector;

  const categoryItems = useSelector((state) => state.categories.categoryItems);
  const loadingCategoryItems = useSelector(
    (state) => state.categories.loadingCategoryItems
  );
  const errorCategoryItems = useSelector(
    (state) => state.categories.errorCategoryItems
  );

  if (loadingCategoryItems) {
    return <LoadingSpinner />;
  }

  if (categoryItems.length <= 0 || errorCategoryItems) {
    return <p className="text-center text-gray-300">No Results Found </p>;
  }
  return (
    <div className="bg-gray-100 grid mt-7 py-4">
      {categoryItems.map((item) => (
        <ItemListing key={item.id} categoryItem={item} />
      ))}
    </div>
  );
};

export default ItemsListing;
