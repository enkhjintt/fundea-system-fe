import Input from "../input";
import FormItem, { type IFormItemProps } from "./form-item";

type TProps = Omit<IFormItemProps, "label"> & {
  label?: string;
  name?: string;
  placeholder?: string;
  allowClear?: boolean;
  disabled?: boolean;
  readonly?: boolean;
};

const PhoneItem: React.FC<TProps> = ({
  name = "phone",
  label = "Утасны дугаар",
  placeholder = "Утасны дугаараа оруулна уу",
  disabled,
  readonly,
  allowClear = false,
  required,
  rules: rulesProps = [],
  ...restProps
}) => {
  const rules: IFormItemProps["rules"] = [
    {
      pattern: /^\d{8}$/,
      message: "Утасны дугаарыг зөв форматаар оруулна уу",
    },
    ...rulesProps,
  ];

  if (required) {
    rules.push({
      required: true,
      message: `Утасны дугаараа заавал оруулна уу`,
    });
  }

  return (
    <FormItem
      name={name}
      label={label}
      required={required}
      rules={rules}
      {...restProps}
    >
      <Input
        maxLength={8}
        readOnly={readonly}
        disabled={disabled}
        placeholder={placeholder}
        allowClear={allowClear}
      />
    </FormItem>
  );
};

export default PhoneItem;
