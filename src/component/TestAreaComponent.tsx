import React from "react";

interface TextAreaProps {
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder = "",
  label = "",
  value = "",
  onChange,
}) => {
  return (
    <div className="my-2 flex h-full w-full flex-col items-start bg-white">
      {label && (
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        className="w-full rounded border px-3 py-2 text-gray-700"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
