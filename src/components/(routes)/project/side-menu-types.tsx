"use client";

import CheckboxGroup from "@/components/group-checkbox";
import { useProjectClass } from "@/hooks/use-project-class";
import { Form } from "antd";
import { useState, useEffect } from "react";

type IProps = {
  onClassChange: (tusul_angilal_ner: string) => void;
  onStatusChange: (tusul_angilal_ner: string) => void;
};

const SideMenu: React.FC<IProps> = ({ onClassChange, onStatusChange }) => {
  const [form] = Form.useForm();
  const { data, mutate, isLoading } = useProjectClass();
  const [options, setOptions] = useState<{ label: string; value: string }[]>(
    []
  );

  // Handle checkbox change
  const handleCheckboxChange = (checkedValues: string[]) => {
    console.log("Checked values:", checkedValues);
  };

  useEffect(() => {
    if (data && data.items && data.items.length > 0) {
      const newOptions = data.items.map((item) => ({
        label: item.ner,
        value: item.ner,
      }));
      setOptions(newOptions);
    }
  }, [data]);

  const statusOptions = [
    { label: "Шинээр үүссэн", value: "Зөвшөөрсөн" },
    { label: "Хугацаа дууссан (Амжилттай)", value: "Хэрэгжсэн" },
    { label: "Хугацаа дууссан (Амжилтгүй)", value: "Амжилтгүй" },
  ];

  const percentageOptions = [
    { label: "50%", value: "1" },
    { label: "50-75%", value: "2" },
    { label: "75-100%", value: "3" },
  ];

  const customerOptions = [
    { label: "Хувь хүн", value: "1" },
    { label: "Байгууллага", value: "2" },
  ];

  // Show loading state while data is being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Form
      form={form}
      layout="vertical"
      autoComplete="off"
      onValuesChange={(_, values) => {
        onClassChange(values.tusul_angilal_ner || "");
        onStatusChange(values.tusul_tuluv_ner || "");
      }}
    >
      <Form.Item name="tusul_angilal_ner" initialValue="">
        <CheckboxGroup
          label="Ангилал"
          options={options}
          onChange={handleCheckboxChange}
        />
      </Form.Item>
      <Form.Item name="tusul_tuluv_ner" initialValue="">
        <CheckboxGroup
          label="Төслийн төлөв"
          options={statusOptions}
          onChange={handleCheckboxChange}
        />
      </Form.Item>
      <CheckboxGroup
        label="Санхүүжилтийн хувь"
        options={percentageOptions}
        onChange={handleCheckboxChange}
      />
      <CheckboxGroup
        label="Төсөл үүсгэгч төрөл"
        options={customerOptions}
        onChange={handleCheckboxChange}
      />
    </Form>
  );
};

export default SideMenu;
