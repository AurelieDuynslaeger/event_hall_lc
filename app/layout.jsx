import React from "react";
import { NextUIProvider } from '@nextui-org/react';
import CustomNav from "@/components/CustomNav/CustomNav"
import { montserrat} from "./font"
import "./globals.css";
import localFont from "next/font/local";

const stretch = localFont({
  src: "./fonts/stretch-pro.regular-webfont.woff",
  variable: "--font-stretch",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${stretch.variable} bg-background overflow-hidden text-primary scrollbar-custom`}>
        <NextUIProvider>
          <CustomNav/>
          {/* Contenu de la page */}
          <main  className="bg-background text-primary">{children}</main>
        </NextUIProvider>
      </body>
    </html>
  );
}
