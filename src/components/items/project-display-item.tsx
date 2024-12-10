// components/ProjectDisplayItem.tsx

import React from "react";
import Image from "next/image";
import Wrapper from "../wrapper";

interface ProjectDisplayItemProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

const ProjectDisplayItem: React.FC<ProjectDisplayItemProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
}) => {
  return (
    <div className="project-display">
      <Wrapper>
        <div className="p-6">
          <h1 className="text-4xl font-semibold text-gray-800">{title}</h1>
          <p className="text-base text-gray-700">{subtitle}</p>
        </div>
        <div className="mt-4 mb-4 shadow-lg w-full h-[600px] relative rounded-b-lg">
          <img
            className="object-fill rounded-b-lg h-[600px] w-full"
            src={imageUrl}
            alt={description}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default ProjectDisplayItem;
