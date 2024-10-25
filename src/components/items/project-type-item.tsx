import React from "react";

import { SmileOutlined, HeartOutlined } from "@ant-design/icons";
import IconRadioGroup from "../radio-button";
import GiftIcon from "../icons/gift-icon";
import DonateIcon from "../icons/donate-icon";

const ProjectTypeItem: React.FC = () => {
  const options = [
    { label: "Урамшуулал", value: "Урамшуулал", icon: <GiftIcon /> },
    { label: "Хандив", value: "Хандив", icon: <DonateIcon /> },
  ];

  return (
    <div>
      <IconRadioGroup options={options} defaultValue={""} />
    </div>
  );
};

export default ProjectTypeItem;
