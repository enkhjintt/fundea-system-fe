import React from "react";
import { Card as AntCard } from "antd";
import type { CardProps } from "antd/es/card";

// Define the allowed size variants
type SizeVariant = "small" | "medium" | "large";

type IProps = {
  author?: string;
  title: string;
  description: string;
  subtitle?: string;
  imageSrc: string;
  className?: string;
  sizeVariant?: SizeVariant;
  progress?: number;
};

// Define size styles for different sizes, including imageHeight
const sizeStyles: Record<
  SizeVariant,
  {
    width: number;
    height: number;
    titleSize: string;
    descriptionSize: string;
    imageHeight: number;
  }
> = {
  small: {
    width: 400,
    height: 430,
    titleSize: "text-lg leading-5",
    descriptionSize: "text-sm",
    imageHeight: 200,
  },
  medium: {
    width: 380,
    height: 430,
    titleSize: "text-base leading-tight",
    descriptionSize: "text-sm leading-4 ",
    imageHeight: 200,
  },
  large: {
    width: 400,
    height: 500,
    titleSize: "text-lg",
    descriptionSize: "text-lg",
    imageHeight: 180,
  },
};

const CustomCard: React.FC<IProps & CardProps> = ({
  title,
  author,
  description,
  subtitle,
  imageSrc,
  sizeVariant = "medium",
  className = "",
  progress = 0,
  ...rest
}) => {
  const { width, height, titleSize, descriptionSize, imageHeight } =
    sizeStyles[sizeVariant as SizeVariant];

  const validProgress = progress > 100 ? 100 : progress < 0 ? 0 : progress;
  const progressColor = "bg-primary-normal";

  return (
    <AntCard
      className={`bg-base-white shadow-lg ${className}`}
      style={{ width, height, display: "flex", flexDirection: "column" }}
      cover={
        <img
          alt="example"
          src={imageSrc}
          style={{ objectFit: "cover", height: `${imageHeight}px` }}
        />
      }
      {...rest}
    >
      <div style={{ flexGrow: 1 }} className="space-y-3">
        {author && (
          <div className={`${descriptionSize}  text-gray-600 pb-2`}>
            {author}
          </div>
        )}
        {title && (
          <div
            className={`${titleSize} font-semibold text-gray-600 border-t-2 border-gray-100 pt-2`}
          >
            {title}
          </div>
        )}
        {description && (
          <div className={`${descriptionSize} text-gray-600  line-clamp-2`}>
            {description}
          </div>
        )}
        {subtitle && (
          <div
            className={`${descriptionSize} text-gray-700 border-t-2 border-gray-100 w-full pt-2`}
          >
            {subtitle}
          </div>
        )}

        {progress >= 0 && progress <= 100 && (
          <div className="flex flex-col mt-4">
            <span>{`${validProgress} %`}</span>
            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
              <div
                className={`${progressColor} h-full rounded-full transition-all duration-300 ease-in-out`}
                style={{ width: `${validProgress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </AntCard>
  );
};

export default CustomCard;
