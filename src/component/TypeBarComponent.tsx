import React from "react";

interface TextInputProps {
  type?: string;
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  type = "text",
  placeholder = "",
  label = "",
  value = "",
  onChange,
}) => {
  return (
    <div className=" my-2 flex h-full w-full items-center bg-white">
      {label && (
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className=" w-full rounded border px-3 py-2 text-gray-700 "
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
