import React, { useEffect, useState } from "react";
import { Radio } from "antd";

interface Option {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface IconRadioGroupProps {
  options: Option[];
  defaultValue: string;
  onChange?: (value: string) => void;
}

const IconRadioGroup: React.FC<IconRadioGroupProps> = ({
  options,
  defaultValue,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  // Update selectedValue if defaultValue changes
  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Radio.Group
      value={selectedValue}
      onChange={handleChange}
      optionType="button"
    >
      {options.map((option) => (
        <Radio.Button
          key={option.value}
          value={option.value}
          className={`h-10 rounded-md transition-all mx-2 border-base-white mt-6 ${
            selectedValue === option.value
              ? "bg-gradient-to-r from-pink-normal to-secondary-normal text-base-white "
              : "border-2 border-primary-normal bg-base-white text-primary-normal"
          } enabled:hover:bg-gradient-to-r from-pink-normal to-secondary-normal`}
        >
          <div className="flex items-center gap-2 w-40">
            {option.icon}
            <span
              className={`${
                selectedValue === option.value
                  ? "text-base-white"
                  : "text-primary-normal"
              }`}
            >
              {option.label}
            </span>
          </div>
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};

export default IconRadioGroup;
