"use client"
import React, { useEffect, useRef } from 'react'
import { useParams } from "next/navigation";
import ServiceLanding from "@/components/ServiceLanding/ServiceLanding"
import ServiceDesc from "@/components/ServiceDesc/ServiceDesc"
import Lenis from 'lenis';
import { useScroll, useTransform } from 'framer-motion';
import { ReactLenis } from "lenis/dist/lenis-react"

const roomData = {
    receptions: {
        orangerie: {
            title: "L'Orangerie",
            description: "Une surface totale de 360 m² dont 235m² exclusivement réservés à la salle de réception, avec une capacité d'accueil de 200 personnes debout et 190 assises. Les terrasses suspendues de plus de 300m², vous offre vue panoramique sur le Manoir, la vallée et l'étang, face au coucher de soleil à couper le souffle ! L'Orangerie dispose également de 90 places de parking végétalisé (possibilité de places supplémentaires dans la prairie). La salle bénéficie d'un espace traiteur de plus de 50m² avec parking privé, sanitaires et douches séparés.",
            
        },
        saintloup: {
            title: "Salle Saint Loup",
            description: "Exclusivement réservée pour les petits séminaires ou réunions de travail (maximum de 25 personnes) la salle Saint-Loup vous offre 50m² d'intimité au rez-de-chaussée de l'Etable, en toute autonomie. Avec son accès de plein pied donnant sur le parvis de la cour centrale, vous bénéficiez d'un espace que vous pouvez configurer à votre convenance, avec la possibilité de l'ouvrir totalement sur l'extérieur grâce à sa baie vitrée de 5 mètres en accordéon. En complément, nous proposons le service restauration sur place, pause collations, diner, uniquement sur réservation.",
        },
    },
    tablehote: {
        title: "La table d'hôte d'Olivier",
        description: [
            {
                olivier: "Exclusivement pour le diner, Olivier vous prépare des repas du terroir ou à thème, selon la saison, ses envies et celles de nos Hôtes. Une cuisine simple, sans chi-chi, familiale, pour un plaisir partagé. (Merci à nos hôtes de nous prévenir de leurs éventuels régimes ou allergies, ainsi que leur préférences Alimentaires - Végé. etc.)"
            },
            {
                guest: "Recette - Ôde au pays Gersois Par Julien LONGATTE Boulanger Pâtissier à AUBERS (59) Myriam et Julien nous ont fait le plaisir de passer une semaine de vacance au Domaine en août 2024. A cette occasion, Julien LONGATTE, boulanger pâtissier à AUBERS dans le nord (59) nous à concocté un désert maison! un vrais régal!"
            },

        ],
    },
    spabienetre: {
        title: "Spa et Bien-être",
        description: [
            { piscine: "Vous aurez accès à notre piscine couverte (10X5) chauffée à 27° toute l'année. Vous pourrez profiter de sa plage balnéo avec ses 4 buses de massage (allongé) Le banc de massage balnéo de 4 buses assis. Ses deux canons à eau de massage, relaxation garantie! La piscine du domaine partagée entre les chambres d'hôtes, les Gîtes et le dortoir. Grace à ses grandes baies en accordéon, la piscine s'ouvre entièrement sur les terrasses et les espaces verts,  mais peut aussi être refermée en cas d'intempéries ou en mi-saison, permettant de profiter de ses bienfaits toute l'année." },
            { spa: "Le Spa - dès 2025 Le Spa Jaccuzi 5 places est en accès libre toute l'année, pour une détente assurée.Directement accessible de la terrasse de la piscine, vous pourrez vous relaxer en pleine nature, sous l'ombrière en toile de lin pour votre plus grand confort. Aromathérapie, chromothérapie triple (projecteur led, spa lumineux) Musicothérapie Bluetooth relaxante SPA Archipel® GT5 balboa. Gamme professionnel thérapeutique 2m15 * 2m15 100 jets (86 jets de massage + 14 buses d'air chaud) 5 personnes (2 places allongées et 3 places assises)" },
            { saunahamam: "Le Sauna et Hammam dès 2025 Profitez de l'espace hammam et sauna avec une vue panoramique sur la vallée, Relaxez-vous en pleine nature, vous pouvez vous détendre et vous ressourcer en toute intimité (sur réservation pour plus d'intimité et de confort) Combiné 8 personnes maximum: Côté Sauna : 4 personnes maxi, boiserie extérieur et intérieur en Cèdre rouge du Canada Côté Hammam : 4 personnes maxi, Acrylique thermoformé Aristech'blanc effet marbre, poêle finlandais HARVIA Sauna & Hammam 7.50€ TTC par personne, la céance de 30 minutes, sur réservation" },
        ]
    },
};

export default function RoomPage() {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const scaleValues = [scale4, scale5, scale6, scale8, scale9];

    const params = useParams();
    const { slug, name } = params;

    // Récupère les données pour la salle en fonction du slug et du name
    const roomDetails = roomData[slug]?.[name];

    useEffect(()=> {
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    },[])


    if (!roomDetails) {
        return <h1>Room not found</h1>; // Gérer les erreurs si nécessaire
    }

    return (
        <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          syncTouch: true,
        }}
      >
        <div className=' py-8 mt-20 h-[400vh]'>
            <div className='h-[300vh] relative ' ref={container}>
                <ServiceLanding scaleValues={scaleValues} roomName={name}/>
            </div>
            <ServiceDesc paragraph={roomDetails.description} />
        </div>
        </ReactLenis>
    );
}
