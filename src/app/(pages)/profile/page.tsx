import { Metadata } from "next";
import AllProjects from "@/components/(routes)/donation/all-project/all-project";
import SectionLayout from "@/components/section-layout";
import Wrapper from "@/components/wrapper";
import SideMenu from "@/components/(routes)/donation/side-menu-types";
import ViewDonation from "@/components/(routes)/donation/view/view-donation";
import UserProfile from "@/components/(routes)/profile/profile";

export const metadata: Metadata = {
  title: " Profile ",
};

export default function DonationPage() {
  return (
    <>
      <SectionLayout>
      <UserProfile /> 
      </SectionLayout>
    </>
  );
}
