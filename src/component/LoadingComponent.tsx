import React from "react";
import { LoadingIcon } from "./CustomIconComponents";

interface LoadingProps {
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({ text = "Loading Chats..." }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="animate-spin ">
        <LoadingIcon />
      </div>
      <div className="text-lg font-medium text-black">{text}</div>
    </div>
  );
};

export default Loading;
