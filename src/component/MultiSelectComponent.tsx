import React, { useState } from "react";

interface MultiSelectProps {
  options?: { value: string; color: string }[];
}

const dataOptions = [
  { value: "Important ASAP", color: "#E9F3FF" },
  { value: "Offline Meeting", color: "#FDCFA4" },
  { value: "Virtual Meeting", color: "#F9E9C3" },
  { value: "ASAP", color: "#F9E9C3" },
  { value: "Client Related", color: "#AFEBDB" },
  { value: "Self Task", color: "#CBF1C2" },
  { value: "Appointments", color: "#CFCEF9" },
  { value: "Court Related", color: "#F9E0FD" },
];

const MultiSelect = ({ options }: MultiSelectProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="relative">
      <div className="flex w-full items-center justify-between p-2">
        {selectedOptions.length > 0 ? (
          selectedOptions.map((option, index) => (
            <div
              key={index}
              className="text-PriGray mr-2 rounded-md px-2 py-1 text-xs"
              style={{
                backgroundColor: dataOptions.find((o) => o.value === option)
                  ?.color,
              }}
              onClick={() => toggleOption(option)}
            >
              {option}
            </div>
          ))
        ) : (
          <div className="w-full text-gray-500">Select options any</div>
        )}
      </div>
      <div className="absolute left-0 top-full mt-1 w-full rounded-md border border-gray-300 bg-white">
        {options?.map((option, index) => (
          <div
            key={index}
            className={`active:border-PriBlue m-2 cursor-pointer rounded-md p-2 hover:bg-gray-100`}
            style={{ backgroundColor: option.color }}
            onClick={() => toggleOption(option.value)}
          >
            {option.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelect;
