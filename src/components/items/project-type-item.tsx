import React from "react";

import IconRadioGroup from "../radio-button";
import GiftIcon from "../icons/gift-icon";
import DonateIcon from "../icons/donate-icon";

const ProjectTypeItem: React.FC = () => {
  const options = [
    { label: "Урамшуулал", value: "Урамшуулал", icon: <GiftIcon /> },
    { label: "Хандив", value: "Хандив", icon: <DonateIcon /> },
  ];

  return <IconRadioGroup options={options} defaultValue={""} />;
};

export default ProjectTypeItem;
