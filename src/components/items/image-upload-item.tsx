import { RcFile } from "antd/es/upload";
import type { UploadProps } from "antd/lib";
import Upload from "../upload";
import FormItem, { type IFormItemProps } from "./form-item";
import { useNotification } from "@/hooks/use-notification";

type IProps = IFormItemProps & {
  name?: string;
  disabled?: boolean;
  value?: {
    file: RcFile | any;
    fileList: UploadProps["fileList"];
  };
};

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const UploadImageItem: React.FC<IProps> = ({
  name = "upload",
  value,
  disabled = false,
  required,
  rules: rulesProps = [],
  ...restProps
}) => {
  const { info } = useNotification();

  const rules: IFormItemProps["rules"] = [
    {
      validator: (_, value) => {
        if (!value || value.length < 1) {
          return Promise.resolve();
        }

        const isJpgOrPng =
          value[0].type === "image/jpeg" ||
          value[0].type === "image/jpg" ||
          value[0].type === "image/png" ||
          value[0].type === "image/gif";

        const fileSizeInMB = value[0].size / (1024 * 1024);
        const isLt8M = fileSizeInMB < 8.5;

        if (!isJpgOrPng) {
          return Promise.reject(
            new Error(
              "Зургийн өргөтгөл *.jpeg, *.jpg, *.png, *.gif байх ёстой!"
            )
          );
        } else if (!isLt8M) {
          info("8.5MB-аас доош хэмжээтэй зураг оруулна уу!");

          return Promise.reject(
            new Error("8.5MB-аас доош хэмжээтэй зураг оруулна уу!")
          );
        } else {
          return Promise.resolve();
        }
      },
    },
    ...rulesProps,
  ];

  if (required) {
    rules.push({
      required: true,
      message: "Заавал зургаа оруулна уу",
    });
  }

  return (
    <FormItem
      name={name}
      valuePropName="fileList"
      getValueFromEvent={normFile}
      required={required}
      rules={rules}
      {...restProps}
    >
      <Upload
        value={value}
        disabled={disabled}
        accept="image/png, image/jpg, image/jpeg, image/gif"
      />
    </FormItem>
  );
};

export default UploadImageItem;
