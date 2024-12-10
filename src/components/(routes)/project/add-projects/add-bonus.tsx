"use client";

import { Form } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Button from "@/components/button";
import NameItem from "@/components/items/name-item";
import Title from "@/components/title";
import Wrapper from "@/components/wrapper";
import { useNotification } from "@/hooks/use-notification";
import ChevronLeftIcon from "@/components/icons/chevron-left-icon";
import { BonusResponse, CreateBonus } from "@/api/projects/bonus";
import TextAreaItem from "@/components/items/input-text-area-item";
import InputNumberItem from "@/components/items/input-number-item";

type IProps = {};

const AddBonusForm: React.FC<IProps> = ({}) => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const { success, error } = useNotification();

  const handleSubmit = async (values: BonusResponse) => {
    setLoading(true);

    const response = await CreateBonus(values);

    setLoading(false);

    if (response.success) {
      success("Урамшуулал амжилттай нэмлээ!");
    } else {
      error(response.error.message);
    }
  };

  return (
    <Form
      form={form}
      disabled={loading}
      layout="vertical"
      requiredMark={false}
      autoComplete="off"
      className="flex flex-col gap-4"
      onFinish={handleSubmit}
    >
      <Button
        icon={<ChevronLeftIcon />}
        disabled={loading}
        placeholder="Буцах"
        variant="icon"
        onClick={() => router.back()}
      />
      <Wrapper className="px-10 py-6 w-full">
        <Title level={2} title="Урамшуулалын ерөнхий мэдээлэл" />

        <div className="grid grid-cols-1 gap-x-4 w-full h-full pl-4">
          <NameItem name={"ner"} required label="Урамшуулалын нэр" />
          <InputNumberItem name="dun" />
        </div>
        <TextAreaItem
          maxLength={255}
          label="Тайлбар"
          name="tailbar"
          showCounter={true}
          required
        />

        <div className="mt-10 mb-5 flex gap-5 justify-end">
          <Button
            padding="double"
            disabled={loading}
            placeholder="Болих"
            variant="text"
            className="rounded-2xl"
            onClick={() => router.push("/information/device")}
          />

          <Button
            disabled={loading}
            variant="primary"
            htmlType="submit"
            padding="double"
            placeholder="Хадгалах"
          />
        </div>
      </Wrapper>
    </Form>
  );
};

export default AddBonusForm;
