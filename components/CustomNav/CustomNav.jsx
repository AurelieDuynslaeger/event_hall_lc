"use client"
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button, 
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import logoLassalle from "@/app/assets/LogoLassalleOrigin.svg";
import { PiArrowDown, PiArrowRightThin, PiMapPinLight } from "react-icons/pi";
import DrawOutlineButton from "@/components/DrawOutlineButton/DrawOutlineButton";
import Link from "next/link";

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
  { title: "A Propos", href: "/apropos" },
  // {
  //   title: "À propos",
  //   subItems: [
  //     { title: "Remerciements", href: "/apropos/remerciements" },
  //     { title: "Ils sont venus", href: "/apropos/avis" },
  //     { title: "Où nous Trouver", href: "/apropos/adresse", icon: <PiMapPinLight /> },
  //   ],
  // },
  { title: "Gallerie", href: "/gallerie" },
  { title: "Contact", href: "/contact" },
];

const CustomNav = () => {
  const icons = {
    chevron: <PiArrowDown fill="currentColor" size={16} />,
    mapPin: <PiMapPinLight size={16} />,
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar className="w-full z-50 flex items-center p-4" shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
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
        {menuItems.map((item) => (
          item.subItems ? (
            // Dropdown pour les items avec sous-menu
            <Dropdown key={item.title}>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    {item.title}
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu aria-label={item.title} className="w-[340px]" itemClasses={{ base: "gap-4" }}>
                {item.subItems.map((subItem) => (
                  <DropdownItem key={subItem.title} startContent={subItem.icon}>
                    <Link href={subItem.href}>{subItem.title}</Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          ) : (
            // Simple NavbarItem pour les items sans sous-menu
            <NavbarItem key={item.title}>
              <Link href={item.href}>{item.title}</Link>
            </NavbarItem>
          )
        ))}
      </NavbarContent>

      {/* Bouton de demande */}
      <DrawOutlineButton href="/reservation"> 
        <p className="text-base">Une demande particulière</p>
        <PiArrowRightThin className="ml-2 h-4 w-4" />
      </DrawOutlineButton>
    </Navbar>
  );
}

export default CustomNav;
