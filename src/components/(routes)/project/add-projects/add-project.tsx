"use client";

import React, { useState } from "react";
import { Form } from "antd";
import { useRouter } from "next/navigation";
import { useNotification } from "@/hooks/use-notification";
import StepNavigator from "@/components/steps";
import Title from "@/components/title";
import InputItem from "@/components/items/input-item";
import NameItem from "@/components/items/name-item";

type StepContent = {
  title: string;
  content: React.ReactNode;
};

type IProps = {};

const AddProjectForm: React.FC<IProps> = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const { success, error } = useNotification();

  function handleSubmit(values: any): void {
    throw new Error("Function not implemented.");
  }

  const steps: StepContent[] = [
    {
      title: "",
      content: (
        <>
          <Title level={2} title="Төслийн ерөнхий мэдээлэл" />
          <div className="grid grid-cols-1 gap-x-4 w-full ">
            <InputItem name="title" label="Гарчиг" />
            <InputItem name="subtitle" label="Дэд гарчиг" />
            <InputItem name="type" label="Ангилал" />

            {/* <TextArea/> */}
          </div>
        </>
      ),
    },
    {
      title: "",
      content: (
        <>
          <Title level={2} title="Төслийн дэлгэрэнгүй мэдээлэл" />
          <div className="grid grid-cols-2 gap-4 w-full">
            <InputItem name="project_name" />
            <NameItem />
          </div>
        </>
      ),
    },
    {
      title: "",
      content: (
        <>
          <Title level={2} title="Төслийн санхүүжилтын мэдээлэл" />
          <div className="grid grid-cols-2 gap-4 w-full ">
            <InputItem name="project_name" />
            <NameItem />
          </div>
        </>
      ),
    },
  ];

  const handleComplete = () => {
    console.log("All steps completed!");
    success("Project added successfully!");
    router.push("/projects"); // Redirect to projects page after completion
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
      <StepNavigator steps={steps} onComplete={handleComplete} />
    </Form>
  );
};

export default AddProjectForm;
