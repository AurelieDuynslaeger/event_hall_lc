"use client"
import React from 'react'
import { useState } from 'react';
import { useParams } from "next/navigation";
import { poiret } from '@/app/font';
import Modal from '@/components/Modal/Modal';
import HebergementsLink from "@/components/HebergementsLink/HebergementsLink"

const hebergementData = {
    manoir: {
        title: "Le Manoir",
        rooms: [
            {
                roomName: "La Suite Saint-Créac",
                src:"/manoir_suitecreac/overview_saint_creac_suite.jpg",
                color: "#e39c7e",
                desc: "Situées au 1ier étage du Manoir, vous y accédez par le hall d'accueil puis l'escalier du salon, ou directement par l'escalier de la tour, Une indépendance totale! Charme et authenticité sont au rendez-vous, avec sa cheminée du XVième siècle classée, ses murs en pierre, ses portes en chêne et ses poutres centenaires. Vous disposez sur plus de 50 m², d'une chambre principale avec une literie de 180*200 haute qualité (possibilité de séparer en 2 lits de 90 à la demande), d'une vaste salle d'eau (double vasques, baignoire balnéothérapie, WC privatif), d'un espace salon avec vue sur la vallée (canapé convertible, literie pouvant accueillir 2 personnes complémentaires - voir tarif supplémentaire)",
                pay: "Tarif TTC la nuitée pour 2 personnes, taxe de séjour en sus",
                off: "Remise de 15% à partir de 3 nuités",
                tarifs: [
                    {
                        juinaout24: "165.00€",
                        avrmaiseptoct24: "145.00€",
                        novtomars: "125.00€"
                    }
                ],
                prestationsIcons: 
                    {
                        surface: "50m²",
                        max: "1 à 4 pers. maximum",
                    },
                plus:[
                    {
                        addNight: "30.00€ TTC/pers",
                        englshB: "5.00€",
                        hamam: "7.50€ les 30min de sauna/hammam",
                        navette: "Service Vip Aéroport"
                    }
                ]
            },
            {
                roomName: "La Suite Saint-Clarc",
                src:"/manoir_suiteclar/overview_sinatclar_suite.jpg",
                color: "#e39c7e",
                desc: "",
            },
            {
                roomName: "La Chambre Saint-Loup",
                src:"/manoir_chsaintloup/overwiew_saintloup.jpg",
                color: "#e39c7e",
                desc: "",
            },
            {
                roomName: "La Chambre Mansaut",
                src:"/manoir_chmansaut/overview_mansaut.jpg",
                color: "#e39c7e",
                desc: "",
            }
        ]
        // Ajoute d'autres données nécessaires ici (images, etc.)
    },
    dortoir: {
        title: "Le Dortoir",
        description: "Lieu magique et vue panoramique",
    },
    etable: {
        title: "L'Étable",
        description: "Charpente centenaire et volige en peuplier",
    },
};

const HebergementPage = () => {
    const params = useParams();
    const { slug } = params;
    const [modal, setModal] = useState({active: false, index: 0})

    // Récupère les données en fonction du slug
    const hebergement = hebergementData[slug];

    if (!hebergement) {
        return <div>Hébergement non trouvé</div>;
    }

    return (
        <div className='container m-auto py-8 mt-48'>
            <h1 className={`${poiret.className} text-9xl font-bold text-center m-10`}>{hebergement.title}</h1>
            {hebergement.rooms?.map((room, index) => (
                <HebergementsLink 
                    key={index} 
                    index={index} 
                    title={room.roomName} 
                    setModal={setModal} 
                />
            ))}
            <Modal modal={modal} projects={hebergement.rooms}/>
            {/* Tu peux ajouter ici d'autres infos comme des images, etc. */}

            {/* div qui serait visible que si l'user a clické sur la chambre en question à voir en détail : il survole les links, clik sur la chambre qu'il veut voir et la page défilerait vers cette div qui détaillerait la chambre */}
            <div>

            </div>
        </div>
    )
}

export default HebergementPage