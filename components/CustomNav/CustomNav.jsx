"use client"
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import StaggerDropDown from "./StaggerDropDown"
import Image from "next/image";

import Link from "next/link";

const menuItems = [
  {title: "Notre Salle de Réception", href: "/salle-de-reception",},
  { title: "Nos Services", href: "/nos-services" },
  { title: "Gallerie", href: "/gallerie" },
  { title: "Nous Contacter", href: "/contact" },
];

const CustomNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar className="max-w-7xl mx-auto z-50 flex items-center p-4 font-sail text-2xl" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-hidden
          className="sm:hidden"/>
          <NavbarBrand>
        <Link href="/">
          <Image src="/lc_logo_black.png" alt="logo de la croustadine" width={150} height={150} />
        </Link>
      </NavbarBrand>
      </NavbarContent>

      {/* Menu principal */}
      <NavbarContent className="hidden sm:flex gap-8 w-full justify-end">
        {menuItems.map((item, i) => (
          item.subItems ? (
            <StaggerDropDown key={i} tabTitle={item.title}/>
          ) : (
            <NavbarItem key={i}>
              <Link href={item.href}>{item.title}</Link>
            </NavbarItem>
          )
        ))}
      </NavbarContent>
    </Navbar>
  );
}

export default CustomNav;
