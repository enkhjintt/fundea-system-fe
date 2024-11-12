"use client";

import { Suspense, useState, useEffect, useMemo } from "react";
import { Spin } from "antd";

import TopBar from "@/components/layout/topbar/topbar";

import Foot from "@/components/layout/footer/footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoginPage = useMemo(() => {
    return (children as any)?.type?.displayName === "LoginPage";
  }, [children]);

  return (
    <div className="font-montserrat">
      {isLoginPage ? (
        <div>{children}</div>
      ) : (
        <div className="w-full h-screen ">
          <div className={` w-full`}>
            <TopBar />
            <div className="pb-40">
              <Suspense
                fallback={
                  <div className="fixed z-50 inset-0 gap-4 flex flex-col items-center justify-center bg-opacity-10 backdrop-blur-lg">
                    <Spin size="large" />
                    <h1 className="color-  text-xl">
                      Мэдээлэл шинэчилж байна түр хүлээнэ үү!
                    </h1>
                  </div>
                }
              >
                <div>
                  {/* <NotificationModal /> */}

                  <div className="px-20 mt-10">{children}</div>
                </div>
              </Suspense>
            </div>
            <div className=" bottom-0 left-0 right-0">
              <Foot />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
