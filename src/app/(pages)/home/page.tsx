import { Metadata } from "next";
import HomeForm from "@/components/(routes)/home/home-form";
import SectionLayout from "@/components/section-layout";
export const metadata: Metadata = {
  title: "Нүүр хуудас ",
};

export default function Home() {
  return (
    <>
      <SectionLayout>
        <HomeForm />
      </SectionLayout>
    </>
  );
}
