import { ReactNode } from "react";

type PropTypes = {
  onClick: () => void;
  secondary?: boolean;
  children: ReactNode;
};

const AppButton = ({ onClick, secondary, children }: PropTypes) => {
  return (
    <button
      onClick={onClick}
      className={`${
        secondary
          ? "bg-white text-primary  border-[2px] border-primary rounded-lg"
          : "bg-primary rounded-lg text-white"
      } w-full py-2  font-semibold  text-lg`}
    >
      {children}
    </button>
  );
};

export default AppButton;
