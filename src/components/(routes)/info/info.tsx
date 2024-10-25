"use client";

import PageTitle from "@/components/page-title";
import Wrapper from "../../wrapper";

type IProps = {};

const InfoForm: React.FC<IProps> = ({}) => {
  return (
    <>
      <PageTitle title={"Мэдээ мэдээлэл"} />
      <div className="flex flex-row gap-4 h-36">
        <Wrapper className="h-40 w-full bg-gradient-to-r to-secondary-normal from-pink-normal">
          hi
        </Wrapper>
        <div className="flex flex-col w-full  gap-4">
          <Wrapper className="h-full bg-gradient-to-r to-secondary-normal from-pink-normal">
            hi
          </Wrapper>
          <Wrapper className="h-full bg-gradient-to-r to-secondary-normal from-pink-normal">
            hi
          </Wrapper>
        </div>
      </div>
    </>
  );
};

export default InfoForm;
