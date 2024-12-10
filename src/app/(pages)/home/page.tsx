import { Metadata } from "next";
import SectionLayout from "@/components/section-layout";
import NewProjects from "@/components/(routes)/project/new-project/new-project";
import InfoForm from "@/components/(routes)/info/info";
import HomeForm from "@/components/(routes)/home/home-form";
import SuccessProjects from "@/components/(routes)/project/success-project/success-project";
export const metadata: Metadata = {
  title: "Нүүр хуудас ",
};

export default function Home() {
  return (
    <>
      <HomeForm />
      <SectionLayout>
        <NewProjects />
        <SuccessProjects />
        <InfoForm />
      </SectionLayout>
    </>
  );
}
