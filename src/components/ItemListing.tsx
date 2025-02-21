import { CategoryItem } from "../types";
import AppButton from "./AppButton";

type PropTypes = {
  categoryItem: CategoryItem;
};

const ItemListing = ({ categoryItem }: PropTypes) => {
  console.log({ categoryItem });
  return (
    <div className="flex justify-center items-center my-5  ">
      <div className="flex flex-row h-[180px] w-[93%] max-w-[600px]  bg-white shadow-lg relative">
        <div className="absolute -left-2  top-0 w-2 h-[90%] bg-gradient-to-b to-gray-300 from-gray-100 mt-2" />
        <div className="absolute -right-2  top-0 w-2 h-[90%] bg-gradient-to-b from-gray-300 to-gray-100 mt-2" />
        <div className="w-[38%]">
          <img
            width={"100%"}
            height={"100%"}
            src={categoryItem.image}
            alt={categoryItem.name}
            className="h-full h-full object-cover"
          />
        </div>
        <div className="w-[62%] flex flex-col justify-between p-3 gap-2">
          <h2 className="font-semibold text-sm">{categoryItem.display_name}</h2>
          <p className="font-semibold text-sm">{categoryItem.description}</p>
          <div className="flex flex-row justify-between items-center">
            <p className="w-[100%] text-primary font-semibold text-sm">
              AED {categoryItem.price}{" "}
            </p>
            <AppButton sm onClick={() => console.log("hi")}>
              Add to Cart
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListing;
