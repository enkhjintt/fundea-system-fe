import { Metadata } from "next";
import AllProjects from "@/components/(routes)/project/all-project/all-project";
import SectionLayout from "@/components/section-layout";
import Wrapper from "@/components/wrapper";
import SideMenu from "@/components/(routes)/project/side-menu-types";

export const metadata: Metadata = {
  title: "Санхүүжилт олгох ",
};

export default function DonationPage() {
  return (
    <>
      <SectionLayout>
        <Wrapper className="h-100 bg-gradient-to-r to-secondary-normal from-pink-normal">
          hi
        </Wrapper>
        <AllProjects />
      </SectionLayout>
    </>
  );
}
