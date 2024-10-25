import React, { useState } from "react";
import { Radio } from "antd";

interface Option {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface IconRadioGroupProps {
  options: Option[];
  defaultValue: string;
}

const IconRadioGroup: React.FC<IconRadioGroupProps> = ({
  options,
  defaultValue,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleChange = (e: any) => {
    setSelectedValue(e.target.value);
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
          className={`h-10 rounded-md transition-all mx-2 border-base-white ${
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
