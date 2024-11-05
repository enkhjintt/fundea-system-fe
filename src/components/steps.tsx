"use client";

import React, { useState } from "react";
import { message, Steps } from "antd";
import Button from "./button";
import Wrapper from "./wrapper";

interface Step {
  title?: string; // Make title optional
  content: React.ReactNode;
}

interface StepNavigatorProps {
  steps: Step[];
  onComplete?: () => void;
}

const StepNavigator: React.FC<StepNavigatorProps> = ({ steps, onComplete }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => prev + 1);
  const prev = () => setCurrent((prev) => prev - 1);

  return (
    <>
      <Steps
        current={current}
        items={steps.map((step, index) => ({
          key: step.title || `Step ${index + 1}`, // Fallback title
          title: step.title || `Step ${index + 1}`, // Display index as fallback
        }))}
      />
      <Wrapper className="p-6 w-full h-[600px]">
        {steps[current].content}
      </Wrapper>
      <div className="flex justify-between">
        {current > 0 && (
          <Button
            placeholder="Өмнөх"
            onClick={prev}
            variant="secondary"
            className="w-40"
          />
        )}
        {current < steps.length - 1 && (
          <Button placeholder="Дараах" onClick={next} className="w-40" />
        )}
        {current === steps.length - 1 && (
          <Button
            className="w-40"
            placeholder="Хадгалах"
            onClick={() => {
              message.success("Processing complete!");
              onComplete && onComplete();
            }}
          />
        )}
      </div>
    </>
  );
};

export default StepNavigator;
