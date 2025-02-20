import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartBadge = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  return (
    <button className="relative">
      <FaShoppingCart className="text-primary" size={30} />
      <div className="absolute -top-2 -right-2 bg-primary rounded-full w-4 h-4 text-xs text-white">
        {cartItemsCount}
      </div>
    </button>
  );
};

export default CartBadge;
