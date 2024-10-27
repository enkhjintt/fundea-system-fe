import React from "react";
import CheckIcon from "./icons/check-icon";

interface CheckboxComponentProps {
  label: string;
  value: string;
  checked?: boolean;
  onChange: (checked: boolean, value: string) => void;
  className?: string;
}

const CheckboxComponent: React.FC<CheckboxComponentProps> = ({
  label,
  value,
  checked = false,
  onChange,
  className = "",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked, value);
  };

  return (
    <label className={`flex items-center space-x-2 ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="hidden" // hide default checkbox
      />
      <span
        className={`w-5 h-5 flex items-center justify-center border-2 rounded ${
          checked
            ? "bg-primary-normal border-primary-normal"
            : "border-gray-300"
        }`}
      >
        {checked && <CheckIcon />}
      </span>
      <span className="text-gray-600">{label}</span>
    </label>
  );
};

export default CheckboxComponent;
