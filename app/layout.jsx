import React from "react";
import Image from "next/image";
import logoLassalleNew from "@/app/assets/LogoLasalleSvg.png";
import Footer from "@/components/Footer/Footer"
import { Button } from "@/components/ui/button"
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
import { PiCalendarDotsThin, PiMapPinLight  } from "react-icons/pi";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Accueil", href: "/" },
  {
    title: "Le Domaine",
    subItems: [
      { title: "Visite Guidée", href: "/domaine" },
    ],
  },
  {
    title: "Nos Hébergements",
    subItems: [
      { title: "Le Dortoir", href: "/hebergements/dortoir" },
      { title: "Le Manoir", href: "/hebergements/manoir" },
      { title: "L'Étable", href: "/hebergements/etable" }
    ],
  },
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
      { title: "Histoire de l'Établissement", href: "/about/histoire" },
      { title: "Qui Sommes-nous", href: "/about/equipe" },
      { title: "Où nous Trouver", href: "/about/localisation", icon: <PiMapPinLight /> },
    ],
  },
  { title: "Contact", href: "/contact" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div>
          <header className="flex items-center justify-around m-2 p-2 border-b-2 border-black">
            <Image src={logoLassalleNew} alt="lassale-saint-creac logo" width={150} height={150} loading="lazy" />
            {/* Navigation principale */}
            <NavigationMenu>
              <NavigationMenuList>
                {/* Boucle pour les sections principales */}
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
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

                {/* CTA Réserver avec icône de calendrier */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/reservation" legacyBehavior passHref>
                    <Button>
                      <PiCalendarDotsThin className="mr-2 h-4 w-4"/> Réserver
                    </Button>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </header>

          {/* Contenu de la page */}
          <main>{children}</main>
          <Footer/>
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
