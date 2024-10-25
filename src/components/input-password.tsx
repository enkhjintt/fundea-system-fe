import { Input as AntdInput, Form, type InputProps } from "antd";

import LoadingIcon from "./icons/loading-icon";
import AlertCircleIcon from "./icons/alert-circle-icon";

const VARIANT = {
  none: "",
  primary: "",
} as const;

type Variant = keyof typeof VARIANT;
const defualtPlaceholder = "Нууц үгээ оруулна уу";

type TProps = Omit<InputProps, "size"> & {
  variant?: Variant;
  loading?: boolean;
  rounded?: boolean;
  isLabeled?: boolean;
  size?: string;
};

const PasswordInput: React.FC<TProps> = ({
  variant = "primary",
  placeholder = defualtPlaceholder,
  isLabeled = false,
  prefix,
  loading = false,
  disabled,
  rounded = true,
  size = "md",
  className,
  ...restProps
}) => {
  const { status, errors } = Form.Item.useStatus();

  return (
    <>
      <AntdInput.Password
        disabled={disabled}
        prefix={loading ? <LoadingIcon /> : prefix}
        placeholder={placeholder ? placeholder : undefined}
        classNames={{
          input: `font-normal text-sm sm:text-base leading-6 text-gray-800 `,
          prefix: "mr-2",
          suffix: "ml-2",
        }}
        className={`${className} ${
          isLabeled && "absolute -top-5 dark:bg-gray-100"
        } py-2 px-3 w-full h-fit border ${
          variant !== "none"
            ? status === "error"
              ? "border border-b-primary-normal"
              : "border border-gray-300 "
            : ""
        } ${!isLabeled && "-top-1"}  ${disabled && "bg-gray-100"}`}
        rootClassName={``}
        suffix={
          <span className={status === "error" ? "inline" : "hidden"}>
            <AlertCircleIcon />
          </span>
        }
        {...restProps}
      />

      <ul
        id={restProps["aria-describedby"]}
        role="alert"
        className={`${
          isLabeled ? "absolute mt-5" : "mt-2"
        } flex-wrap max-w-full w-full break-all`}
      >
        {errors.map((error, index) => (
          <li key={`error-${placeholder}-${index} mr-2`}>
            <div className="text-sm text-primary-normal">{error}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PasswordInput;
