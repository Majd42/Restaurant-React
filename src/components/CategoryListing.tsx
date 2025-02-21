import { useAppSelector } from "../hooks/reduxHooks";
import CategoryListingItem from "./CategoryListingItem";
import LoadingSpinner from "./LoadingSpinner";

const CategoryListing = () => {
  const useSelector = useAppSelector;

  const categories = useSelector((state) => state.categories.categories);
  const loadingCategories = useSelector(
    (state) => state.categories.loadingCategories
  );
  const errorCategories = useSelector(
    (state) => state.categories.errorCategories
  );

  if (loadingCategories) {
    return <LoadingSpinner />;
  }
  if (categories.length <= 0 || errorCategories) {
    return (
      <div className="text-gray-500 flex justify-center items-center ">
        No Results Found
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1  gap-8 place-items-center mx-3  mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {categories.map((category) => (
        <CategoryListingItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryListing;
