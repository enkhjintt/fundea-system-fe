"use client";

import PageTitle from "@/components/page-title";
import Image from "next/image";
import Button from "@/components/button";
import ProjectDisplayItem from "@/components/items/project-display-item";
import PinkTitle from "@/components/pink-title";
import IconReminder from "@/components/icon-reminder";
import ProjectProgressCardItem from "@/components/items/project-progress-item";
import Wrapper from "@/components/wrapper";

type IProps = {};

const DonationType: React.FC<IProps> = ({}) => {
  const dummyData = {
    title: "Монгол вебтүүн төсөл",
    };

  return (
    <>
      <PageTitle title={"Санхүүжилтийн төрлөө сонгох"} />
    
      <div className="flex flex-row gap-6">
        <Wrapper className="w-2/6  grid grid-cols-1 p-6">
            <h2 className="font-bold text-center"> Монгол вебтүүн төсөл </h2>
            <p className="font-medium text-xs mt-5"> Мөнгөн дүн: </p>

            <div className="flex flex-col my-4">
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden"> </div>
            </div>

            <Button 
                variant="gradient" 
                placeholder="Сонгох" 
                textVariant="gradient" 
                className="w-6/12 mt-3 mb-3 mx-auto"
            />
            <IconReminder message="Манай компани нь урамшууллын гүйцэтгэлд хариуцлага хүлээхгүй болно." />
            <IconReminder message="Төсөл заасан хугацаандаа санхүүжилтээ босгож чадаагүй үед буцаан олголт хийгдэнэ."/>
        </Wrapper>

        </div>
    </>
  );
};

export default DonationType;
