import { Metadata } from "next";
import PageHeader from "@/components/page-header";
import SectionLayout from "@/components/section-layout";
import UserProfileForm from "@/components/(routes)/profile/user-profile";
import PageTitle from "@/components/page-title";

export const metadata: Metadata = {
  title: "Хувийн мэдээлэл",
};

const ProfilePage = () => {
  return (
    <>
      <SectionLayout>
        <PageTitle
        className="bg-base-white"
          title="Хувийн мэдээлэл"
        />
        <UserProfileForm />
      </SectionLayout>
    </>
  );
};

export default ProfilePage;
