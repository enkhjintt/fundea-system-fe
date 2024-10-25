import { Select as AntdSelect, Form, Checkbox, type SelectProps } from "antd";

import { useState } from "react";

const VARIANT = {
  primary:
    "font-medium text-sm sm:text-base text-gray-800 primary-select bg-base-white",
  secondary: "font-normal text-base text-gray-900 secondary-select",
} as const;
type Variant = keyof typeof VARIANT;

const defaultPlaceholder = "Талбар сонгоно уу";

type IProps = Omit<SelectProps, "placeholder"> & {
  variant?: Variant;
  placeholder?: string;
  rounded?: boolean;
  isLabeled?: boolean;
  disabled?: boolean;
  options?: { label: string; value: string }[]; // You can define your options
};

const Select: React.FC<IProps> = ({
  variant = "primary",
  size = "middle",
  rounded = true,
  isLabeled = false,
  disabled,
  className = "",
  placeholder = defaultPlaceholder,
  popupClassName = "",
  options = [], // Pass your options here
  ...restProps
}) => {
  const { status, errors } = Form.Item.useStatus();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const variantClassName = VARIANT[variant as Variant];

  const borderClasses = `border ${rounded ? "rounded-lg" : ""} ${
    disabled
      ? "bg-base-white border-none text-gray-700 -ml-2"
      : "border-gray-300 !important"
  }`;

  const handleChange = (value: string[]) => {
    setSelectedValues(value);
    if (restProps.onChange) restProps.onChange(value);
  };

  return (
    <>
      <AntdSelect
        mode="multiple" // Enable multiple selection mode
        disabled={disabled}
        size={size}
        className={`${variantClassName} ${borderClasses} ${className} ${
          isLabeled ? "-top-1" : "-top-1"
        } h-10 w-full shadow-xs overflow-hidden aria-[invalid]:border-error-normal`}
        popupClassName={`h-fill font-normal text-shadow-lg rounded-xl border-1 border-gray-300 ${popupClassName}`}
        placeholder={
          placeholder ? (
            <span className="text-base">{placeholder}</span>
          ) : undefined
        }
        onChange={handleChange}
        value={selectedValues}
        dropdownRender={(menu) => (
          <>
            {options.map((option) => (
              <Checkbox
                key={option.value}
                checked={selectedValues.includes(option.value)}
                onChange={(e) => {
                  const value = e.target.checked
                    ? [...selectedValues, option.value]
                    : selectedValues.filter((v) => v !== option.value);
                  handleChange(value);
                }}
              >
                {option.label}
              </Checkbox>
            ))}
          </>
        )}
        {...restProps}
      />

      <ul
        id={restProps["aria-describedby"]}
        role="alert"
        className={`${isLabeled && "relative"}`}
      >
        {errors?.map((error, index) => (
          <li key={`error-${placeholder}-${index}`}>
            <div className="text-sm text-error-normal">{error}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Select;
