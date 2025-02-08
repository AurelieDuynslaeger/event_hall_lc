"use client"
import React, { useEffect, useRef } from 'react'
import { useParams } from "next/navigation";
import ServiceLanding from "@/components/ServiceLanding/ServiceLanding"
import ServiceDesc from "@/components/ServiceDesc/ServiceDesc"
import Lenis from 'lenis';
import { useScroll, useTransform } from 'motion/react';
import { ReactLenis } from "lenis/dist/lenis-react"
import DrawOutlineButton from '@/components/DrawOutlineButton/DrawOutlineButton';
import { PiArrowUpRightThin } from 'react-icons/pi';

const roomData = {
    receptions: {
        meeting: {
            title: "Our Meeting Rooms",
            description: "Nestled between serene lakes and majestic mountains, Gather and Grow offers the perfect blend of work and relaxation for teams looking to spark innovation and collaboration. Whether you’re planning a weekend retreat or a focused team-building experience, our spaces are designed to inspire. Enjoy rustic, yet stylish interiors featuring natural wood, large windows, and cozy corners. Choose from formal meeting rooms for strategy sessions or more informal spaces that foster open discussions and creativity. Take advantage of our expansive outdoor terraces and lounge areas, where you can step outside to refresh your mind during well-deserved breaks. Our coworking environment is equipped with all the amenities you need to stay productive, while the surrounding natural beauty provides the ideal backdrop to unwind and reconnect with nature.",
            
        },
        teamb: {
            title: "Salle Saint Loup",
            description: "At Gather and Grow, we believe that team building goes beyond the boardroom. Set against the backdrop of stunning lakes, towering mountains, and vast hiking trails, our outdoor spaces offer the perfect environment for companies to come together, strengthen relationships, and build trust in a natural and inspiring setting. Whether your team is embarking on a group hike, participating in a lakeside challenge, or enjoying outdoor activities that promote collaboration and communication, every experience is designed to foster unity and innovation. Our team-building activities are tailored to suit a range of professional goals, from strategic problem-solving challenges to creative workshops in the great outdoors. The breathtaking landscapes of the surrounding mountains provide an energizing atmosphere, while the serene waters of nearby lakes offer a peaceful retreat for reflection and connection.",
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
        return <h1>Room not found</h1>;
    }

    return (
        <ReactLenis
        root
        options={{
          lerp: 0.05,
          syncTouch: true,
        }}
      >
        <div className=' py-8 mt-20 h-[500vh]'>
            <div className='h-[300vh] relative' ref={container}>
                <ServiceLanding scaleValues={scaleValues} roomName={name}/>
            </div>
            <ServiceDesc paragraph={roomDetails.description} />
            <DrawOutlineButton href="/contact" className="w-1/5 m-auto mb-8"> 
            <p>Get Infos</p>
            <PiArrowUpRightThin className="ml-2 h-8 w-8"/>
          </DrawOutlineButton>
        </div>
        </ReactLenis>
    );
}
