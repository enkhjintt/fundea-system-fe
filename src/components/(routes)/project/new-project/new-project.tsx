"use client";

import Button from "@/components/button";
import CustomCard from "@/components/custom-card";
import PageTitle from "@/components/page-title";
import Wrapper from "@/components/wrapper";

type IProps = {};

const NewProjects: React.FC<IProps> = ({}) => {
  return (
    <>
      <PageTitle
        title={"Шинэ төслүүд"}
        button={
          <Button
            variant="gradient"
            placeholder="Бүгдийг үзэх"
            className="w-full"
          />
        }
      />
      <Wrapper>
        <CustomCard
          className="border border-primary-normal"
          title={"ЦЭВЭР АГААРТАЙ ӨВӨЛ"}
          description={"airee 2024"}
          imageSrc={""}
        />
      </Wrapper>
    </>
  );
};

export default NewProjects;
