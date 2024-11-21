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
import logoLassalle from "@/app/assets/LogoLassalleOrigin.svg";
import Link from "next/link";
import { cinzel } from "@/app/font";

const menuItems = [
  { title: "Nos Hébergements", href: "/hebergements" },
  {
    title: "Nos Services",
    subItems: [
      { title: "Réceptions", href: "/services/receptions" },
      { title: "Table d'Hôte", href: "/services/tablehote" },
      { title: "Spa - Bien-Être", href: "/services/spabienetre" }
    ],
  },
  { title: "Exclusivité", href: "/privatisation" },
  { title: "Gallerie", href: "/gallerie" },
  { title: "A Propos", href: "/apropos" },
  // {
  //   title: "À propos",
  //   subItems: [
  //     { title: "Remerciements", href: "/apropos/remerciements" },
  //     { title: "Ils sont venus", href: "/apropos/avis" },
  //     { title: "Où nous Trouver", href: "/apropos/adresse", icon: <PiMapPinLight /> },
  //   ],
  // },
  { title: "Contact", href: "/contact" },
];

const CustomNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar className={`${cinzel.className} w-full z-50 flex items-center p-4`} shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      {/* Logo */}
      
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-hidden
          className="sm:hidden"/>
          <NavbarBrand>
        <Link href="/">
          <Image src={logoLassalle} alt="lassale-saint-creac logo" width={120} height={120} />
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
