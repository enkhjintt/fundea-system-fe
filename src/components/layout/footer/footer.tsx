import React from "react";

type IProps = {};

const Foot: React.FC<IProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-between items-center w-full h-12 bg-base-white px-17 border-t border-gray-300 bottom-0">
      <div className="flex justify-center items-center w-full">
        <p className="text-gray-600">
          &copy; {currentYear} Donatia. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Foot;
