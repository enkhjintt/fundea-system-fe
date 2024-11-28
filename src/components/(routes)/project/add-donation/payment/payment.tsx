"use client";
import React, { useState, useEffect } from "react";
import PageTitle from "@/components/page-title";
import IconReminder from "@/components/icon-reminder";
import PaymentIcon from "@/components/icons/payment-icon";
import Image from 'next/image';
import UserIcon from "@/components/icons/user-icon";
import PersonIcon from "@/components/icons/person-icon";

const Payment: React.FC = () => {
  const [timer, setTimer] = useState(300); 

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : prev));
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div className="flex flex-col gap-6">
      <PageTitle title={"Төлбөрийн хэрэгслүүд"} />

      <div className="flex gap-6">
         {/* QR Code and Timer */}
        <div className="w-2/3 p-6 border border-gray-300 rounded-lg bg-white">
          <IconReminder
            message="Төлбөр төлөх"
            icon={<PaymentIcon />} 
            messageClassName="font-bold text-sm"
          />
          <div className="flex justify-center items-center flex-col text-sm text-gray-600 gap-3">
            <img
              src="/image/qr.png"
              alt="QR Code"
              className="w-32 h-32 border"
            />
            <IconReminder
              message={formattedTime}
              icon={<PersonIcon />} 
              messageClassName="font-bold text-sm ml-2"
            />
            Аль ч банкны аппликэйшнаар уншуулан төлбөрөө төлж болно.
          </div>
        </div>

        
        <div className="w-1/3 p-6 border border-gray-300 rounded-lg bg-white flex flex-col justify-center items-center p-3">
          <img
            src="/image/project/image.png"
            alt="QR Code"
            className="w-full h-auto border" 
          />
          <p className="text-base font-bold mb-3 mt-3"> Гажууд ертөнц </p>
          <p className="text-base font-bold mb-3 mt-3"> Нийт дүн: 305,000₮</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
