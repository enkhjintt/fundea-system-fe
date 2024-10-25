import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card as AntCard } from "antd";
import type { CardProps } from "antd/es/card";

type IProps = {
  title: string;
  description: string;
  avatarSrc?: string;
  imageSrc: string;
  actions?: React.ReactNode[];
  className?: string;
  width?: number | string;
  height?: number | string;
};

const CustomCard: React.FC<IProps & CardProps> = ({
  title,
  description,
  avatarSrc = "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
  imageSrc,
  actions = [
    <SettingOutlined key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
  ],
  className,
  width = 300,
  height = 400,
  ...rest
}) => {
  return (
    <AntCard
      className={className}
      style={{ width, height, display: "flex", flexDirection: "column" }}
      cover={
        <img
          alt="example"
          src={imageSrc}
          style={{ objectFit: "cover", height: "200px" }}
        />
      }
      actions={actions}
      {...rest}
    >
      <div style={{ flexGrow: 1 }}>
        <div className="flex items-center">
          <Avatar src={avatarSrc} />
          <div className="ml-4">
            <div className="text-base font-semibold text-gray-600">{title}</div>
            <div className="text-gray-600">{description}</div>
          </div>
        </div>
      </div>
    </AntCard>
  );
};

export default CustomCard;
