import { useAppSelector } from "../hooks/reduxHooks";

const CartSummary = () => {
  const useSelector = useAppSelector;
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <div className="fixed bottom-0 left-0 right-0">
      <div className="bg-primary rounded-t-xl p-5 flex justify-between ">
        <div className="flex gap-4 items-center">
          <p className="bg-white text-primary rounded-md p-1 font-semibold w-6 h-6 flex justify-center items-center">
            {cartItems.length}
          </p>
          <p className="text-white">View cart</p>
        </div>
        <p className="text-white font-semibold">AED {totalPrice}</p>
      </div>
      <p className="text-primary text-sm p-1 bg-white ">
        {" "}
        Prices are in AED and are inclusive of 10% service charges, 5% VAT & 7%
        Municipality fee.
      </p>
    </div>
  );
};

export default CartSummary;
