"use client";

import React, { useState } from "react";
import { Form } from "antd";
import { useRouter } from "next/navigation";
import { useNotification } from "@/hooks/use-notification";
import Title from "@/components/title";
import InputItem from "@/components/items/input-item";
import { CreateProject } from "@/api/projects";
import SelectProjectTypeItem from "@/components/items/project-type-select-item";
import SelectProjectClassItem from "@/components/items/project-class-select-item";
import AimagCityItem from "@/components/items/aimag-select-item";
import DistrictItem from "@/components/items/sum-select-item";
import SelectKhorooItem from "@/components/items/khoroo-select-item";
import SelectProjectFeeItem from "@/components/items/project-fee-select-item";
import InputNumberItem from "@/components/items/input-number-item";
import TextAreaItem from "@/components/items/input-text-area-item";
import Wrapper from "@/components/wrapper";
import Button from "@/components/button";

type IProps = {};
type IFormItem = {
  garchig: string;
  ded_garchig: string;
  sanhuujiltiin_dun: number;
  ersdel: string;
  tuuh: string;
  delgerengui: string;
  tusul_turul_id: number;
  tusul_angilal_id: number;
  uilchilgeenii_huraamj_id: number;
  aimag_code: string;
  sum_code: string;
  horoo_code: string;
  zurag: File | null; // File object
  cover_zurag: File | null; // Single string for the cover image path
};

const AddProjectForm: React.FC<IProps> = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { success, error } = useNotification();
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [projectImage, setProjectImage] = useState<File | null>(null);

  const handleAimagChange = () => {
    form.setFieldValue("sum_code", null);
    form.setFieldValue("horoo_code", null);
  };

  const handleDistrictChange = () => {
    form.setFieldValue("horoo_code", null);
  };

  // Function to handle image upload
  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setImagePath: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePath(file); // Store file object directly
    }
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);

    try {
      // Create FormData instance
      const formData = new FormData();
      formData.append("garchig", values.garchig);
      formData.append("ded_garchig", values.ded_garchig);
      formData.append("tusul_angilal_id", values.tusul_angilal_id.toString());
      formData.append("aimag_code", values.aimag_code);
      formData.append("sum_code", values.sum_code || "1");
      formData.append("horoo_code", values.horoo_code || "");
      formData.append("delgerengui", values.delgerengui);
      formData.append("ersdel", values.ersdel);
      formData.append("tuuh", values.tuuh);
      formData.append("tusul_turul_id", values.tusul_turul_id.toString());
      formData.append("uilchilgeenii_huraamj_id", values.uilchilgeeni_huraamj_id.toString());
      formData.append("sanhuujiltiin_dun", values.sanhuujiltiin_dun.toString());
      if (coverImage) {
        formData.append("cover_zurag", coverImage); // Append file, not path
      }
  
      if (projectImage) {
        formData.append("zurag", projectImage); // Append file, not path
      }


      // Send the form data
      const response = await CreateProject(formData);

      if (response.success) {
        success("Төсөл амжилттай илгээгдлээ!");
        router.push("/home");
        form.resetFields();
      } else {
        throw new Error("Алдаа гарлаа!");
      }
    } catch (err: any) {
      error(err.message || "Алдаа гарлаа!");
    } finally {
      setLoading(false);
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
      <Wrapper className="px-20">
        <>
          <Title level={2} title="Төслийн ерөнхий мэдээлэл" />
          <div className="grid grid-cols-1 gap-x-4 w-full">
            <InputItem name="garchig" label="Гарчиг" required />
            <InputItem name="ded_garchig" label="Дэд гарчиг" required />
            <SelectProjectClassItem required />
            {/* Cover Image Upload */}
            <div>
              <label>Cover Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, setCoverImage)}
              />
              {coverImage && <p>Uploaded Cover Image: {coverImage.name}</p>}
            </div>
            {/* Single Project Image Upload */}
            <div>
              <label>Project Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, setProjectImage)}
              />
              {projectImage && <p>Uploaded Project Image: {projectImage.name}</p>}
            </div>
            <div className="grid grid-cols-3 gap-x-4 w-full h-full">
              <AimagCityItem allowClear onChange={handleAimagChange} required />
              {form.getFieldValue("aimag_code") ? (
                <DistrictItem
                  allowClear
                  onChange={handleDistrictChange}
                  aimagId={form.getFieldValue("aimag_code")}
                  required
                />
              ) : (
                <DistrictItem />
              )}
              {form.getFieldValue("sum_code") && form.getFieldValue("aimag_code") ? (
                <SelectKhorooItem
                  allowClear
                  name={"horoo_code"}
                  sum={form.getFieldValue("sum_code")}
                  aimag={form.getFieldValue("aimag_code")}
                />
              ) : (
                <SelectKhorooItem name={"horoo_code"} />
              )}
            </div>
          </div>
          <Title level={2} title="Төслийн дэлгэрэнгүй мэдээлэл" />
          <div className="grid grid-cols-1 gap-4 w-full">
            <TextAreaItem
              maxLength={1000}
              label="Төслийн дэлгэрэнгүй"
              name="delgerengui"
              showCounter={true}
              required
            />
            <TextAreaItem
              maxLength={1000}
              label="Төслийн эрсдэл"
              name={"ersdel"}
              showCounter={true}
              required
            />
            <TextAreaItem
              maxLength={1000}
              label="Төслийн түүх"
              name={"tuuh"}
              required
              showCounter={true}
            />
          </div>
          <Title level={2} title="Төслийн санхүүжилтын мэдээлэл" />
          <SelectProjectTypeItem required />
          <SelectProjectFeeItem required />
          <InputNumberItem
            name={"sanhuujiltiin_dun"}
            required
            label="Санхүүжилтын дүн"
            maxLength={8}
          />
        </>
        <div className="flex gap-5 justify-end">
          <Button
            disabled={loading}
            placeholder="Болих"
            padding="double"
            variant="text"
            className="rounded-2xl"
            onClick={() => router.replace("/project")}
          />

          <Button
            disabled={loading}
            variant="primary"
            padding="double"
            htmlType="submit"
            placeholder="Хадгалах"
            className="rounded-2xl"
            onClick={() => form.submit()} // Programmatically triggers form submission

          />
        </div>
      </Wrapper>
    </Form>
  );
};

export default AddProjectForm;
