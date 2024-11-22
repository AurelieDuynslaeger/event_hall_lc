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
import { montserrat } from "@/app/font";

import Link from "next/link";

const menuItems = [
  {
    title: "Nos Espaces",
    subItems: [
      { title: "Espaces collabortifs", href: "/services/receptions" },
      { title: "Profitez de la nature", href: "/services/tablehote" },
      { title: "Spa - Bien-Être", href: "/services/spabienetre" }
    ],
  },
  { title: "Nos Chambres", href: "/hebergements" },
  { title: "Notre Service", href: "/services/tablehote" },
  { title: "A Propos", href: "/apropos" },
  { title: "Contact", href: "/contact" },
  { title: "Exclusivité", href: "/privatisation" },
];

const CustomNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar className="w-full z-50 flex items-center p-4" shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      {/* Logo */}
      
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-hidden
          className="sm:hidden"/>
          <NavbarBrand>
        <Link href="/">
          <Image src="/logoMinGG.svg" alt="lassale-saint-creac logo" width={120} height={120} />
        </Link>
      </NavbarBrand>
      </NavbarContent>

      {/* Menu principal */}
      <NavbarContent className="hidden sm:flex gap-4 w-full justify-evenly">
      {/* <NavbarBrand>
        <Link href="/">
          <Image src={logoLassalle} alt="lassale-saint-creac logo" width={120} height={120} />
        </Link>
      </NavbarBrand> */}
        {menuItems.map((item, i) => (
          item.subItems ? (
            // Dropdown pour les items avec sous-menu
         
            <StaggerDropDown key={i} tabTitle={item.title}/>
          ) : (
            // Simple NavbarItem pour les items sans sous-menu
            <NavbarItem key={i}>
              <Link href={item.href}>{item.title}</Link>
            </NavbarItem>
          )
        ))}
      </NavbarContent>

      {/* Bouton de demande */}
      {/* <DrawOutlineButton href="/reservation"> 
        <p className="text-base">Une demande particulière</p>
        <PiArrowRightThin className="ml-2 h-4 w-4" />
      </DrawOutlineButton> */}
    </Navbar>
  );
}

export default CustomNav;
