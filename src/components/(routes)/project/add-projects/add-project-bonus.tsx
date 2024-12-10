"use client";

import React, { useState } from "react";
import { Form } from "antd";
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import Title from "@/components/title";
import Wrapper from "@/components/wrapper";
import InputItem from "@/components/items/input-item";
import SelectProjectClassItem from "@/components/items/project-class-select-item";
import InputNumberItem from "@/components/items/input-number-item";
import TextAreaItem from "@/components/items/input-text-area-item";
import { useNotification } from "@/hooks/use-notification";
import { CreateProject } from "@/api/projects";
import { CreateBonus } from "@/api/projects/bonus";
import AimagCityItem from "@/components/items/aimag-select-item";
import DistrictItem from "@/components/items/sum-select-item";
import SelectKhorooItem from "@/components/items/khoroo-select-item";
import SelectProjectTypeItem from "@/components/items/project-type-select-item";
import SelectProjectFeeItem from "@/components/items/project-fee-select-item";
import { CreateTeam } from "@/api/projects/team";
import PlusIcon from "@/components/icons/plus-icon";

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
const AddProjectAndBonusPage: React.FC = () => {
  const router = useRouter();
  const { success, error } = useNotification();

  const [currentStep, setCurrentStep] = useState<"project" | "bonus" | "team">(
    "project"
  );
  const [projectId, setProjectId] = useState<number | null>(null);
  const [projectTypeId, setProjectTypeId] = useState<number | null>(null);

  const [projectForm] = Form.useForm();
  const [bonusForm] = Form.useForm();
  const [teamForm] = Form.useForm();

  const [loading, setLoading] = useState(false);

  //project
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [projectImage, setProjectImage] = useState<File | null>(null);
  const values = Form.useWatch([], projectForm);
  const handleAimagChange = () => {
    projectForm.setFieldValue("sum_code", undefined);
    projectForm.setFieldValue("horoo_code", undefined);
  };

  const handleDistrictChange = () => {
    projectForm.setFieldValue("horoo_code", undefined);
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

  const handleProjectSubmit = async (values: any) => {
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
        success("Төсөл амжилттай үүсгэгдлээ!");
        const tusul_id = createResponse.data?.tusul_id.id;
        const tusul_turul_id = createResponse.data?.tusul_id.tusul_turul_id;
        if (tusul_id) {
          setProjectId(tusul_id);
        }
        if (tusul_turul_id) {
          setProjectTypeId(tusul_turul_id);
        }
        console.log("tusul_turul_id=====", tusul_turul_id);
        if (tusul_turul_id === 1) {
          setCurrentStep("bonus");
        }
        if (tusul_turul_id === 2) {
          setCurrentStep("team");
        }
      } else {
        throw new Error(createResponse.error.message || "Алдаа гарлаа!");
      }
    } catch (err: any) {
      error(err.message || "Алдаа гарлаа!");
    } finally {
      setLoading(false);
    }
  };

  const [bonusForms, setBonusForms] = useState<number[]>([0]); // Array to track bonus forms
  const [bonusFormInstances, setBonusFormInstances] = useState<any[]>([]); // To manage form instances

  const handleAddBonusForm = () => {
    setBonusForms([...bonusForms, bonusForms.length]); // Add a new form
  };

  const handleBonusSubmit = async (values: any) => {
    setLoading(true);

    try {
      const payload = { ...values, tusul_id: projectId };
      const response = await CreateBonus(payload);

      console.log("response bonus====", response);

      if (response.success) {
        success("Урамшуулал амжилттай нэмлээ!");
        setCurrentStep("team");
      } else {
        throw new Error(response.error.message || "Алдаа гарлаа!");
      }
    } catch (err: any) {
      error(err.message || "Алдаа гарлаа!");
    } finally {
      setLoading(false);
    }
  };

  //team
  const handleTeamSubmit = async (values: any) => {
    setLoading(true);

    try {
      const payload = { ...values, tusul_id: projectId };
      const response = await CreateTeam(payload);
      console.log("response team====", response);

      if (response.success) {
        success("Багийн бүрэлдэхүүн амжилттай нэмлээ!");
        router.push("/project");
      } else {
        throw new Error(response.error.message || "Алдаа гарлаа!");
      }
    } catch (err: any) {
      error(err.message || "Алдаа гарлаа!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {currentStep === "project" && (
        <Form
          form={projectForm}
          disabled={loading}
          layout="vertical"
          requiredMark={false}
          autoComplete="off"
          onFinish={handleProjectSubmit}
        >
          <Wrapper className="px-20 py-10">
            <Title level={2} title="1. Төслийн ерөнхий мэдээлэл" />
            <div className="grid grid-cols-1 gap-x-4 w-full">
              <InputItem name="garchig" label="Гарчиг" required />
              <InputItem name="ded_garchig" label="Дэд гарчиг" required />
              <SelectProjectClassItem required />

              <div>
                <label>Ковер зураг</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, setCoverImage)}
                />
                {coverImage && <p>Оруулсан ковер зураг: {coverImage.name}</p>}
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
            <Title level={2} title="2. Төслийн дэлгэрэнгүй мэдээлэл" />
            <div className="grid grid-cols-1 gap-4 w-full">
              <TextAreaItem
                maxLength={900}
                label="Төслийн дэлгэрэнгүй"
                name="delgerengui"
                showCounter={true}
                required
              />
              <TextAreaItem
                maxLength={900}
                label="Төслийн эрсдэл"
                name={"ersdel"}
                showCounter={true}
                required
              />
              <TextAreaItem
                maxLength={900}
                label="Төслийн түүх"
                name={"tuuh"}
                required
                showCounter={true}
              />
            </div>
            <Title level={2} title="3. Төслийн санхүүжилтын мэдээлэл" />
            <SelectProjectTypeItem required />
            <SelectProjectFeeItem required />
            <InputNumberItem
              name={"sanhuujiltiin_dun"}
              required
              label="Санхүүжилтын дүн"
              maxLength={8}
            />

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
                placeholder="Дараах"
                className="rounded-2xl"
              />
            </div>
          </Wrapper>
        </Form>
      )}

      {currentStep === "bonus" && (
        <Wrapper className="w-full ">
          <div className="flex justify-between px-20 pt-4">
            <Title level={2} title="Урамшуулалын ерөнхий мэдээлэл" />
            <Button
              variant="text"
              icon={<PlusIcon />}
              placeholder="Урамшуулал нэмэх"
            />
          </div>
          <Form
            form={bonusForm}
            disabled={loading}
            layout="vertical"
            requiredMark={false}
            autoComplete="off"
            onFinish={handleBonusSubmit}
          >
            <div className="px-20 py-10">
              <div className="grid grid-cols-3 gap-x-4 w-full">
                <InputItem name="ner" label="Урамшууллын нэр" required />
                <InputNumberItem name="too" label="Урамшууллын тоо" required />
                <InputNumberItem name="dun" required label="Урамшууллын дүн" />
              </div>

              <TextAreaItem
                size="sm"
                maxLength={255}
                label="Тайлбар"
                name="tailbar"
                showCounter
                required
              />
              <div className="flex gap-5 justify-end mt-8">
                <Button
                  padding="double"
                  disabled={loading}
                  placeholder="Болих"
                  variant="text"
                  className="rounded-2xl"
                  onClick={() => router.replace("/project")}
                />
                <Button
                  disabled={loading}
                  variant="primary"
                  htmlType="submit"
                  padding="double"
                  placeholder="Дараах"
                />
              </div>
            </div>
          </Form>
        </Wrapper>
      )}
      {currentStep === "team" && (
        <Form
          form={teamForm}
          disabled={loading}
          layout="vertical"
          requiredMark={false}
          autoComplete="off"
          onFinish={handleTeamSubmit}
        >
          <Wrapper className="px-20 py-10">
            <Title level={2} title="Багийн гишүүдийн мэдээлэл" />

            <div className="grid grid-cols-2 gap-x-4 w-full">
              <InputItem name="ner" label="Багийн гишүүний нэр" required />
              <InputItem name="alban_tushaal" required label="Албан тушаал" />
            </div>
            <div className="flex gap-5 justify-end">
              <Button
                padding="double"
                disabled={loading}
                placeholder="Болих"
                variant="text"
                className="rounded-2xl"
                onClick={() => router.replace("/project")}
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
      )}
    </div>
  );
};

export default AddProjectAndBonusPage;
