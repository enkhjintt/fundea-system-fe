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
  zurag: File | null;
  cover_zurag: File | null;
};

const AddProjectForm: React.FC<IProps> = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { success, error } = useNotification();
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [projectImage, setProjectImage] = useState<File | null>(null);
  const values = Form.useWatch([], form);
  const handleAimagChange = () => {
    form.setFieldValue("sum_code", undefined);
    form.setFieldValue("horoo_code", undefined);
  };

  const handleDistrictChange = () => {
    form.setFieldValue("horoo_code", undefined);
  };

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
      formData.append(
        "uilchilgeenii_huraamj_id",
        values.uilchilgeeni_huraamj_id.toString()
      );
      formData.append("sanhuujiltiin_dun", values.sanhuujiltiin_dun.toString());
      if (coverImage) {
        formData.append("cover_zurag", coverImage);
      }

      if (projectImage) {
        formData.append("zurag", projectImage);
      }

      const createResponse = await CreateProject(formData);

      if (createResponse.success) {
        const projectId = createResponse.data?.tusul_id?.id;

        if (projectId) {
          success("Төсөл амжилттай илгээгдлээ!");
          router.push(`/bonus/add?tusulId=${projectId}`); // Pass tusul_id in the URL
        } else {
          error("Төслийн ID-г авахад алдаа гарлаа!");
        }
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
      onFinish={handleSubmit}
    >
      <Wrapper className="px-20 py-10">
        <>
          <Title level={2} title="Төслийн ерөнхий мэдээлэл" />
          <div className="grid grid-cols-1 gap-x-4 w-full">
            <InputItem name="garchig" label="Гарчиг" required />
            <InputItem name="ded_garchig" label="Дэд гарчиг" required />
            <SelectProjectClassItem required />

            <div>
              <label>Cover Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, setCoverImage)}
              />
              {coverImage && <p>Uploaded Cover Image: {coverImage.name}</p>}
            </div>
            <div className="mb-4">
              <label className="text-gray-600 text-sm font-light pb-2">
                Төслийн зураг
              </label>
              <input
                className="text-gray-600 text-sm font-light "
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, setProjectImage)}
              />
              {projectImage && (
                <p className="text-gray-600 text-sm font-light ">
                  Оруулсан зураг: {projectImage.name}
                </p>
              )}
            </div>
            <div className="grid grid-cols-3 gap-x-4 w-full h-full">
              <AimagCityItem allowClear onChange={handleAimagChange} />

              {values?.aimag_code ? (
                <DistrictItem
                  allowClear
                  onChange={handleDistrictChange}
                  aimagId={values.aimag_code && values.aimag_code}
                />
              ) : (
                <DistrictItem />
              )}

              {values?.sum_code && values?.aimag_code ? (
                <SelectKhorooItem
                  allowClear
                  name={"horoo_code"}
                  sum={values?.sum_code}
                  aimag={values?.aimag_code}
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
