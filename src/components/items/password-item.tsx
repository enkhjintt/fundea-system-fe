import PasswordInput from "../input-password";
import FormItem, { type IFormItemProps } from "../form-item";

type TProps = Omit<IFormItemProps, "label"> & {
  label?: string;
  name?: string;
  placeholder?: string;
  allowClear?: boolean;
  disabled?: boolean;
};

const PasswordItem: React.FC<TProps> = ({
  name = "passsword",
  label = "Нууц үг",
  placeholder = "Нууц үгээ оруулна уу",
  disabled,
  allowClear = false,
  required,
  rules: rulesProps = [],
  ...restProps
}) => {
  const rules: IFormItemProps["rules"] = [
    {
      pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/,
      message: "Том, жижиг үсэг, тоо, тэмдэгт оруулна уу",
    },
    ...rulesProps,
  ];

  if (required) {
    rules.push({
      required: true,
      message: `Нууц үгээ заавал оруулна уу`,
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
      <PasswordInput
        disabled={disabled}
        placeholder={placeholder}
        allowClear={allowClear}
      />
    </FormItem>
  );
};

export default PasswordItem;
