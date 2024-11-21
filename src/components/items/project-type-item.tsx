import React from "react";

import IconRadioGroup from "../radio-button";
import GiftIcon from "../icons/gift-icon";
import DonateIcon from "../icons/donate-icon";
import StockIcon from "../icons/stock-icon";

const ProjectTypeItem: React.FC = () => {
  const options = [
    { label: "Урамшуулал", value: "3", icon: <GiftIcon /> },
    { label: "Хандив", value: "2", icon: <DonateIcon /> },
    { label: "Хувьцаа", value: "1", icon: <StockIcon /> },
  ];

  return <IconRadioGroup options={options} defaultValue={""} />;
};

export default ProjectTypeItem;
