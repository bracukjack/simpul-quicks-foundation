import { useState } from "react";

interface DropdownProps {
  options: { value: string; label: string }[];
  handleOptionClick: (value: string) => void;
  visible: boolean;
}
const Dropdown = ({ options, handleOptionClick, visible }: DropdownProps) => {
  return (
    <div
      className={`absolute z-10 mt-1 w-full rounded border border-gray-400 bg-white text-black ${
        visible ? "block" : "hidden"
      }`}
    >
      {options.map((option) => (
        <div
          key={option.value}
          className="cursor-pointer border-b px-4 py-2 hover:bg-gray-200"
          onClick={() => handleOptionClick(option.value)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
