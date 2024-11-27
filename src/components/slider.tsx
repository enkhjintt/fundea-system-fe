"use client";

import React, { useState } from "react";

interface SliderProps {
  min: number;
  max: number;
}

const SliderComponent: React.FC<SliderProps> = ({ min, max }) => {
  const [value, setValue] = useState(Math.floor((min + max) / 2)); // Initial value

  // Handle value change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  // Increment and Decrement functions
  const increment = () => {
    if (value < max) setValue(value + 5000); // Add 5000₮
  };

  const decrement = () => {
    if (value > min) setValue(value - 5000); // Subtract 5000₮
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 mt-[-30px]">
      {/* Slider Wrapper */}
      <div className="flex items-center w-full max-w-lg gap-4">
        {/* Slider */}
        <div className="flex-grow">
          <div className="flex justify-between text-sm mb-2">
            <span>{min.toLocaleString()}₮</span>
            <span>{max.toLocaleString()}₮</span>
          </div>
          <input
            type="range"
            min={min}
            max={max}
            step={5000}
            value={value}
            onChange={handleChange}
            className="w-full h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg appearance-none"
          />
        </div>
      </div>

      {/* Buttons Below the Slider */}
      <div className="flex justify-between w-full max-w-lg mt-[-30px]">
        {/* Decrease Button */}
        <button
          onClick={decrement}
          className="text-2xl text-blue-500 font-bold cursor-pointer"
        >
          -
        </button>
        {/* Increase Button */}
        <button
          onClick={increment}
          className="text-2xl text-pink-500 font-bold cursor-pointer"
        >
          +
        </button>
      </div>

      {/* Current Value */}
      <div className="text-lg font-bold mt-[-30px]">
          {value.toLocaleString()}₮
      </div>

      {/* Description */}
      <p className="text-xs text-gray-700 text-center">
         *Мөнгөн дүн дээр дарж хүссэн дүнгээ бичиж оруулаарай.
      </p>
    </div>
  );
};

export default SliderComponent;
