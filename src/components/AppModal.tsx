import { useEffect, useState } from "react";
import { CategoryItem } from "../types";
import { FaPlusSquare } from "react-icons/fa";
import { useAppDispatch } from "../hooks/reduxHooks";
import { addToCart } from "../store/features/cartSlice";

type PropTypes = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItem: CategoryItem;
};

const AppModal = ({ isOpen, setIsOpen, selectedItem }: PropTypes) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState<{
    [key: string]: string;
  }>({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAddToCart = () => {
    // Check if all required extras are selected
    const missingExtras = selectedItem.extrasWithOptions
      .filter((extra) => extra.is_required) // Get only required extras
      .some((extra) => !selectedExtras[extra.name]); // Check if any required extra is missing

    if (missingExtras) {
      alert("Please select all required extras before adding to cart.");
      return;
    }

    // Proceed to add item to cart if validation passes
    dispatch(
      addToCart({ categoryItem: selectedItem, quantity, selectedExtras })
    );
    setIsOpen(false);
  };

  const handleExtraChange = (extraName: string, optionName: string) => {
    setSelectedExtras((prev) => ({
      ...prev,
      [extraName]: optionName,
    }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-20 overflow-hidden ">
      <div className="w-[90%] max-w-[500px] bg-white shadow-lg rounded-lg relative max-h-[90vh] overflow-y-scroll [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden ">
        <button
          className="text-primary absolute top-1 right-1"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
        <img
          src={selectedItem.image}
          width={"100%"}
          height={"100px"}
          className="mt-2 h-[300px] object-cover"
        />
        <div className="my-5">
          <h2 className="font-semibold my-1 px-3">
            {selectedItem.display_name}
          </h2>
          <p className="text-sm px-3">{selectedItem.description}</p>
          <div className="my-5 flex flex-row justify-between items-center px-3">
            <p className="text-primary font-semibold text-sm">
              AED {selectedItem.price}
            </p>
            <div className="flex justify-around items-center border-2 border-primary rounded-lg w-[100px]">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="text-xl text-primary font-semibold"
              >
                -
              </button>
              <p className="font-semibold text-sm">{quantity}</p>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="text-xl text-primary font-semibold"
              >
                +
              </button>
            </div>
          </div>

          {selectedItem.extrasWithOptions.length > 0 &&
            selectedItem.extrasWithOptions.map((extraOption) => (
              <div key={extraOption.name} className="mb-3">
                <div className="flex flex-row justify-between items-center bg-gray-100 p-3">
                  <p className="font-semibold text-sm">{extraOption.name}</p>
                  {extraOption.is_required && (
                    <p className="text-red-500 text-sm font-semibold">
                      Required *
                    </p>
                  )}
                </div>
                <div className="p-3">
                  {extraOption.option.map((selection) => (
                    <div
                      key={selection.id}
                      className="flex flex-row justify-between px-2 py-4"
                    >
                      <label
                        key={selection.name}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-sm">{selection.name}</span>
                      </label>
                      <input
                        type="radio"
                        name={extraOption.name}
                        value={selection.name}
                        checked={
                          selectedExtras[extraOption.name] === selection.name
                        }
                        onChange={() =>
                          handleExtraChange(extraOption.name, selection.name)
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <div className="p-4">
          <button
            onClick={handleAddToCart}
            className="py-3 px-6 w-full bg-primary text-white font-bold text-lg rounded-xl flex justify-between items-center "
          >
            <div className="flex items-center gap-2">
              <FaPlusSquare />
              <p>Add to Cart</p>
            </div>
            <div>
              <p>AED {(quantity * selectedItem.price).toFixed(2)}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppModal;
