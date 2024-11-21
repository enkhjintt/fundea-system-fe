import DonateIcon from "@/components/icons/donate-icon";
import GiftIcon from "@/components/icons/gift-icon";
import IconRadioGroup from "@/components/radio-button";
import React from "react";




const ProjectTypeItem: React.FC = () => {
  const options = [
    { label: "styleVariant", value: "3", icon: <GiftIcon /> },
    { label: "Хандив", value: "2", icon: <DonateIcon /> },
    { label: "Хувьцаа", value: "1", icon: <DonateIcon /> },
  ];

  return <IconRadioGroup options={options} defaultValue={""} />;
};

export default ProjectTypeItem;
