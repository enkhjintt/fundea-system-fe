import React from "react";
import GiftIcon from "./icons/gift-icon";

interface IconCardItemProps {
  icon?: React.ReactNode;
  message: string;
  className?: string;
}

const IconCardItem: React.FC<IconCardItemProps> = ({
  icon = <GiftIcon />,
  message,
  className,
}) => {
  return (
    <div
      className={`text-base leading-5 font-normal w-full h-50 rounded-lg border border-gray-300 p-4 flex flex-col items-center justify-center space-y-2 text-center text-gray-700 transition-all duration-300 
        hover:text-base-white hover:bg-gradient-to-r from-primary-normal to-secondary-normal ${className}`}
    >
      {icon}
      <p>{message}</p>
    </div>
  );
};

export default IconCardItem;
