import Input from "../input";
import FormItem, { type IFormItemProps } from "../form-item";

type TProps = Omit<IFormItemProps, "label"> & {
  label?: string;
  name?: string;
  placeholder?: string;
  allowClear?: boolean;
  disabled?: boolean;
  readonly?: boolean;
};

const EmailItem: React.FC<TProps> = ({
  name = "email",
  label = "Имэйл хаяг",
  placeholder = "Имэйл хаягаа оруулна уу",
  disabled,
  allowClear = false,
  required,
  readonly,
  rules: rulesProps = [],
  ...restProps
}) => {
  const rules: IFormItemProps["rules"] = [
    {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "И-мэйл хаягийг зөв форматаар оруулна уу",
    },
    ...rulesProps,
  ];

  if (required) {
    rules.push({
      required: true,
      message: `${label} хаягаа заавал оруулна уу`,
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
        readOnly={readonly}
        disabled={disabled}
        placeholder={placeholder}
        allowClear={allowClear}
      />
    </FormItem>
  );
};

export default EmailItem;
