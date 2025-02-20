import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-row bg-gray-100  h-14 justify-center items-center px-3 gap-2  border-2 border-primary rounded-lg  w-[80%] md:w-[60%]">
        <FaSearch size={25} className="text-primary" />
        <input
          type="text"
          placeholder="Search for Categories"
          className="w-full bg-gray-100 h-full ring-0 outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
