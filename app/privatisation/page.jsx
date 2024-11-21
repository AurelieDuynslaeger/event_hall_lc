"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import DrawOutlineButton from "@/components/DrawOutlineButton/DrawOutlineButton";
import { PiArrowRightThin, PiPhoneCallThin } from "react-icons/pi";
import { cinzel } from "../font";

const content = [
    {
        title : "Privatiser le Domaine",
        desc : "Nous avons conçu ce lieu comme une maison de famille, dans laquelle vous recevrez vos proches et amis le temps d’un week-end ou plus.Pour cela, nous vous proposons la réservation exclusive du Domaine, du samedi 9 heures au dimanche 18 heures. Nous nous engageons à vous réserver l'exclusivité du Domaine sur la période de votre choix à la demande. Vous bénéficiez d’un usage exclusif des équipements (piscine, balnéo, sauna, hammam, jacuzzi) des 13 hectares de prairies, étang et bois pour les photos, balades, organisation de jeux , etc.",
        content: (
            <div className="h-full w-full flex items-center justify-cente">
                <Image
                    src="/privatisation/mariés.jpg"
                    alt="Couple de jeune mariés, Domaine Lassalle Saint Créac, Cérémonie"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
                </div>
        )
    },
   {
        title: "Les Espaces",
        desc: "Le Domaine vous propose ses parvis et terrasses, la salle Saint-Loup et l’Orangeraie, un espace de réception complet (Salles, cuisine traiteur, sanitaires PMR normé,etc.) dans un cadre exceptionnel. Vous pouvez organiser votre événement comme vous le souhaitez. Par exemple, organiser des buffets à thèmes sur les parvis du domaine pour les vins d’honneurs, vos invités pouvant se diriger ensuite vers l’Orangeraie et disposer de la salle Saint-Loup pour les enfants. Plan de masse du Domaine des différents espaces de réception détaillés page suivante et leur capacité d'accueil. (La lettre correspond à l'emplacement des différents espaces sur le plan, détaillés page suivante)",
        content: (
            <div className="h-full w-full flex items-center justify-center">
                <Image
                    src="/privatisation/plandemasse.png"
                    alt="Privatisation image"
                    objectFit="cover"
                    className="rounded-lg h-auto"
                    width={1300}
                    height={0}
                />
                </div>
        )
    },
    {
        title: "Les Hébergements",
        desc: "Capacité modulable de 32 à 42 couchages sur l’ensemble du Domaine. Le Manoir (capacité de couchage de 8 à 12 personnes), Le Dortoir (capacité de couchage de 14 personnes), L’Étable (capacité de couchage de 8 à 14 personnes), Le Studio (capacité de couchage de 2 personnes).",
        content: (

            <div class="w-full flex flex-wrap items-center justify-center bg-background gap-2">
        <div>
        <Image src="/manoir_chmansaut/view_1.jpg" width={300} height={0} class="h-auto max-w-full" alt="Photo de la chambre Mansaut, Domaine Lassale Saint Créac, Réceptions, Mariage"/>
        </div>
        <div>
        <Image src="/manoir_chsaintloup/overwiew_saintloup.jpg" width={300} height={0} class="h-auto max-w-full" alt="Photo de la chambre Mansaut, Domaine Lassale Saint Créac, Réceptions, Mariage"/>
        </div>
        <div>
        <Image src="/manoir_suiteclar/view_6.jpg" width={300} height={0} class="h-auto max-w-full" alt="Photo de la chambre Mansaut, Domaine Lassale Saint Créac, Réceptions, Mariage"/>
        </div>
        <div>
        <Image src="/manoir_suitecreac/overview_saint_creac_suite.jpg" width={300} height={0} class="h-auto max-w-full" alt="Photo de la chambre Mansaut, Domaine Lassale Saint Créac, Réceptions, Mariage"/>
        </div>
    </div>
            
        )
    },
   {
        title: "Equipements et Services",
        desc: "Prestation hôtelière incluse: linge de lit et de toilette. LA PISCINE : Entièrement fermée et ouvrable en totalité sur les terrasses et pelouses, bassin de 5m sur 10m avec volet de sécurité, Espace balnéothérapie (4 buses allongé, 4 buses assis), 2 canons à eau (massage des épaules). La piscine est totalement close et non accessible pendant la réception. LE SAUNA-HAMMAM (début 2025). Logé dans le bâtiment annexe du parvis du Manoir, vous profiterez de ce lieu magique avec une vue à 180° sur la vallée. Une totale intimité dans un univers bucolique et reposant. Sauna 4 personnes - Hammam 4 personnes. Douche à disposition ainsi que le linge de toilette et peignoirs. LE SPA-JACUZZI (début 2025). Dans le prolongement de la terrasse piscine, profitez d’un moment de relaxation, seul ou entre amis. Spa professionnel thérapeutique BALBOA de 5 personnes. Aromathérapie, chromothérapie, Musicothérapie Bluetooth.",
        content: (

            <div class="w-full flex flex-wrap items-center justify-center bg-background gap-2">
        <div>
        <Image src="/spabienetre/view_1/background.jpg" width={300} height={0} class="h-auto max-w-full" alt="Photo de la chambre Mansaut, Domaine Lassale Saint Créac, Réceptions, Mariage"/>
        </div>
        <div>
        <Image src="/domaine/about3.jpg" width={300} height={0} class="h-auto max-w-full" alt="Photo de la chambre Mansaut, Domaine Lassale Saint Créac, Réceptions, Mariage"/>
        </div>
        <div>
        <Image src="/spabienetre/view_6/1.jpg" width={300} height={0} class="h-auto max-w-full" alt="Photo de la chambre Mansaut, Domaine Lassale Saint Créac, Réceptions, Mariage"/>
       
        </div>
        <div>
        <Image src="/spabienetre/view_6/background.jpg" width={300} height={0} class="h-auto max-w-full" alt="Photo de la chambre Mansaut, Domaine Lassale Saint Créac, Réceptions, Mariage"/>
        </div>
    </div>
            
        )
    },
    {
        title: "Les Tarifs",
        desc: "Nous avons privilégié la réservation exclusive du Domaine pour ces évènements familiaux, mais il est aussi possible de dissocier la location de l'Orangerie de celle des 40 couchages (chambres & gîtes). Nos tarifs 2024 - réservation exclusive du Domaine incluent: - La réservation exclusive du Domaine du samedi 9h au dimanche 18h. -L’Orangerie et ses terrasses, accès dès le vendredi 10h (décoration, traiteur etc.). -La salle Saint-Loup. -Une nuitée du samedi au dimanche (44 couchages prestation hôtelière incluse : linge de lit et de toilette).",
        content: ( 
            <div className="h-full w-full flex items-center justify-center p-8 bg-secondary">
               <ul role="list" class="divide-y divide-gray-100">
                    <li class="flex justify-between gap-x-6 py-3">
                        <div class="flex min-w-0 gap-x-4">
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm/6 font-semibold text-primary">Haute Saison</p>
                            <p class="mt-1 truncate text-xs/5 text-background">Mai à Septembre</p>
                        </div>
                        </div>
                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p class="text-sm/6 text-primary">7 500€ TTC</p>
                        </div>
                    </li>
                    <li class="flex justify-between gap-x-6 py-3">
                        <div class="flex min-w-0 gap-x-4">
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm/6 font-semibold text-primary">Moyenne Saison</p>
                            <p class="mt-1 truncate text-xs/5 text-background">Mars, Avril, Octobre</p>
                        </div>
                        </div>
                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p class="text-sm/6 text-primary">6 500€ TTC</p>
                        </div>
                    </li>
                    <li class="flex justify-between gap-x-6 py-3">
                        <div class="flex min-w-0 gap-x-4">
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm/6 font-semibold text-primary">Basse Saison</p>
                            <p class="mt-1 truncate text-xs/5 text-background">Novembre à Février</p>
                        </div>
                        </div>
                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p class="text-sm/6 text-primary">5 500€ TTC</p>
                        </div>
                    </li>
                    <li class="flex justify-between gap-x-6 py-3">
                        <div class="flex min-w-0 gap-x-4">
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm/6 font-semibold text-primary">Prestations supplémentaires à la demande :</p>
                        </div>
                        </div>
                    </li>
                    <li class="flex justify-between gap-x-6 py-3">
                        <div class="flex min-w-0 gap-x-4">
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm/6 font-semibold text-primary">Petits déjeuner</p>
                            <p class="mt-1 truncate text-xs/5 text-background">Continental | Anglais</p>
                        </div>
                        </div>
                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p class="text-sm/6 text-primary">10€ TTC | 15€ TTC</p>
                        <p class="mt-1 text-xs/5 text-background">prix par personne</p>
                        </div>
                    </li>
                    <li class="flex justify-between gap-x-6 py-3">
                        <div class="flex min-w-0 gap-x-4">
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm/6 font-semibold text-primary">Possibilité sur 3 jours et 2 nuitées ou toute autre demande</p>
                        </div>
                        </div>
                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p class="text-sm/6 text-primary">Nous contacter directement</p>
                        </div>
                    </li>
                    <li class="flex justify-between gap-x-6 py-3">
                        <div class="flex min-w-0 gap-x-4">
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm/6 font-semibold text-primary">Location de salle uniquement ?</p>
                        </div>
                        </div>
                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p class="text-sm/6 text-primary">à partir de 3 500€</p>
                        </div>
                    </li>
                    </ul>
                </div>
        )
    },
    {
        title: "Visite",
        desc: "N'hésitez pas à revenir vers nous pour toute demande complémentaire, nous pouvons aussi vous faire visiter le domaine sur simple demande, soit physiquement ou par vidéo (FacteTime ou autre), nous sommes à votre disposition.",
        content: (
            <div className="h-full w-full bg-[url('/domaine/4.jpg')] bg-cover bg-no-repeat flex flex-col items-center justify-center gap-12 text-white">
                <div className="absolute inset-0 bg-white opacity-65" />
                <DrawOutlineButton href="/hebergements" className="w-2/3 mx-auto"> 
            <p>Booker un appel</p>
            <PiPhoneCallThin className="ml-2 h-6 w-6"/>
          </DrawOutlineButton>
          <DrawOutlineButton href="/contact" className="w-2/3 mx-auto"> 
            <p>Demander un devis</p>
            <PiArrowRightThin className="ml-2 h-6 w-6"/>
          </DrawOutlineButton>
                </div>
        )
    }
]

const PrivatisationPage = ({ contentClassName }) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      // target: ref si vous ne voulez pas l'effet overflow sur le conteneur entier
      container: ref,
      offset: ["start start", "end start"],
    });
    const cardLength = content.length;
   
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      const cardsBreakpoints = content.map((_, index) => index / cardLength);
      const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        return distance < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
      }, 0);
      setActiveCard(closestBreakpointIndex);
    });
   

  return (
    <div
  
      className="h-[90vh] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className={`${cinzel.className} text-2xl font-bold text-primary`}
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-lg text-gray-800 max-w-sm mt-10"
              >
                {item.desc}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "hidden lg:block h-[75vh] w-[740px] rounded-md sticky top-0 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </div>
  )
}

export default PrivatisationPage