import React from "react";
import { Carousel } from "antd";

interface CustomCarouselProps {
  slides: { src: string; alt: string }[]; // Accept an array of objects containing image src and alt text
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ slides }) => {
  const contentStyle: React.CSSProperties = {
    width: "100%",
    maxHeight: "400px", // Adjust height as needed
    objectFit: "cover", // Ensures the image fits the container
  };

  return (
    <Carousel autoplay>
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.src} alt={slide.alt} style={contentStyle} />
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
