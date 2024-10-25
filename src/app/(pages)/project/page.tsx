"use client";

import TopImage from "@/components/(routes)/home/images/top-images";
import CollapseComponent from "@/components/(routes)/project/help/help";
import SectionLayout from "@/components/section-layout";

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
