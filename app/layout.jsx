import React from "react";
import { NextUIProvider } from '@nextui-org/react';
import CustomNav from "@/components/CustomNav/CustomNav"
import { poppins} from "./font"
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${poppins.className} bg-slate-50 scrollbar-custom`}>
        <NextUIProvider>
          <CustomNav/>
          {/* Contenu de la page */}
          <main  className="bg-slate-50">{children}</main>
        </NextUIProvider>
      </body>
    </html>
  );
}
