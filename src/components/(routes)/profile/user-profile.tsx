"use client";

import { useState } from "react";
import { Form } from "antd";
import Button from "@/components/button";
import EmailItem from "@/components/items/email-item";
import NameItem from "@/components/items/name-item";
import PhoneItem from "@/components/items/phone-item";
import Title from "@/components/title";
import Wrapper from "@/components/wrapper";
import { useProfile } from "@/hooks/use-profile";
import { useRouter } from "next/navigation";
import ProfileSidebar from "./profile-sidebar";
import { useMyFundedProject, useMyProject } from "@/hooks/use-my-projects";
import { DefaultPagination, defaultPagination } from "@/constants";
import CustomCard from "@/components/custom-card";

const UserProfileForm: React.FC = () => {
  const { data: user, isLoading: userLoading } = useProfile();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [activeForm, setActiveForm] = useState<string>("dashboard");

  const router = useRouter();
  const [pagination, setPagination] =
    useState<DefaultPagination>(defaultPagination);

  const { data, mutate, isLoading } = useMyProject(pagination);
  const { data: fundedData } = useMyFundedProject(pagination);

  const handleCardClick = (id: number) => {
    router.push(`/project/view-project/${id}`);
  };

  if (userLoading) {
    return <div className="text-center p-6">Loading...</div>;
  }

  const renderFormContent = () => {
    switch (activeForm) {
      case "settings":
        return (
          <Wrapper className="p-6 h-full bg-white rounded-lg shadow-md">
            <Title level={2} title="Миний төслүүд" />
            <div>
              {!data || data.length === 0 ? (
                <div>Одоогоор төсөл байхгүй байна.</div>
              ) : (
                <div className="grid md:grid-cols-2 grid-flow-row gap-y-8 space-between 2xl:grid-cols-3">
                  {data.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => handleCardClick(project.id)}
                    >
                      <CustomCard
                        sizeVariant="medium"
                        title={project.garchig}
                        description={project.ded_garchig}
                        imageSrc={project.zurag}
                        subtitle={`# ${project.TusulAngilal?.ner}`}
                        progress={project.sanhuujiltiin_dun}
                        className="cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Wrapper>
        );
      default:
        return (
          <Wrapper className="p-6 h-full bg-base-white rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
              <Title level={2} title="Хувийн мэдээлэл" />
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <NameItem
                disabled
                name="ner"
                label="Нэр"
                initialValue={user?.ner}
              />
              <EmailItem disabled initialValue={user?.email} />
              <PhoneItem disabled initialValue={user?.phone} />
              <NameItem
                disabled
                name="register"
                label="Регистер"
                initialValue={user?.register}
              />
            </div>
          </Wrapper>
        );
    }
  };

  return (
    <div className="flex w-full gap-4">
      <div className="basis-1/4">
        <ProfileSidebar activeItem={activeForm} setActiveItem={setActiveForm} />
      </div>
      <div className="basis-3/4">
        <Form
          form={form}
          disabled={loading}
          layout="vertical"
          requiredMark={false}
          autoComplete="off"
          className="flex flex-col gap-4"
        >
          {renderFormContent()}
        </Form>
      </div>
    </div>
  );
};

export default UserProfileForm;
