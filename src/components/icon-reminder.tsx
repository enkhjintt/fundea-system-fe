import React from "react";

interface IconReminderProps {
  icon?: React.ReactNode; // Accept any valid React node as the icon
  message: string;
  iconClassName?: string; // Custom styles for the icon
  messageClassName?: string; // Custom styles for the message
}

const IconReminder: React.FC<IconReminderProps> = ({
  icon, // Accepts custom icon
  message,
  iconClassName = "", // Default empty class for icon
  messageClassName = "", // Default empty class for message
}) => {
  return (
    <div className={`font-medium text-xs flex flex-row items-center gap-x-1 mt-2`}>
      <span className={`${iconClassName}`}>{icon}</span> {/* Render passed icon */}
      <span className={`${messageClassName}`}>{message}</span> {/* Render message */}
    </div>
  );
};

export default IconReminder;
