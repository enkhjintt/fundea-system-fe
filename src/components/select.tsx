import { Select as AntdSelect, Form, type SelectProps } from "antd";
import ChevronDownIcon from "./icons/chevron-down-icon";

const VARIANT = {
  primary:
    "font-medium text-sm text-gray-600 primary-select bg-base-white",
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
  ...restProps
}) => {
  const { status, errors } = Form.Item.useStatus();

  const variantClassName = VARIANT[variant as Variant];

  const borderClasses = `border-2 ${rounded ? "rounded-lg" : ""} ${
    disabled
      ? "bg-base-white border-none text-gray-700 -ml-2"
      : "border-gray-100 !important"
  }`;

  return (
    <>
      <AntdSelect
        disabled={disabled}
        size={size}
        className={`${variantClassName} ${borderClasses} ${className} ${
          isLabeled ? "-top-1" : "-top-1"
        } h-11 w-full overflow-hidden  aria-[invalid]:border-error-normal `}
        suffixIcon={
          !disabled ? (
            <ChevronDownIcon
              className={`fill-gray-100 ${disabled ? "fill-base-white" : ""}`}
            />
          ) : null
        }
        popupClassName={`h-fill font-normal text-shadow-lg rounded-xl  ${popupClassName}`}
        placeholder={
          placeholder ? (
            <span className="text-sm">{placeholder}</span>
          ) : undefined
        }
        {...restProps}
      />

      <ul
        id={restProps["aria-describedby"]}
        role="alert"
        className={`${isLabeled && "relative"}`}
      >
        {errors.map((error, index) => (
          <li key={`error-${placeholder}-${index}`}>
            <div className="text-sm text-error-normal">{error}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Select;
