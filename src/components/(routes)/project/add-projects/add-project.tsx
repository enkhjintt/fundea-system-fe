"use client";

import React, { useState } from "react";
import { Form, UploadFile } from "antd";
import { useRouter } from "next/navigation";
import { useNotification } from "@/hooks/use-notification";
import StepNavigator from "@/components/steps";
import Title from "@/components/title";
import InputItem from "@/components/items/input-item";
import NameItem from "@/components/items/name-item";
import { CreateProject } from "@/api/projects";
import SelectProjectTypeItem from "@/components/items/project-type-select-item";
import SelectProjectClassItem from "@/components/items/project-class-select-item";

type StepContent = {
  title: string;
  content: React.ReactNode;
};

type IProps = {};
type IFormItem = {
  garchig: string;
  ded_garchig: string;
  sanhuujiltiin_dun: number;
  ersdel: string;
  tuuh: string;
  delgerengui: string;
  hereglegch_id: number;
  tusul_turul_id: number;
  tusul_angilal_id: number;
  uilchilgeenii_huraamj_id: number;
  aimag_code: string;
  sum_code: string;
  horoo_code: string;
  zurag: UploadFile[];
};

const AddProjectForm: React.FC<IProps> = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const { success, error } = useNotification();
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // Format to yyyy-mm-dd
  };
  const handleSubmit = async (values: IFormItem) => {
    setLoading(true);
    ("");

    const formData = new FormData();

    // for (const [key, value] of Object.entries(values)) {
    //   if (value?.[0].originFileObj) {
    //     formData.append("image", value[0].originFileObj);
    //   }
    // }

    const response = await CreateProject(formData);

    setLoading(false);

    if (response.success) {
      success("Төсөл амжилттай илгээгдлээ!");
      router.push("/home");
      form.resetFields();
    } else {
      error(response.error.message);
    }
  };

  const steps: StepContent[] = [
    {
      title: "",
      content: (
        <>
          <Title level={2} title="Төслийн ерөнхий мэдээлэл" />
          <div className="grid grid-cols-1 gap-x-4 w-full ">
            <InputItem name="garchig" label="Гарчиг" />
            <InputItem name="ded_garchig" label="Дэд гарчиг" />
            <SelectProjectTypeItem />
            <SelectProjectClassItem />
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
