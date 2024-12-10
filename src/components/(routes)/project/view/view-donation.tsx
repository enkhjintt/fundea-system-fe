"use client";

import PageTitle from "@/components/page-title";
import Button from "@/components/button";
import ProjectDisplayItem from "@/components/items/project-display-item";
import PinkTitle from "@/components/pink-title";
import IconCardItem from "@/components/icon-card";
import ProjectProgressCardItem from "@/components/items/project-progress-item";
import Wrapper from "@/components/wrapper";
import { useRouter } from "next/navigation";
import { usePublicProjectById } from "@/hooks/use-public-projects";
import { useState, useEffect } from "react";
import { useProjectById } from "@/hooks/use-projects";

interface IProps {
  id: number;
}

const ViewDonation: React.FC<IProps> = ({ id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const { data, isLoading } = useProjectById(id);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PageTitle title={"Санхүүжилт олгох"} />

      <ProjectDisplayItem
        title={data?.garchig || ""}
        subtitle={data?.ded_garchig || ""}
        description={data?.delgerengui || ""}
        imageUrl={data?.zurag || ""}
      />

      <div className="flex flex-row gap-8">
        <Wrapper className="w-3/4 grid grid-cols-1 p-6">
          <div className=" flex justify-between">
            <p className="text-md text-gray-600"># {data?.TusulAngilal.ner}</p>
            <p className="text-md text-gray-600"># {data?.TusulTurul.ner}</p>
          </div>

          <PinkTitle title={"Төслийн дэлгэрэнгүй"} desc={data?.delgerengui} />
          <PinkTitle title={"Төслийн түүх"} desc={data?.tuuh} />
          <PinkTitle title={"Төслийн эрсдэл"} desc={data?.ersdel} />
          <PinkTitle
            title={"Төсөл хэрэгжүүлэгч"}
            desc={data?.Hereglegch?.ner}
          />
          <p className="text-sm mt-3">
            Төсөл хэрэгжүүлэгчтэй холбоо барих: {data?.Hereglegch?.email}
          </p>

          <div className="grid grid-cols-2 gap-8 mt-8">
            <IconCardItem message="Төслийн хугацаа дуусаагүй тохиолдолд санхүүжилтээ буцаан авах боломжгүй." />
            <IconCardItem message="Төсөлд гарч болзошгүй эрсдэлийг судлах нь санхүүжилт олгогчийн өөрийн хариуцлага болно." />

            <Button
              variant="gradient"
              placeholder="Гомдол мэдүүлэх"
              textVariant="gradient"
            />
          </div>
        </Wrapper>

        <div className="w-1/4">
          <ProjectProgressCardItem
            id={id}
            totalAmount={data?.sanhuujiltiin_dun || 0}
            collectedAmount={data?.sum_sanhuujilt_dun || 0}
            remainingDays={0}
            progressColor="bg-secondary-normal"
            donations={
              data?.sanhuujilt_list?.map((item: any) => ({
                user: item.hereglegch_ner,
                userAmount: item.sanhuujilt_dun,
              })) || []
            }
          />
        </div>
      </div>
    </>
  );
};

export default ViewDonation;
