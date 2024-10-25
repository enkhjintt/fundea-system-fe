"use client";

import AllProjects from "@/components/(routes)/donation/all-project/all-project";
import SectionLayout from "@/components/section-layout";
import Wrapper from "@/components/wrapper";

export default function Donation() {
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
