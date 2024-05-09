import React from "react";

interface DateInputProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
  type?: "date" | "time";
}

const DateInput: React.FC<DateInputProps> = ({
  label,
  value,
  onChange,
  type = "date",
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="mb-4">
      <label
        className="mb-2 block text-sm font-bold text-gray-700"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default DateInput;
