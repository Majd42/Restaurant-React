import { useNavigate } from "react-router";
import { Category } from "../types";

type PropTypes = {
  category: Category;
};
const CategoryListingItem = ({ category }: PropTypes) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/categories/" + category.id)}
      className="relative max-w-[350px] w-[95%] w-full h-[220px] rounded-xl group "
    >
      <div className="absolute -left-3  top-0 w-3 h-[90%] bg-gradient-to-b to-gray-300 from-white mt-2" />
      <div className="absolute -right-3  top-0 w-3 h-[90%] bg-gradient-to-b from-gray-300 to-white mt-2" />
      <div className="overflow-hidden relative w-full h-full rounded-xl">
        {category.opens_at && (
          <div className="absolute top-4 left-0 bg-red-500 text-white text-sm px-4 py-1 font-semibold rounded-r-full z-[10]">
            Opens at {category.opens_at}
          </div>
        )}
        <img
          src={category.image}
          width={"100%"}
          height={"100%"}
          alt={category.name}
          className="object-cover h-full w-full rounded-xl group-hover:scale-[105%] transition-all "
        />
        <h2 className="absolute bottom-1 text-center text-white text-xl font-bold w-full tracking-wider ">
          {category.display_name}
        </h2>
      </div>
    </button>
  );
};

export default CategoryListingItem;
