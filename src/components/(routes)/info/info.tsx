"use client";

import PageTitle from "@/components/page-title";
import ImageContent from "@/components/image-content";
import info1 from "../../../../public/image/info/info1.png";
import info2 from "../../../../public/image/info/info2.png";
import info3 from "../../../../public/image/info/info3.png";

type IProps = {};

const InfoForm: React.FC<IProps> = ({}) => {
  const dummyData = [
    {
      id: 1,
      imageSrc: info1,
      title: "Explore the Mountains",
      date: "October 15, 2024",
      buttonText: "Read More",
    },
    {
      id: 2,
      imageSrc: info2,
      title: "Sunny Beach Vibes",
      date: "October 20, 2024",
      buttonText: "Discover",
    },
    {
      id: 3,
      imageSrc: info3,
      title: "City Lights Adventure",
      date: "October 22, 2024",
      buttonText: "Explore",
    },
  ];

  return (
    <>
      <PageTitle title={"Мэдээ мэдээлэл"} />

      <div className="grid grid-rows-2 grid-flow-col gap-6 h-[500px] w-full">
        <div className="row-span-2 ">
          <ImageContent
            imageSrc={dummyData[0].imageSrc}
            title={dummyData[0].title}
            date={dummyData[0].date}
            buttonText={dummyData[0].buttonText}
            onButtonClick={() => alert(`Clicked: ${dummyData[0].title}`)}
          />
        </div>
        {dummyData.slice(1).map((item) => (
          <div className="col-span-1" key={item.id}>
            <ImageContent
              imageSrc={item.imageSrc}
              title={item.title}
              date={item.date}
              buttonText={item.buttonText}
              onButtonClick={() => alert(`Clicked: ${item.title}`)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default InfoForm;
