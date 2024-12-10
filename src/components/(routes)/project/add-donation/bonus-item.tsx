import React from "react";
import Button from "@/components/button";
import IconReminder from "@/components/icon-reminder";
import CurrentIcon from "@/components/icons/current-icon";

type BonusDetailsProps = {
  price: number;
  name: string;
  description: string;
  amount: number;
  project: string;
  onClick?: () => void;
};

const BonusDetails: React.FC<BonusDetailsProps> = ({
  price,
  name,
  description,
  amount,
  project,
  onClick,
}) => {
  return (
    <div className="w-full grid grid-cols-1 p-6 bg-base-white rounded-lg shadow-lg ">
      <p className="text-lg font-medium text-center mb-5">{name}</p>
      <p className="text-sm mb-5 text-gray-600">{description}</p>

      <div className="flex justify-between text-sm text-gray-600 mb-5">
        <span>Мөнгөн дүн: {price}</span>
        <span>Урамшуулалын тоо: {amount}</span>
      </div>

      <div className="text-sm text-gray-600 mb-5">
        <strong>{project}</strong>
      </div>

      <hr className="border-t-2 border-gray-100 my-4 mt-[-10px]" />
      
      {/* Conditionally render the Button */}
      {onClick && (
        <Button
          variant="gradient"
          placeholder="Сонгох"
          textVariant="gradient"
          onClick={onClick}
          className="w-44 h-8 mx-auto mt-5"
        />
      )}
      
      <IconReminder
        message="Манай компани нь урамшууллын гүйцэтгэлд хариуцлага хүлээхгүй болно."
        icon={<CurrentIcon />}
      />
      <IconReminder
        message="Төсөл заасан хугацаандаа санхүүжилтээ босгож чадаагүй үед буцаан олголт хийгдэнэ."
        icon={<CurrentIcon />}
      />
    </div>
  );
};


export default BonusDetails;
