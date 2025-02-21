import { ReactNode } from "react";

type PropTypes = {
  onClick: () => void;
  secondary?: boolean;
  sm?: boolean;
  children: ReactNode;
};

const AppButton = ({ onClick, secondary, sm, children }: PropTypes) => {
  return (
    <button
      onClick={onClick}
      className={`${
        secondary
          ? "bg-white text-primary  border-[2px] border-primary rounded-lg"
          : "bg-primary rounded-lg text-white"
      } w-full py-1   ${sm ? "text-sm " : "text-xl font-semibold"}`}
    >
      {children}
    </button>
  );
};

export default AppButton;
