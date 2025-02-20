import { Category } from "../types";

type PropTypes = {
  category: Category;
};
const CategoryListingItem = ({ category }: PropTypes) => {
  console.log({ category });
  return (
    <div className="max-w-[350px] w-[95%] w-full h-[200px] rounded-xl overflow-hidden">
      <img
        src={category.image}
        width={"100%"}
        height={"100%"}
        alt={category.name}
        className="object-cover h-full w-full"
      />
    </div>
  );
};

export default CategoryListingItem;
