"use client"
import React from "react";
import { useParams } from "next/navigation";
import { useSpring } from "motion/react";
import ServicesGallery from "@/components/ServicesGallery/ServicesGallery"
import ServicesDescription from '@/components/ServicesDescription/ServicesDescription'
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll"
import RoomPage from "./[name]/page";

const serviceData = {
    receptions: {
        title: "Nos salles de réceptions",
        description: "Séminaire, Réunion de famille, Mariage : un lieu d'exception pour magnifier cette célébration! Vous pourrez apprécier l'Orangerie et ses terrasses avec vue panoramique sur la vallée et le Domaine,ou la salle Saint-Loup (petit espace réception de 50m², 30 personnes assises).",
        links: [
            { name: "L'Orangerie", href: "/services/receptions/orangerie" },
            { name: "La salle Saint-Loup", href: "/services/receptions/saintloup" },
        ],
    },
    tablehote: {
        title: "Table d'hôte",
        description: "Exclusivement pour le diner, Olivier vous prépare des repas du terroir ou à thème, selon la saison, ses envies et celles de nos Hôtes. Une cuisine simple, sans chi-chi, familiale, pour un plaisir partagé. (Merci à nos hôtes de nous prévenir de leurs éventuels régimes ou allergies, ainsi que leur préférences alimentaires - Végé. etc.) Le repas du diner par personne : 25.00€ TTC. (Compris apéritif, boissons et café ou infusion)",
        img:[
          {name: "Step into a warm and welcoming space", handle: "view_1"},
          {name: "Experience dishes crafted from local produce", handle: "view_2"},
          {name: "Enjoy moments of connection around the table", handle: "view_3"},
          {name: "Leave nourished and inspired for your next step.", handle: "view_4"},
        ]
    },
    spabienetre: {
        title: "Spa et Bien-être",
        description: "Vous aurez accès à notre piscine couverte (10X5) chauffée à 27° toute l'année. Vous pourrez profiter de sa plage balnéo avec ses 4 buses de massage (allongé). Le banc de massage balnéo de 4 buses assis. Ses deux canons à eau de massage, relaxation garantie! La piscine du domaine partagée entre les chambres d'hôtes, les Gîtes et le dortoir. Grâce à ses grandes baies en accordéon, la piscine s'ouvre entièrement sur les terrasses et les espaces verts,  mais peut aussi être refermée en cas d'intempéries ou en mi-saison, permettant de profiter de ses bienfaits toute l'année. Dès 2025, Le Spa Jaccuzi 5 places est en accès libre toute l'année, pour une détente assurée. Directement accessible de la terrasse de la piscine, vous pourrez vous relaxer en pleine nature, sous l'ombrière en toile de lin pour votre plus grand confort. Aromathérapie, chromothérapie triple (projecteur led, spa lumineux). Musicothérapie Bluetooth relaxante. SPA Archipel® GT5 balboa. Gamme professionnel thérapeutique 2m15 * 2m15. 100 jets (86 jets de massage + 14 buses d'air chaud). 5 personnes (2 places allongées et 3 places assises). Sauna et Hamman dès 2025, Profitez de l'espace hammam et sauna avec une vue panoramique sur la vallée, Relaxez-vous en pleine nature, vous pouvez vous détendre et vous ressourcer en toute intimité (sur réservation pour plus d'intimité et de confort). Combiné 8 personnes maximum: Côté Sauna : 4 personnes maxi, boiserie extérieur et intérieur en Cèdre rouge du Canada. Côté Hammam : 4 personnes maxi, Acrylique thermoformé Aristech'blanc effet marbre, poêle finlandais HARVIA. Sauna & Hammam 7.50€ TTC par personne, la céance de 30 minutes, sur réservation",
        img:[
          {name: "chauffée à 27° toute l'année", handle: "view_1"},
          {name: "s'ouvre entièrement sur les terrasses", handle: "view_2"},
          {name: "venez vous relaxer en pleine nature", handle: "view_3"},
          {name: "sous une ombrière en toile de lin", handle: "view_4"},
          {name: "et profiter de ses bienfaits toute l'année", handle: "view_5"},
          {name: "...dès 2025, Spa Jaccuzi 5 places", handle: "view_6"},
        ]
    },
};


const ServicePage = () => {
    const { slug } = useParams();
    const spring = {
      stiffness: 150,
      damping: 15,
      mass: 0.1
    }
    
    const mousePosition = {
      x: useSpring(0, spring),
      y: useSpring(0, spring)
    }
    
    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const targetX = clientX - (window.innerWidth / 2 * 0.25);
      const targetY = clientY - (window.innerWidth / 2 * 0.30);
      mousePosition.x.set(targetX);
      mousePosition.y.set(targetY);
    }

    const service = serviceData[slug];

    if (!service) {
        return <div>Hébergement non trouvé</div>;
    }

    return (
      <>
        {slug === "receptions" ? (
          <>
            <RoomPage />
            </>
        ) : (slug === "tablehote" || slug === "spabienetre") ? (
            <SmoothScroll>
            <section onMouseMove={mouseMove} className="w-4/5 m-auto mt-28">
            {service.img.map(({ handle, name }, i) => (
              <>
                <ServicesGallery mousePosition={mousePosition} handle={handle} slug={slug} key={i} name={name} activeIndex={i}/>
                </>
              ))}
               {service.img && service.img.length > 0 ? (
              <ServicesDescription mousePosition={mousePosition} service={service.img} slug={slug}/>): (
                <p>Aucune description disponible</p>
              )}
              </section>
              </SmoothScroll>
      
        ) : null}
    </>
    )
}

export default ServicePage

