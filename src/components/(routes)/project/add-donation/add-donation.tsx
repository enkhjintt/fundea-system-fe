"use client";

import PageTitle from "@/components/page-title";
import Button from "@/components/button";
import Wrapper from "@/components/wrapper";
import { useRouter } from "next/navigation";
import { usePublicProjectById } from "@/hooks/use-public-projects";
import { useState, useEffect } from "react";
import IconReminder from "@/components/icon-reminder";
import SliderComponent from "@/components/slider";
import Image from 'next/image';

interface IProps {
  id: number;
}

const AddDonation: React.FC<IProps> = ({ id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const { data, isLoading } = usePublicProjectById(id);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PageTitle title={"Санхүүжилтийн төрлөө сонгох"} />

      <div className="flex flex-row gap-8">
        <Wrapper className="w-4/12 grid grid-cols-1 p-6">
          <p className="text-base font-bold text-center mb-5">
            Монгол вебтүүн төсөл
          </p>
          <p className="text-sm mb-5"> Мөнгөн дүн:  </p>
          <SliderComponent min={50000} max={5000000} />
          <hr className="border-t-2 border-gray-300 my-4 mt-[-10px]" />
          <div className="border border-gray-300 rounded-lg p-4">
            <h2 className="text-sm font-semibold"> Тайлбар </h2>
            <p className="text-sm mt-2"> “RioHero” студийн бест селлер 5 номыг бэлэглэнэ. </p>
            <Image
                src="/image/top/image1.png"  
                alt="Урамшуулал 1"     
                width={500}            
                height={500}             
                className="p-3"      
            />
          </div>
          <Button
              variant="gradient"
              placeholder="Сонгох"
              textVariant="gradient"
              className="w-44 h-8 mx-auto mt-5" />
          <IconReminder message="Манай компани нь урамшууллын гүйцэтгэлд хариуцлага хүлээхгүй болно." />
          <IconReminder message="Төсөл заасан хугацаандаа санхүүжилтээ босгож чадаагүй үед буцаан олголт хийгдэнэ." />
        </Wrapper>


        <Wrapper className="w-4/12 grid grid-cols-1 p-6">
          <p className="text-base font-bold text-center mb-5">
            Монгол вебтүүн төсөл
          </p>
          <p className="text-sm mb-5"> Мөнгөн дүн:  </p>
          <SliderComponent min={500000} max={10000000} />
          <hr className="border-t-2 border-gray-300 my-4 mt-[-10px]" />
          <div className="border border-gray-300 rounded-lg p-4">
            <h2 className="text-sm font-semibold"> Тайлбар </h2>
            <p className="text-sm mt-2"> Төслийн дээж болох “Гажууд ертөнц” ном болон “RioHero” студийн бест селлер 7 номыг бэлэглэнэ. </p>
            <Image
                src="/image/top/image1.png"  
                alt="Урамшуулал 1"     
                width={500}            
                height={500}             
                className="p-3"      
            />
          </div>
          <Button
              variant="gradient"
              placeholder="Сонгох"
              textVariant="gradient"
              className="w-44 h-8 mx-auto mt-5" />
          <IconReminder message="Манай компани нь урамшууллын гүйцэтгэлд хариуцлага хүлээхгүй болно." />
          <IconReminder message="Төсөл заасан хугацаандаа санхүүжилтээ босгож чадаагүй үед буцаан олголт хийгдэнэ." />
        </Wrapper>

      </div>
    </>
  );
};

export default AddDonation;
