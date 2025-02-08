import React from "react";
import { NextUIProvider } from '@nextui-org/react';
import CustomNav from "@/components/CustomNav/CustomNav";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

// Modifier l'importation pour inclure "style"
import { Sail, Montserrat } from 'next/font/google';

const sail = Sail({
    subsets: ["latin"],  
    weight: "400",  
    style: "normal", 
    variable: '--font-sail' 
});
  
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '600'],
    style: ['normal'],
    variable: '--font-montserrat' 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${sail.variable} bg-primary overflow-x-hidden min-h-screen text-background scrollbar-custom`}>
        <NextUIProvider>
          <CustomNav/>
          <main className="bg-primary text-background">{children}</main>
          <Footer/>
        </NextUIProvider>
      </body>
    </html>
  );
}