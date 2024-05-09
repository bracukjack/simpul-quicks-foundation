import React, { useState, useEffect, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectInputProps {
  options: SelectOption[];
  value?: string;
  onChange?: (selectedValue: string) => void;
  placeholder?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  value = "",
  onChange,
  placeholder = "Select...",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOptionClick = (selectedValue: string) => {
    setIsOpen(false);
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <div ref={selectRef} className=" w-fit">
      <div
        className="flex w-fit cursor-pointer rounded border border-gray-400 px-4 py-2 text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value
          ? options.find((option) => option.value === value)?.label
          : placeholder}

        <KeyboardArrowDownIcon className="fill-black" />
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-fit rounded border border-gray-400 bg-white text-black">
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
      )}
    </div>
  );
};

export default SelectInput;
