import React from "react";
import { NextUIProvider } from '@nextui-org/react';
import CustomNav from "@/components/CustomNav/CustomNav"
import { montserrat} from "./font"
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${montserrat.className} bg-background text-primary scrollbar-custom`}>
        <NextUIProvider>
          <CustomNav/>
          {/* Contenu de la page */}
          <main  className="bg-background text-primary">{children}</main>
        </NextUIProvider>
      </body>
    </html>
  );
}
