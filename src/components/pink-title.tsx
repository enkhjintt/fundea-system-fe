import React from "react";

interface PinkTitleProps {
  title: string;
  desc?: string; // Make desc optional
}

const PinkTitle: React.FC<PinkTitleProps> = ({ title, desc }) => {
  return (
    <>
      <div className="flex items-center gap-2 my-4">
        <div className="bg-secondary-normal rounded-sm w-1 h-8" />
        <h1 className="text-xl max-h-fill text-gray-800">{title}</h1>
      </div>
      {desc && <p className="text-sm text-justify text-gray-700">{desc}</p>}
    </>
  );
};

export default PinkTitle;
