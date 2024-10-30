import React from "react";
import Image from "next/image";
import logoLassalleNew from "@/app/assets/LogoLasalleSvg.png";
import { poppins, poiret } from "./font"
import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { PiMapPinLight  } from "react-icons/pi";
import { cn } from "@/lib/utils";

const menuItems = [  
  {title: "Nos Hébergements", href:"/hebergements"},
  {
    title: "Nos Services",
    subItems: [
      { title: "Réceptions", href: "/services/receptions" },
      { title: "Table d'Hôte", href: "/services/tablehote" },
      { title: "Spa - Bien-Être", href: "/services/spabienetre" }
    ],
  },
  {
    title: "À propos",
    subItems: [
      { title: "Remerciements", href: "/apropos/remerciements" },
      { title: "Ils sont venus", href: "/apropos/avis" },
      { title: "Où nous Trouver", href: "/apropos/adresse", icon: <PiMapPinLight /> },
    ],
  },
  { title: "Contact", href: "/contact" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${poppins.className} bg-slate-50`}>
        <div>
          <header className="flex items-center justify-around p-2 fixed left-0 right-0 top-0 z-50">
          <Link href="/" legacyBehavior>
              <a>
                <Image
                  src={logoLassalleNew}
                  alt="lassale-saint-creac logo"
                  width={150}
                  height={150}
                  loading="lazy"
                />
              </a>
            </Link>
            {/* Navigation principale */}
            <NavigationMenu className={`${poiret.className} text-2xl font-bold`}>
              <NavigationMenuList>
                {/* Boucle pour les sections principales */}
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title} className="cursor-pointer">
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger className="text-2xl font-bold">{item.title}</NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-transparent">
                          <ul className="grid w-[450px] gap-3 p-4 md:w-[600px] md:grid-cols-3 lg:w-[700px]">
                            {item.subItems.map((subItem) => (
                              <ListItem key={subItem.title} href={subItem.href} title={subItem.title}>
                                {subItem.title}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link href={item.href} legacyBehavior passHref>
                          <span className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            {item.title}
                          </span>
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </header>

          {/* Contenu de la page */}
          <main  className="bg-slate-50">{children}</main>
        </div>
      </body>
    </html>
  );
}

// Composant ListItem pour les sous-menus
const ListItem = React.forwardRef(({ className, title, icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link ref={ref} {...props}>
          <span
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
          >
            <div className="flex items-center text-sm font-medium leading-none">
              {icon && <span className="mr-2 inline-block text-lg">{icon}</span>} {/* Affichage de l'icône si présente */}
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </span>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
