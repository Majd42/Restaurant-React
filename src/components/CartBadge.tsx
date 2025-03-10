import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useAppSelector } from "../hooks/reduxHooks";

const CartBadge = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const useSelector = useAppSelector;
  const cartItemCount = useSelector((state) => state.cart.cartItems.length);

  return (
    <button className="relative">
      <FaShoppingCart className="text-primary" size={30} />
      <div className="absolute -top-2 -right-2 bg-primary rounded-full w-4 h-4 text-xs text-white">
        <p className="text-xs font-semibold"> {cartItemCount}</p>
      </div>
    </button>
  );
};

export default CartBadge;
