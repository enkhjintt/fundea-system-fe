"use client";

import { Suspense, useMemo, useState, useEffect } from "react";
import { Spin } from "antd";
import TopBar from "@/components/layout/topbar/topbar";
import NewTopBar from "@/components/layout/topbar/new-topbar";
import Foot from "@/components/layout/footer/footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoginPage = useMemo(() => {
    return (children as any)?.type?.displayName === "LoginPage";
  }, [children]);

  const [hasValidToken, setHasValidToken] = useState<boolean | null>(null);

  useEffect(() => {
    const tokenData = localStorage.getItem("auth");
    if (tokenData) {
      try {
        const parsedData = JSON.parse(tokenData); // Parse the token object
        const { token, expires } = parsedData;
        const isTokenValid = token && new Date(expires) > new Date();
        setHasValidToken(isTokenValid);
      } catch (error) {
        console.error("Invalid token format:", error);
        setHasValidToken(false);
      }
    } else {
      setHasValidToken(false);
    }
  }, []);

  return (
    <div className="font-montserrat">
      {isLoginPage ? (
        <div>{children}</div>
      ) : (
        <div className="w-full h-screen">
          {hasValidToken === null ? (
            <div className="fixed z-50 inset-0 gap-4 flex flex-col items-center justify-center bg-opacity-10 backdrop-blur-lg">
              <Spin size="large" />
              <h1 className="color-primary text-xl">
                Шалгаж байна түр хүлээнэ үү!
              </h1>
            </div>
          ) : hasValidToken ? (
            <NewTopBar />
          ) : (
            <TopBar />
          )}
          <div className="pb-40">
            <Suspense
              fallback={
                <div className="fixed z-50 inset-0 gap-4 flex flex-col items-center justify-center bg-opacity-10 backdrop-blur-lg">
                  <Spin size="large" />
                  <h1 className="color-primary text-xl">
                    Мэдээлэл шинэчилж байна түр хүлээнэ үү!
                  </h1>
                </div>
              }
            >
              <div>
                <div className="px-20 mt-10">{children}</div>
              </div>
            </Suspense>
          </div>
          <div className="bottom-0 left-0 right-0">
            <Foot />
          </div>
        </div>
      )}
    </div>
  );
}
