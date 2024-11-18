import { Input as AntdInput, Form, type InputProps } from "antd";
import AlertCircleIcon from "./icons/alert-circle-icon";
import LoadingIcon from "./icons/loading-icon";

const VARIANT = {
  none: "border-2 border-primary-normal",
  primary: "",
} as const;

type Variant = keyof typeof VARIANT;
const defaultPlaceholder = "Талбар бөглөнө үү";

type IProps = Omit<InputProps, "size"> & {
  variant?: Variant;
  loading?: boolean;
  rounded?: boolean;
  isLabeled?: boolean;
  size?: "sm" | "md" | "lg" | "fit";
};

const Input: React.FC<IProps> = ({
  variant = "primary",
  placeholder = defaultPlaceholder,
  isLabeled = false,
  prefix,
  loading = false,
  disabled,
  rounded = true,
  size = "fit",
  className,
  ...restProps
}) => {
  const { status, errors } = Form.Item.useStatus();

  const heightClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
    fit: "h-fit",
  };

  const heightClass = heightClasses[size] || "h-fit";

  return (
    <>
      <AntdInput
        disabled={disabled}
        prefix={loading ? <LoadingIcon /> : prefix}
        placeholder={placeholder ? placeholder : undefined}
        classNames={{
          input: `font-normal text-sm leading-6`,
          prefix: "mr-2",
          suffix: "ml-2",
        }}
        className={`${className} ${
          isLabeled && "relative -top-5"
        } py-2 px-3 w-full ${heightClass} ${
          variant !== "none"
            ? status === "error"
              ? "border-2 border-primary-normal"
              : "border-2 border-gray-100"
            : "border-none"
        } ${!isLabeled && "-top-1"} ${disabled && "bg-gray-100"}`}
        rootClassName={``}
        suffix={
          <span className={status === "error" ? "inline" : "hidden"}>
            <AlertCircleIcon />
          </span>
        }
        {...restProps}
      />

      {errors.length !== 0 && (
        <ul
          id={restProps["aria-describedby"]}
          role="alert"
          className={`flex flex-wrap max-w-full w-full ${
            isLabeled ? "relative" : ""
          } break-all`}
        >
          {errors.map((error, index) => (
            <li key={`error-${placeholder}-${index}`} className="mr-2 ">
              <div className="text-sm text-primary-normal tracking-wide">
                {error}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Input;
