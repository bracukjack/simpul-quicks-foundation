import React from "react";
import { SearchIcon } from "./CustomIconComponents";

interface SearchBarProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value = "",
  onChange,
  onSearch,
  placeholder = "Search...",
}) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onSearch) {
      onSearch();
    }
  };

  return (
    <div className="flex w-full items-center rounded border bg-white px-5">
      <input
        type="text"
        className="mr-3 w-full appearance-none border-none bg-transparent px-3 py-2 leading-tight text-gray-700 focus:outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <button
        className="flex-shrink-0 border-none bg-transparent hover:border-none focus:border-none"
        onClick={onSearch}
      >
        <div className="ml-auto mr-2 mt-1 flex items-center text-black">
          <SearchIcon className="text-black" />
        </div>
      </button>
    </div>
  );
};

export default SearchBar;
