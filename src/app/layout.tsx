import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import SessionProvider from "@/components/SessionProvider";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Санхүүжилт цуглуулах сайт",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn">
      <body className={`${montserrat.className} font-sans`}>
        <Providers>
          <SessionProvider>{children}</SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
