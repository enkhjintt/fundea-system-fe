import React from "react";
import Button from "../button";
import GiftIcon from "../icons/gift-icon";
import { useRouter } from "next/navigation";
import { Avatar } from "antd";

interface UserDonation {
  user: string;
  userAmount: number;
}

interface ProjectProgressCardItemProps {
  id: number;
  totalAmount: number;
  collectedAmount: number;
  remainingDays: number;
  progressColor: string;
  donations: UserDonation[]; // Updated to handle multiple users
}

const ProjectProgressCardItem: React.FC<ProjectProgressCardItemProps> = ({
  id,
  totalAmount,
  collectedAmount,
  remainingDays,
  progressColor,
  donations,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/project/add-donation/${id}`);
  };

  const validProgress = (collectedAmount / totalAmount) * 100;

  return (
    <div className="w-full max-h-fill p-4 rounded-lg shadow-md text-sm text-gray-600 bg-base-white">
      <p className="font-semibold text-gray-800">
        Нийт цуглуулах дүн: {totalAmount.toLocaleString()}₮
      </p>
      <p className="font-semibold">
        Нийт цугласан дүн: {collectedAmount.toLocaleString()}₮
      </p>
      <div className="flex flex-col my-4">
        <span>{`${validProgress.toFixed(2)} %`}</span>
        <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
          <div
            className={`${progressColor} h-full rounded-full transition-all duration-300 ease-in-out`}
            style={{ width: `${Math.min(validProgress, 100)}%` }} // Ensure the progress doesn't exceed 100%
          ></div>
        </div>
      </div>
      <p>Төсөл байршиж дуусах хугацаа: {remainingDays} хоног</p>
      <div className="my-4 flex ">
        <Button
          className="w-full"
          variant="gradient"
          placeholder="Санхүүжүүлэх"
          textVariant="gradient"
          onClick={handleClick}
        />
      </div>
      <div className="border-t-2 border-gray-100 my-2 py-2">
        {donations.map(({ user, userAmount }, index) => (
          <div
            key={index}
            className="flex flex-row gap-2 items-center mb-2 last:mb-0"
          >
            <Avatar
              size={36}
              src={""}
              className="bg-primary-normal text-base-white"
            >
              {user.charAt(0)}
            </Avatar>
            <div className="flex flex-col">
              <span className="text-gray-800 font-semibold">{user}</span>
              <span className="text-gray-600">
                {userAmount.toLocaleString()} ₮
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectProgressCardItem;
