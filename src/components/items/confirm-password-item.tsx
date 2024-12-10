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
  name = "password",
  label = "Нууц үг",
  placeholder = "Нууц үг",
  disabled,
  allowClear = false,
  required,
  rules: rulesProps = [],
  ...restProps
}) => {
  const rules: IFormItemProps["rules"] = [
    {
      pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/,
      message: "Том, жижиг үсэг, тоо, тэмдэгт оруулна уу.",
    },
    ...rulesProps,
  ];

  if (required) {
    rules.push({
      required: true,
      message: "Нууц үгээ заавал оруулна уу.",
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

const ConfirmPasswordItem: React.FC<TProps> = ({
  name = "confirmPassword",
  label = "Нууц үг давтан оруулах",
  placeholder = "Нууц үг",
  disabled,
  allowClear = false,
  required,
  rules: rulesProps = [],
  ...restProps
}) => {
  const rules: IFormItemProps["rules"] = [
    ...rulesProps,
    {
      required: true,
      message: "Нууц үг заавал давтан оруулна уу.",
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error("Нууц үг таарахгүй байна."));
      },
    }),
  ];

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

// Export components
export { PasswordItem, ConfirmPasswordItem };
