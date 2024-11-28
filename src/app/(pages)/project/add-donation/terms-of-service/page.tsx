import { Metadata } from "next";

import SectionLayout from "@/components/section-layout";
import TermsOfService from "@/components/(routes)/project/add-donation/terms-of-service/terms-of-service";

export const metadata: Metadata = {
  title: "Үйлчилгээний нөхцөл",
};
export default function TermsOfServicePage() {
  return (
    <>
      <SectionLayout>
        <TermsOfService/>
      </SectionLayout>
    </>
  );
}
