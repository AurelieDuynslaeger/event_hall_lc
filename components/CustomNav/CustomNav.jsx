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
  {
    title: "Spaces",
    subItems: [
      { title: "Meeting Rooms", href: "/services/receptions" },
      { title: "Outdoor Spaces", href: "/services/tablehote" },
      { title: "Wellness & Spa", href: "/services/spabienetre" }
    ],
  },
  { title: "Rooms", href: "/hebergements" },
  { title: "Services", href: "/services/tablehote" },
  { title: "About Us", href: "/apropos" },
  { title: "Contact", href: "/contact" },
  { title: "Exclusivité", href: "/privatisation" },
];

const CustomNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar className="w-full z-50 flex items-center p-4 font-stretch" onMenuOpenChange={setIsMenuOpen}>
      {/* Logo */}
      
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-hidden
          className="sm:hidden"/>
          <NavbarBrand>
        <Link href="/">
          <Image src="/logoMinGG.svg" alt="gather and grow logo" width={200} height={120} />
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
