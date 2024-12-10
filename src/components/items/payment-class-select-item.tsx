import { useProjectClass } from "@/hooks/use-project-class";
import Select from "../select";
import FormItem, { type IFormItemProps } from "./form-item";
import { usePaymentType } from "@/hooks/use-payment-type";

type IProps = Omit<IFormItemProps, "label"> & {
  disabled?: boolean;
  isFull?: boolean;
  label?: string;
  readonly?: boolean;
  placeholder?: string;
  onChange?: (value: number) => void;
  className?: string;
  allowClear?: boolean;
};

const SelectPaymentTypeItem: React.FC<IProps> = ({
  name = "tulbur_helber_id",
  label = "Төлбөрийн төрөл",
  disabled,
  className = "w-full",
  placeholder = "Төлбөрийн төрөл сонгоно уу",
  readonly,
  isFull = true,
  allowClear,
  required,
  onChange,
  rules: rulesProps = [],
  ...restProps
}) => {
  const { data: types, isLoading } = usePaymentType();
  const typeItems = types?.items || [];

  const rules: IFormItemProps["rules"] = [...rulesProps];

  if (required) {
    rules.push({
      required: true,
      message: `Төлбөрийн төрөл заавал сонгоно уу`,
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
      <Select
        loading={isLoading}
        allowClear={allowClear}
        popupClassName={`${readonly && "hidden"}`}
        isLabeled={isFull}
        disabled={disabled}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        options={typeItems.map((type) => ({
          value: type.id,
          label: type.tulbur_helber_ner,
        }))}
      />
    </FormItem>
  );
};

export default SelectPaymentTypeItem;
