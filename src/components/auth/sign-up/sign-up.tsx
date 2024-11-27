"use client";

import Button from "@/components/button";
import { PasswordItem, ConfirmPasswordItem } from "@/components/items/password-item";
import Title from "@/components/title";
import { useNotification } from "@/hooks/use-notification";
import { useRouter } from "next/navigation";
import { Form, Checkbox, type FormInstance } from "antd";
import EmailItem from "@/components/items/email-item";
import React, { useEffect, useState } from "react";

type TProps = {};

type FormItems = {
  email: string;
  password: string;
  confirmPassword: string;
  acceptPolicies: string[];
};

const SubmitButton = ({
  form,
  loading,
  placeholder,
}: {
  form: FormInstance<FormItems>;
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
  const [form] = Form.useForm<FormItems>();
  const { success, error } = useNotification();

  const handleSignUp = async (values: FormItems) => {
    try {
      setLoading(true);

      // Simulate API call
      const response = await fakeApiCall(values);
      if (response.success) {
        success("Бүртгэл амжилттай хийгдлээ!");
        router.push("/login"); // Redirect to login page
      } else {
        throw new Error(response.message || "Бүртгэлд алдаа гарлаа");
      }
    } catch (err: any) {
      error(err.message || "Алдаа гарлаа");
    } finally {
      setLoading(false);
    }
  };

  const fakeApiCall = (data: FormItems) =>
    new Promise<{ success: boolean; message?: string }>((resolve) =>
      setTimeout(() => resolve({ success: true }), 2000)
    );

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
        <EmailItem required className="border-primary-normal" />
        <PasswordItem required className="w-full" name="password" />
        <ConfirmPasswordItem required className="w-full" name="confirmPassword" />

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
                  new Error("Та нөхцлийг хүлээн зөвшөөрнө үү.")
                );
              },
            },
          ]}
        >
          <Checkbox.Group>
            <Checkbox value="acceptPrivacy">
              Би <a href="/privacy-policy">“Нууцлалын бодлого”</a>-ыг хүлээн зөвшөөрч байна.
            </Checkbox>
            <Checkbox value="acceptTerms">
              Би <a href="/terms-and-conditions">“Үйлчилгээний нөхцөл”</a>-ийг хүлээн зөвшөөрч байна.
            </Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <div className="flex flex-col items-center space-y-2">
          <SubmitButton form={form} loading={loading} placeholder={"Бүртгүүлэх"} />
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
