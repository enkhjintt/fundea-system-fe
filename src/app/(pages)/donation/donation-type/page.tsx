import { Metadata } from "next";
import AllProjects from "@/components/(routes)/donation/all-project/all-project";
import SectionLayout from "@/components/section-layout";
import Wrapper from "@/components/wrapper";
import SideMenu from "@/components/(routes)/donation/side-menu-types";
import DonationType from "@/components/(routes)/donation/type/donation-type";

export const metadata: Metadata = {
  title: "Санхүүжилт олгох ",
};

export default function DonationPage() {
  return (
    <>
      <SectionLayout>
        <DonationType />
      </SectionLayout>
    </>
  );
}
