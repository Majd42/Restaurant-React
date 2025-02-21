import React from "react";
import { useAppSelector } from "../hooks/reduxHooks";

const ItemsListing = () => {
  const useSelector = useAppSelector;

  const categoryItems = useSelector((state) => state.categories.categoryItems);
  console.log({ categoryItems });
  return <div>ItemsListing</div>;
};

export default ItemsListing;
