import { Metadata } from "next";

import TopImage from "@/components/(routes)/home/images/top-images";
import CollapseComponent from "@/components/(routes)/project/help/help";
import SectionLayout from "@/components/section-layout";
export const metadata: Metadata = {
  title: "Төслүүд ",
};
export default function ProjectHelp() {
  return (
    <>
      <SectionLayout>
        <TopImage />
        <CollapseComponent />
      </SectionLayout>
    </>
  );
}
