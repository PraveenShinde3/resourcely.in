import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/sidebar";
import Image from "next/image";
import icon from "../public/devlinks.svg";
import { SubmitLinkForm } from "./components/submit-form";

const inter = Inter({
  subsets: ["latin"], // You can customize the subsets
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Optional: for CSS variables
});

export const metadata: Metadata = {
  title: "Resourcely - Curated Collection of Resources",
  description:
    "Discover Resourcely, a handpicked collection of resources to streamline workflows, boost productivity, and empower your projects effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>
        <div className="h-screen overflow-hidden">
          <header className="flex items-center justify-between px-2 sm:px-6 h-14 border-b">
            <div className="flex items-center gap-2 relative">
              <Image
                src={icon}
                alt="DevLinks Logo"
                width={8}
                height={8}
                className="w-5 h-5"
                priority
              />
              <span className="font-semibold">Resourcely</span>
              <span className="text-[10px] font-medium bg-zinc-100 px-2 py-[1px] rounded-xl absolute -top-1 -right-10">
                Beta
              </span>
            </div>
            <SubmitLinkForm />
          </header>
          <div className="flex flex-col sm:flex-row">
            <Sidebar />
            <main className="flex-1 p-2 sm:p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
