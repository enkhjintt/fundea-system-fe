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

const AddressItem: React.FC<TProps> = ({
  name = "address_details",
  label = "Дэлгэрэнгүй хаяг",
  placeholder = "Дэлгэрэнгүй хаягаа оруулна уу",
  disabled,
  readonly,
  allowClear = false,
  required,
  rules: rulesProps = [],
  ...restProps
}) => {
  const rules: IFormItemProps["rules"] = [...rulesProps];

  if (required) {
    rules.push({
      required: true,
      message: `Дэлгэрэнгүй хаягаа заавал оруулна уу`,
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

export default AddressItem;
