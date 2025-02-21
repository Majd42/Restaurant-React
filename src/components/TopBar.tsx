import { BiArrowBack } from "react-icons/bi";
import CartBadge from "./CartBadge";

const TopBar = () => {
  return (
    <div className="bg-gray-200 h-20 flex flex-row justify-between items-center px-5">
      <button className="border-2 border-primary rounded-lg px-2 py-1 flex flex-row justify-center items-center gap-1 text-primary ">
        <BiArrowBack /> Back
      </button>
      <h1 className="hidden sm:block text-lg text-primary font-bold">
        {" "}
        In Room Dinning
      </h1>
      <CartBadge />
    </div>
  );
};

export default TopBar;
