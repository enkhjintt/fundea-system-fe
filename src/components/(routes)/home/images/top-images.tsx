import CustomCarousel from "@/components/custom-carousel";
import React from "react";

const TopImage: React.FC = () => {
  const slides = [
    { src: "/image/top/image1.png", alt: "Image 1" },
    { src: "/image/top/image2.png", alt: "Image 2" },
    { src: "/image/top/image1.png", alt: "Image 3" },
    { src: "/image/top/image2.png", alt: "Image 4" },
  ];

  return (
    <div>
      <CustomCarousel slides={slides} />
    </div>
  );
};

export default TopImage;
