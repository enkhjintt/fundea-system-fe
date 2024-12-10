import React, { useState } from "react";
import { Col, Row } from "antd";
import Title from "./title";
import CheckboxComponent from "./checkbox";

interface CheckboxGroupProps {
  label: string;
  options: { label: string; value: string }[];
  onChange: (checkedValue: string | null) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  options,
  onChange,
}) => {
  const [checkedValue, setCheckedValue] = useState<string | null>(null);

  const handleCheckboxChange = (checked: boolean, value: string) => {
    const newValue = checked ? value : null;
    setCheckedValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="w-full py-2">
      <Title level={2} title={label} />
      <Row>
        {options.map((option) => (
          <Col span={24} key={option.value} className="mb-2">
            <CheckboxComponent
              label={option.label}
              value={option.value}
              checked={checkedValue === option.value}
              className="text-gray-600 transition-colors duration-200 hover:text-primary-normal"
              onChange={handleCheckboxChange}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CheckboxGroup;
