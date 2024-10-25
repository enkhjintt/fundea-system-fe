"use client";

import CustomCard from "@/components/custom-card";
import PageTitle from "@/components/page-title";
import Wrapper from "@/components/wrapper";

type IProps = {};

const AllProjects: React.FC<IProps> = ({}) => {
  return (
    <>
      <PageTitle title={"Бүх төсөл"} />
      <div className="flex gap-4">
        <Wrapper className="w-1/4">aa</Wrapper>

        <Wrapper className="w-3/4 p-6">
          <CustomCard
            className="border border-primary-normal"
            title={"ЦЭВЭР АГААРТАЙ ӨВӨЛ"}
            description={"airee 2024"}
            imageSrc={""}
          />
        </Wrapper>
      </div>
    </>
  );
};

export default AllProjects;
