import React from "react";
import Button from "../button";
import GiftIcon from "../icons/gift-icon";
import { useRouter } from "next/navigation";

interface ProjectProgressCardItemProps {
  id: number; // Add id here
  totalAmount: number;
  collectedAmount: number;
  remainingDays: number;
  validProgress: number;
  progressColor: string;
}

const ProjectProgressCardItem: React.FC<ProjectProgressCardItemProps> = ({
  id,
  totalAmount,
  collectedAmount,
  remainingDays,
  validProgress,
  progressColor,
}) => {
  const router = useRouter();
  // const handleClick()=>{
  //   router.push(`/project/add-donation/${id}`)
  // }
  
  return (
    <div className="w-full max-h-fill p-4 rounded-lg shadow-md text-sm text-gray-600 bg-base-white">
      <p className="font-semibold text-gray-800">
        Нийт цуглуулах дүн: {totalAmount.toLocaleString()}₮
      </p>
      <p className="font-semibold">
        Нийт цугласан дүн: {collectedAmount.toLocaleString()}₮
      </p>
      <div className="flex flex-col my-4">
        <span>{`${validProgress} %`}</span>
        <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
          <div
            className={`${progressColor} h-full rounded-full transition-all duration-300 ease-in-out`}
            style={{ width: `${validProgress}%` }}
          ></div>
        </div>
      </div>
      <p>Төсөл байршиж дуусах хугацаа: {remainingDays} хоног</p>
      <div className="mt-4 flex space-x-2">
        <Button
          variant="gradient"
          placeholder="Санхүүжүүлэх"
          textVariant="gradient"
          // onClick={() => handleClick}
        />
        <Button
          variant="secondary"
          placeholder="Хуваалцах"
          textVariant="gradient"
          icon={<GiftIcon />}
        />
      </div>
    </div>
  );
};

export default ProjectProgressCardItem;
