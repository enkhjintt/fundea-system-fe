"use client";
import React, { useState, useEffect } from "react";
import PageTitle from "@/components/page-title";
import IconReminder from "@/components/icon-reminder";
import PaymentIcon from "@/components/icons/payment-icon";
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
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  return (
    <div className="flex flex-col gap-6 bg-base-white rounded-lg w-full h-full">
      <div className="w-full rounded-lg p-4">
        <IconReminder
          message="Төлбөр төлөх"
          icon={<PaymentIcon />}
          messageClassName="font-bold text-sm"
        />
        <div className="flex justify-center items-center flex-col text-sm text-gray-600 gap-3">
          <img src="/image/qr.png" alt="QR Code" className="w-32 h-32 border" />
          <IconReminder
            message={formattedTime}
            icon={<PersonIcon />}
            messageClassName="font-bold text-sm ml-2"
          />
          Аль ч банкны аппликэйшнаар уншуулан төлбөрөө төлж болно.
        </div>
      </div>
    </div>
  );
};

export default Payment;
