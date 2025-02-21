import React from "react";
import SearchBar from "../components/SearchBar";
import AppButton from "../components/AppButton";

const ItemsListing = () => {
  return (
    <div className="mt-5">
      <SearchBar />
      <div className="mx-2 flex flex-row mt-5 gap-2">
        <AppButton onClick={() => console.log("ksjdf")}>Main Courses</AppButton>
        <AppButton secondary onClick={() => console.log("ksjdf")}>
          Side Courses
        </AppButton>
      </div>
    </div>
  );
};

export default ItemsListing;
