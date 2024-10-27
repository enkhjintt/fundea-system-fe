import React, { useState } from "react";
import { Col, Row } from "antd";
import Title from "./title";
import CheckboxComponent from "./checkbox";

interface CheckboxGroupProps {
  label: string;
  options: { label: string; value: string }[];
  onChange: (checkedValues: string[]) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  options,
  onChange,
}) => {
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  const handleCheckboxChange = (checked: boolean, value: string) => {
    const newValues = checked
      ? [...checkedValues, value]
      : checkedValues.filter((item) => item !== value);

    setCheckedValues(newValues);
    onChange(newValues);
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
              checked={checkedValues.includes(option.value)}
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
