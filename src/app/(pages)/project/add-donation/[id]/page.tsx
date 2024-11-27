import { Metadata } from "next";

import SectionLayout from "@/components/section-layout";
import AddDonation from "@/components/(routes)/project/add-donation/add-donation";

export const metadata: Metadata = {
  title: "Санхүүжилтын төрөл",
};

type IProps = {
  params: { id: number };
};

const AddDonationPage = ({ params }: IProps) => {
  const id = params.id;

  return (
    <>
      <SectionLayout>
        <AddDonation id={id} />
      </SectionLayout>
    </>
  );
};

export default AddDonationPage;
