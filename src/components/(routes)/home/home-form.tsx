"use client";

import TopImage from "@/components/(routes)/home/images/top-images";
import InfoForm from "@/components/(routes)/info/info";
import NewProjects from "@/components/(routes)/project/new-project/new-project";
import ProjectCategory from "@/components/(routes)/project/project-category";
import ProjectTypeItem from "@/components/items/project-type-item";
import SectionLayout from "@/components/section-layout";
import Wrapper from "@/components/wrapper";

export default function HomeForm() {
  return (
    <>
      <SectionLayout>
        <Wrapper className="h-100 bg-gradient-to-r to-secondary-normal from-pink-normal">
          <TopImage />
        </Wrapper>
        <ProjectTypeItem />
        <ProjectCategory />
        <NewProjects />
        <InfoForm />
      </SectionLayout>
    </>
  );
}
