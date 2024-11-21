"use client";

import React, { useState } from "react";
import { Form, Upload, Image } from "antd";
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
import type { UploadFile } from "antd/es/upload/interface";
import { RcFile } from "antd/es/upload";
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
  const values = Form.useWatch([], form);
  const [loading, setLoading] = useState(false);
  const { success, error } = useNotification();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  // Function to handle file preview

  const handleAimagChange = () => {
    form.setFieldValue("sum_code", null);
    form.setFieldValue("horoo_code", null);
  };

  const handleDistrictChange = () => {
    form.setFieldValue("horoo_code", null);
  };

  const uploadToCloudinary = async (file: RcFile) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dangr4bna/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (response.ok) {
        return data.secure_url;
      } else {
        console.error("Cloudinary upload error:", data.error);
        return "";
      }
    } catch (err) {
      console.error("Error uploading to Cloudinary:", err);
      return "";
    }
  };

  const handlePreview = (file: UploadFile) => {
    setPreviewImage(file.url || file.thumbUrl || "");
    setPreviewOpen(true);
  };

  const handleChange = ({
    fileList: newFileList,
  }: {
    fileList: UploadFile[];
  }) => {
    setFileList(newFileList);
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      // Upload each file to Cloudinary
      const uploadedFiles = await Promise.all(
        fileList.map(async (file) => {
          if (file.originFileObj) {
            const url = await uploadToCloudinary(file.originFileObj);
            return { url, type: file.type };
          }
          return null;
        })
      );

    
      const payload = {
        ...values,
        zurag: uploadedFiles.filter((file) => file !== null), 
      };

 
      const response = await CreateProject(payload);

      if (response.success) {
        success("Төсөл амжилттай илгээгдлээ!");
        router.push("/home");
        form.resetFields();
      } else {
        throw new Error(response.error.message);
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
            <Upload
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              beforeUpload={() => false} 
              accept="image/*"
            >
              {fileList.length >= 8 ? null : <div>Upload</div>}
            </Upload>

            {previewImage && (
              <Image
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                }}
                src={previewImage}
              />
            )}
            <div className="grid grid-cols-3 gap-x-4 w-full h-full">
              <AimagCityItem allowClear onChange={handleAimagChange} required />
              {values?.aimag_code ? (
                <DistrictItem
                  allowClear
                  onChange={handleDistrictChange}
                  aimagId={values?.aimag_code}
                  required
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
          />
        </div>
      </Wrapper>
    </Form>
  );
};

export default AddProjectForm;
