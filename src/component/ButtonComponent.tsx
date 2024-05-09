import React from "react";

interface AppButtonProps {
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  color?: "primary" | "secondary" | "white" | "accent" | "default" | "danger";
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
  rounded?: string;
}

const AppButton: React.FC<AppButtonProps> = ({
  label,
  onClick,
  startIcon,
  endIcon,
  color = "default",
  disabled = false,
  type = "button",
  className,
  rounded = "rounded-md",
}) => {
  let buttonColorClass = "";

  switch (color) {
    case "primary":
      buttonColorClass =
        "bg-PriBlue hover:bg-blue-400 active:bg-PriBlue text-white";
      break;
    case "secondary":
      buttonColorClass =
        "bg-IndOrange hover:bg-orange-500 active:bg-IndOrange text-white";
      break;

    case "white":
      buttonColorClass =
        "bg-PriWhite hover:bg-gray-200 active:bg-PriWhite text-black";
      break;

    case "accent":
      buttonColorClass =
        "bg-IndPurple hover:bg-purple-500 active:bg-IndPurple text-white";
      break;
    case "danger":
      buttonColorClass =
        "bg-IndRed hover:bg-red-500 active:bg-IndRed text-white";
      break;
    default:
      buttonColorClass =
        "bg-white hover:bg-gray-100 active:bg-gray-100 text-gray-700";
      break;
  }

  return (
    <button
      className={`flex w-fit items-center justify-center  ${rounded}  p-2 ${buttonColorClass} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {startIcon && <span>{startIcon}</span>}
      {label && <span className="mx-2">{label}</span>}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};

export default AppButton;
