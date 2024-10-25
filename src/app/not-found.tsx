"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Button from "@/components/button";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="h-full flex w-full flex-col justify-center items-center mt-10">
      <h2 className="text-3xl pt-10">Not Found Page</h2>
      <div className="text-lg mb-4">Not Found Page</div>

      <div className="mb-4">
        <Image
          src="/image/Pedestrian crossing.svg"
          alt="Pedestrian Crossing"
          width={500}
          height={500}
        />
      </div>

      <Button
        variant="primary"
        padding="double"
        placeholder="Буцах"
        onClick={() => router.back()}
      />
    </div>
  );
};

export default NotFoundPage;
