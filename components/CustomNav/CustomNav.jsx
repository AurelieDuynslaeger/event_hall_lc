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
      { title: "Meeting Rooms", href: "/services/receptions/meeting" },
      { title: "Team Building", href: "/services/receptions/teamb" }
    ],
  },
  { title: "Rooms", href: "/hebergements" },
  { title: "Dining Service", href: "/services/tablehote" },
  // { title: "About Us", href: "/apropos" },
  // { title: "Reviews", href: "/avis" },
  { title: "Contact", href: "/contact" },
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
      <NavbarContent className="hidden sm:flex gap-8 w-full justify-end">
      {/* <NavbarBrand>
        <Link href="/">
          <Image src={logoLassalle} alt="lassale-saint-creac logo" width={120} height={120} />
        </Link>
      </NavbarBrand> */}
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
