import React from "react";
import GiftIcon from "./icons/gift-icon";

interface IconReminderProps {
  icon?: React.ReactNode;
  message: string;
  className?: string;
}

const IconReminder: React.FC<IconReminderProps> = ({
  icon = <GiftIcon />,
  message,
  className,
}) => {
  return (
    <div className={`font-medium text-xs flex flex-row items-center gap-x-3 mt-3 ${className}`}>
      {icon} {message}
    </div>
  );
};

export default IconReminder;
