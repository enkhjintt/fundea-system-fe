"use client";
import PageTitle from "@/components/page-title";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useBonus } from "@/hooks/use-bonus";
import BonusDetails from "./bonus-item";
import Wrapper from "@/components/wrapper";
import InputItem from "@/components/items/input-item";
import Button from "@/components/button";
import Payment from "./payment/payment";
import { Form } from "antd";
import { CreatePayment } from "@/api/projects/payment";
import { useNotification } from "@/hooks/use-notification";
import InputNumberItem from "@/components/items/input-number-item";
import SelectPaymentTypeItem from "@/components/items/payment-class-select-item";

interface IProps {
  id: number;
}

const AddDonation: React.FC<IProps> = ({ id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [currentStep, setCurrentStep] = useState<"bonus" | "payment">("bonus");
  const [form] = Form.useForm();
  const { success, error } = useNotification();
  const { data, isLoading } = useBonus(undefined, {
    tusul_id: id,
    sort_by: "created_at",
    sort_type: "desc",
  });
  const [selectedBonus, setSelectedBonus] = useState<any | null>(null); // Track selected bonus item

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    // Check if the items array is empty and skip directly to the payment step
    if (data?.items?.length === 0) {
      setCurrentStep("payment");
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const items = data?.items[0]?.items;

  const handleClick = (bonus: any) => {
    setSelectedBonus(bonus);
    setCurrentStep("payment");
  };

  const handlePaymentSubmit = async (values: any) => {
    setLoading(true);

    try {
      const payload = { ...values, tusul_id: Number(id) };
      const response = await CreatePayment(payload);

      if (response.success) {
        success("Төлбөр амжилттай төлөгдлөө!");
        router.push(`/project/view-project/${id}`);
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
    <>
      {currentStep === "bonus" && (
        <>
          <PageTitle title={"Санхүүжилт олгох"} />
          <div className="grid grid-cols-3 grid-flow-row gap-4 space-between 2xl:grid-cols-4">
            {items?.map((item) => (
              <BonusDetails
                key={item.id}
                price={item.dun}
                name={item.ner}
                description={item.tailbar}
                amount={item.too}
                project={item.tusul_ner}
                onClick={() => handleClick(item)} // Pass the item to handleClick
              />
            ))}
          </div>
        </>
      )}
      {currentStep === "payment" && (
        <>
          <div className="flex gap-10">
            <div className="w-2/3 bg-gray-300 rounded-lg shadow-lg max-h-max">
              <Payment />
            </div>
            <div className="w-1/3">
              <BonusDetails
                price={selectedBonus.dun || 0}
                name={selectedBonus.ner || ""}
                description={selectedBonus.tailbar || ""}
                amount={selectedBonus.too || 0}
                project={selectedBonus.tusul_ner || ""}
              />
            </div>
          </div>

          <Form
            form={form}
            disabled={loading}
            layout="vertical"
            requiredMark={false}
            autoComplete="off"
            onFinish={handlePaymentSubmit}
          >
            <Wrapper className="px-20 py-10">
              <div className="grid grid-cols-2 gap-x-4 w-full">
                <InputNumberItem
                  name="dun"
                  required
                  label="Мөнгөн дүн"
                  initialValue={selectedBonus?.dun}
                />
                <SelectPaymentTypeItem name="tulbur_helber_id" />
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
                  placeholder="Төлөх"
                />
              </div>
            </Wrapper>
          </Form>
        </>
      )}
    </>
  );
};

export default AddDonation;
