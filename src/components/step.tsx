import React from "react";
import { Steps } from "antd";

interface CustomStepsProps {
  current: number;
  steps: { title: string }[];
}

const CustomSteps: React.FC<CustomStepsProps> = ({ current, steps }) => {
  return (
    <Steps
      current={current}
      items={steps.map((step) => ({ key: step.title, title: step.title }))}
      style={{
        marginBottom: 24,
        background: "#f0f2f5", // Example background color
        padding: "8px 16px",
        borderRadius: "8px",
      }}
    />
  );
};

export default CustomSteps;
