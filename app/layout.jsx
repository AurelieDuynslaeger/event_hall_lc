import React from "react";
import { NextUIProvider } from '@nextui-org/react';
import CustomNav from "@/components/CustomNav/CustomNav"
import { montserrat} from "./font"
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer/Footer"

const stretch = localFont({
  src: "./fonts/stretch-pro.regular-webfont.woff",
  variable: "--font-stretch",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${stretch.variable} bg-background overflow-x-hidden min-h-screen text-primary scrollbar-custom`}>
        <NextUIProvider>
          <CustomNav/>
          <main  className="bg-background text-primary">{children}</main>
          <Footer/>
        </NextUIProvider>
      </body>
    </html>
  );
}
