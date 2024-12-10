"use client";

import Button from "@/components/button";

import Title from "@/components/title";
import { useNotification } from "@/hooks/use-notification";
import { useRouter } from "next/navigation";
import { Form, Checkbox, Input, type FormInstance } from "antd";
import EmailItem from "@/components/items/email-item";
import React, { useEffect, useState } from "react";
import { registerUser } from "@/api/auth";
import {
  ConfirmPasswordItem,
  PasswordItem,
} from "@/components/items/confirm-password-item";
import PhoneItem from "@/components/items/phone-item";
import InputItem from "@/components/items/input-item";

type TProps = {};
type FormItem = {
  ner: string;
  phone: string;
  email: string;
  password: string;
};

const SubmitButton = ({
  form,
  loading,
  placeholder,
}: {
  form: FormInstance<FormItem>;
  loading: boolean;
  placeholder: string;
}) => {
  const [submittable, setSubmittable] = useState(false);

  const values = Form.useWatch([], form);

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
  }, [values, form]);

  return (
    <Button
      loading={loading}
      placeholder={placeholder}
      variant="gradient"
      htmlType="submit"
      padding="secondary"
      className="w-full h-fit mt-8 p-2 text-base"
      disabled={!submittable}
    />
  );
};

const SignUpForm: React.FC<TProps> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [form] = Form.useForm<FormItem>();
  const { success, error } = useNotification();
  const values = Form.useWatch([], form);

  const handleSignUp = async (values: any) => {
    setLoading(true);
    try {
      const formData = new FormData();

      formData.append("phone", values.phone);
      formData.append("ner", values.ner);
      formData.append("email", values.email);
      formData.append("password", values.password);

      const response = await registerUser(formData);

      if (response.success) {
        success("Бүртгэл амжилттай хийгдлээ!");
        router.push("/auth/login");
      } else {
        throw new Error("Бүртгэлд алдаа гарлаа!");
      }
    } catch (err: any) {
      error(err.message || "Алдаа гарлаа");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form
        disabled={loading}
        form={form}
        onFinish={handleSignUp}
        requiredMark={false}
        layout="vertical"
        className="w-[460px] p-10"
      >
        <Title
          className="font-semibold text-3xl tracking-normal w-8 text-primary-normal"
          title={"Бүртгүүлэх"}
        />
        <InputItem name="ner" required />
        <EmailItem required />

        <PhoneItem required name={"phone"} />

        <PasswordItem required className="w-full" name="password" />
        <ConfirmPasswordItem
          required
          className="w-full"
          name="confirmPassword"
        />

        {/* Add Policy Acceptance Checkboxes */}
        <Form.Item
          name="acceptPolicies"
          valuePropName="checkedList"
          rules={[
            {
              validator(_, value: string[]) {
                if (value?.length === 2) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    "Та Нууцлалын бодлого болон Үйлчилгээний нөхцлийг хүлээн зөвшөөрнө үү."
                  )
                );
              },
            },
          ]}
        >
          <Checkbox.Group className="space-y-2 text-justify">
            <Checkbox
              value="acceptPrivacy"
              className="text-gray-600 leading-4 text-sm"
            >
              Би “Нууцлалын бодлого”-ыг хүлээн зөвшөөрч байна.
            </Checkbox>
            <Checkbox
              value="acceptTerms"
              className="text-gray-600 leading-4 text-sm"
            >
              Би “Үйлчилгээний нөхцөл”-ийг хүлээн зөвшөөрч байна.
            </Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <div className="flex flex-col items-center space-y-4">
          <SubmitButton
            form={form}
            loading={loading}
            placeholder={"Бүртгүүлэх"}
          />
          {/* <Button
            loading={loading}
            placeholder="Бүртгүүлэх"
            variant="primary"
            htmlType="submit"
            className="w-full"
          /> */}
          <Button
            loading={loading}
            placeholder="Нэвтрэх"
            variant="text"
            className="w-full"
            onClick={() => router.push("/auth/login")}
          />
        </div>
      </Form>
    </>
  );
};

export default SignUpForm;
