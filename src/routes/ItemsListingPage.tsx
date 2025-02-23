import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import AppButton from "../components/AppButton";
import { useAppDispatch } from "../hooks/reduxHooks";
import { getCategoryItems } from "../store/features/categoriesSlice";
import { useParams, useSearchParams } from "react-router";
import ItemsListing from "../components/ItemsListing";
import CartSummary from "../components/CartSummary";

const ItemsListingPage = () => {
  const dispatch = useAppDispatch();
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(getCategoryItems({ categoryId: categoryId! }));
  }, []);
  return (
    <div className="mt-5 relative">
      <SearchBar />
      <div className="mx-2 flex justify-center items-center   mt-5 gap-2  ">
        <div className=" max-w-[900px] w-[90%] flex flex-row gap-2 ">
          <AppButton onClick={() => console.log("ksjdf")}>
            Main Courses
          </AppButton>
          <AppButton secondary onClick={() => console.log("ksjdf")}>
            Side Courses
          </AppButton>
        </div>
      </div>
      <ItemsListing />
      <div className="my-20">
        <CartSummary />
      </div>
    </div>
  );
};

export default ItemsListingPage;
