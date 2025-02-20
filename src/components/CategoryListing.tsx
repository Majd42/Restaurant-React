import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { Category } from "../types";
import CategoryListingItem from "./CategoryListingItem";

const CategoryListing = () => {
  const useSelector = useAppSelector;

  const categories = useSelector((state) => state.categories.categories);
  const loadingCategories = useSelector(
    (state) => state.categories.loadingCategories
  );
  const errorCategories = useSelector(
    (state) => state.categories.errorCategories
  );

  console.log(categories, loadingCategories, errorCategories);
  if (categories.length <= 0) {
    return (
      <div className="bg-gray-500 flex justify-center items-center ">
        No Results Found
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-2 place-items-center  mt-5 ">
      {categories.map((category) => (
        <CategoryListingItem category={category} />
      ))}
    </div>
  );
};

export default CategoryListing;
