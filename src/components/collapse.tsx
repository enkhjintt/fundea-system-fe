import React, { CSSProperties } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";

interface CustomCollapseProps {
  items: CollapseProps["items"];
  defaultActiveKey?: string[];
  bordered?: boolean;
}

const CustomCollapse: React.FC<CustomCollapseProps> = ({
  items,
  defaultActiveKey = ["1"],
  bordered = false,
}) => {
  const { token } = theme.useToken();

  // Define your custom border color here
  const customBorderColor = "#f5f5f5";
  const customBgColor = "#f5f5f5";

  // Panel style for the wrapper around each item
  const panelStyle: CSSProperties = {
    marginBottom: 24,
    background: `${customBgColor}`,
    borderRadius: token.borderRadiusLG,
    border: `1px solid ${customBorderColor}`,
    padding: "12px",
  };

  const itemLabelStyle: CSSProperties = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#4A5568",
    padding: "8px 0",
    borderBottom: `1px solid ${token.colorBorderSecondary}`,
  };

  const itemContentStyle: CSSProperties = {
    padding: "16px",
    color: "#718096",
    backgroundColor: "#F7FAFC",
    borderRadius: "4px",
  };

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={defaultActiveKey}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      style={{ background: token.colorBgContainer }}
      items={
        items?.map((item) => ({
          ...item,
          label: (
            <div className="font-semibold text-lg text-gray-800">
              {item.label}
            </div>
          ),
          children: (
            <div className="ml-6 text-gray-600 font-medium">
              {item.children}
            </div>
          ),
          style: panelStyle,
        })) || []
      }
    />
  );
};

export default CustomCollapse;
