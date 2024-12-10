import React from "react";
import IconRadioGroup from "../radio-button";
import GiftIcon from "../icons/gift-icon";
import DonateIcon from "../icons/donate-icon";
import { Form } from "antd";

type ProjectTypeItemProps = {
  onTypeChange: (tusul_turul_ner: string) => void;
};

const ProjectTypeItem: React.FC<ProjectTypeItemProps> = ({ onTypeChange }) => {
  const [form] = Form.useForm();

  const options = [
    { label: "Урамшуулалт", value: "Урамшуулалт", icon: <GiftIcon /> },
    { label: "Хандив", value: "Хандив", icon: <DonateIcon /> },
  ];

  return (
    <Form
      form={form}
      layout="vertical"
      autoComplete="off"
      onValuesChange={(_, values) => {
        onTypeChange(values.tusul_turul_ner || "");
      }}
    >
      <Form.Item name="tusul_turul_ner" initialValue="">
        <IconRadioGroup
          options={options}
          defaultValue=""
          onChange={(value) => {
            form.setFieldsValue({ tusul_turul_ner: value });
          }}
        />
      </Form.Item>
    </Form>
  );
};

export default ProjectTypeItem;
