import React from "react";
import Image, { StaticImageData } from "next/image";
import Button from "./button";

interface ImageContentProps {
  imageSrc: StaticImageData | string;
  title: string;
  date: string;
  buttonText: string;
  onButtonClick: () => void;
}

const ImageContent: React.FC<ImageContentProps> = ({
  imageSrc,
  title,
  date,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="bg-base-white h-full rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative w-full h-3/4">
        {typeof imageSrc === "string" ? (
          <img
            src={imageSrc}
            alt={title}
            className="object-cover w-full h-full"
          />
        ) : (
          <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
        )}
      </div>
      <div className=" h-1/4 flex flex-col p-2 content-center">
        <h3 className="text-lg  font-medium text-gray-800">{title}</h3>
        <div className="flex justify-between">
          <p className="text-sm  text-gray-500">{date}</p>
          <Button
            padding="none"
            onClick={onButtonClick}
            placeholder="Дэлгэрэнгүй"
            variant="link"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageContent;
