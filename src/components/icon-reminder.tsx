import React from "react";
import CurrentIcon from "./icons/current-icon";

interface IconReminderProps {
  icon?: React.ReactNode;
  message: string;
  className?: string;
}

const IconReminder: React.FC<IconReminderProps> = ({
  icon = <CurrentIcon />,
  message,
  className,
}) => {
  return (
    <div className={`font-medium text-xs flex flex-row items-center gap-x-3 mt-4 ${className}`}>
      {icon} {message}
    </div>
  );
};

export default IconReminder;
