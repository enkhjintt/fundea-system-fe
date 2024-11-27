import { Metadata } from "next";

import SectionLayout from "@/components/section-layout";
import Payment from "@/components/(routes)/project/add-donation/payment/payment";

export const metadata: Metadata = {
  title: "Санхүүжилтын төлбөр төлөх",
};
export default function PaymentPage() {
  return (
    <>
      <SectionLayout>
        <Payment/>
      </SectionLayout>
    </>
  );
}
