"use client"
import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import { useParams } from "next/navigation";
import { poiret } from '@/app/font';
import Modal from '@/components/Modal/Modal';
import HebergementsLink from "@/components/HebergementsLink/HebergementsLink"
import { PiBathtubThin, PiBedThin, PiCigaretteSlashThin, PiCoffeeThin, PiHairDryerThin, PiPersonLight, PiResizeThin, PiSwimmingPoolThin, PiThermometerHotThin, PiTowelThin, PiWheelchairThin, PiWifiHighThin } from "react-icons/pi";
import { TbAirConditioning } from 'react-icons/tb';
import RoomDetails from "@/components/RoomDetails/RoomDetails"


const hebergementData = {
    manoir: {
        title: "Le Manoir",
        rooms: [
            {
                roomName: "La Suite Saint-Créac",
                key: "saint_creac",
                src:"/manoir_suitecreac/view_4.jpg",
                color: "#e39c7e",
                desc: ["Situées au 1er étage du Manoir, vous y accédez par le hall d'accueil puis l'escalier du salon, ou directement par l'escalier de la tour, Une indépendance totale!", "Charme et authenticité sont au rendez-vous, avec sa cheminée du XVième siècle classée, ses murs en pierre, ses portes en chêne et ses poutres centenaires.","Vous disposez sur plus de 50 m², d'une chambre principale avec une literie de 180*200 haute qualité (possibilité de séparer en 2 lits de 90 à la demande), d'une vaste salle d'eau (double vasques, baignoire balnéothérapie, WC privatif)", "Un superbe espace salon avec vue sur la vallée (canapé convertible, literie pouvant accueillir 2 personnes complémentaires - voir tarif supplémentaire)"],
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
                        surface: {icon: <PiResizeThin />, desc: "50m²",},
                        max: {icon: <PiPersonLight />, desc: "1 à 4 pers. maximum",},
                        facilities: [
                            {
                                icon: <PiCigaretteSlashThin className="h-6 w-6 text-[#87482d]"/>, desc: "Non fumeur"
                            },
                            {
                                icon: <PiWheelchairThin className="h-6 w-6 text-[#87482d]"/>, desc: "Non PMR"
                            },
                            {
                                icon: <PiWifiHighThin className="h-6 w-6 text-[#87482d]"/>, desc: "Wifi Inlcus"
                            },
                            {
                                icon: <TbAirConditioning className="h-6 w-6 text-[#87482d]"/>, desc: "Climatisation réversible"
                            },
                            {
                                icon: <PiBathtubThin className="h-6 w-6 text-[#87482d]"/>, desc: "Baignoire balnéothérapie"
                            },
                            {
                                icon: <PiBedThin className="h-6 w-6 text-[#87482d]"/>, desc: "Literie de haute qualité 180*200"
                            },
                            {
                                icon: <PiTowelThin className="h-6 w-6 text-[#87482d]"/>, desc: "Linge de lit et de toilette inclus"
                            },
                            {
                                icon:<PiHairDryerThin className="h-6 w-6 text-[#87482d]"/>, desc: "Sèche cheveux"
                            },
                            {
                                icon:<PiCoffeeThin className="h-6 w-6 text-[#87482d]"/>, desc: "Petit déjeuner continental inclus"
                            },
                            {
                                icon:<PiSwimmingPoolThin className="h-6 w-6 text-[#87482d]"/>, desc: "Accès piscine et spa"
                            },
                            {
                                icon:<PiThermometerHotThin className="h-6 w-6 text-[#87482d]"/>, desc: "Accès Hamman et sauna sur réservation"
                            }
                        ]
                    },
                plus:[
                    {
                        addNight: "30.00€ TTC/pers",
                        englshB: "5.00€",
                        hamam: "7.50€ les 30min de sauna/hammam",
                        navette: "Service Vip Aéroport"
                    }
                ],
                gallery:[
                    "/manoir_suitecreac/overview_saint_creac_suite.jpg",
                    "/manoir_suitecreac/view_3.jpg",
                    "/manoir_suitecreac/view_4.jpg",
                    "/manoir_suitecreac/view_7.jpg",
                    "/manoir_suitecreac/view_1.jpg",
                    "/manoir_suitecreac/view_8.jpg",
                    "/manoir_suitecreac/view_5.jpg",
                    "/manoir_suitecreac/view_2.jpg",
                    "/manoir_suitecreac/view_6.jpg",
                ]
            },
            {
                roomName: "La Suite Saint-Clarc",
                key: "saint_clarc",
                src:"/manoir_suiteclar/view_2.jpg",
                color: "#e39c7e",
                desc: "",
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
                        surface: {icon: <PiResizeThin />, desc: "50m²",},
                        max: {icon: <PiPersonLight />, desc: "1 à 4 pers. maximum",},
                        facilities: [
                            {
                                icon: <PiCigaretteSlashThin className="h-6 w-6 text-[#87482d]"/>, desc: "Non fumeur"
                            },
                            {
                                icon: <PiWheelchairThin className="h-6 w-6 text-[#87482d]"/>, desc: "Non PMR"
                            },
                            {
                                icon: <PiWifiHighThin className="h-6 w-6 text-[#87482d]"/>, desc: "Wifi Inlcus"
                            },
                            {
                                icon: <TbAirConditioning className="h-6 w-6 text-[#87482d]"/>, desc: "Climatisation réversible"
                            },
                            {
                                icon: <PiBathtubThin className="h-6 w-6 text-[#87482d]"/>, desc: "Baignoire balnéothérapie"
                            },
                            {
                                icon: <PiBedThin className="h-6 w-6 text-[#87482d]"/>, desc: "Literie de haute qualité 180*200"
                            },
                            {
                                icon: <PiTowelThin className="h-6 w-6 text-[#87482d]"/>, desc: "Linge de lit et de toilette inclus"
                            },
                            {
                                icon:<PiHairDryerThin className="h-6 w-6 text-[#87482d]"/>, desc: "Sèche cheveux"
                            },
                            {
                                icon:<PiCoffeeThin className="h-6 w-6 text-[#87482d]"/>, desc: "Petit déjeuner continental inclus"
                            },
                            {
                                icon:<PiSwimmingPoolThin className="h-6 w-6 text-[#87482d]"/>, desc: "Accès piscine et spa"
                            },
                            {
                                icon:<PiThermometerHotThin className="h-6 w-6 text-[#87482d]"/>, desc: "Accès Hamman et sauna sur réservation"
                            }
                        ]
                    },
                plus:[
                    {
                        addNight: "30.00€ TTC/pers",
                        englshB: "5.00€",
                        hamam: "7.50€ les 30min de sauna/hammam",
                        navette: "Service Vip Aéroport"
                    }
                ],
                gallery:[
                    "/manoir_suiteclar/overview_sinatclar_suite.jpg",
                    "/manoir_suiteclar/view_3.jpg",
                    "/manoir_suiteclar/view_4.jpg",
                    "/manoir_suiteclar/view_7.jpg",
                    "/manoir_suiteclar/view_1.jpg",
                    "/manoir_suiteclar/view_8.jpg",
                    "/manoir_suiteclar/view_5.jpg",
                    "/manoir_suiteclar/view_2.jpg",
                    "/manoir_suiteclar/view_6.jpg",
                ]
            },
            {
                roomName: "La Chambre Saint-Loup",
                key: "saint_loup",
                src:"/manoir_chsaintloup/overwiew_saintloup.jpg",
                color: "#e39c7e",
                desc: "",
            },
            {
                roomName: "La Chambre Mansaut",
                key: "mansaut",
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
    const [selectedRoom, setSelectedRoom] = useState(null);
    const detailsRef = useRef(null); 

    // Récupère les données en fonction du slug
    const hebergement = hebergementData[slug];

    useEffect(() => {
        if (selectedRoom && detailsRef.current) {
            detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [selectedRoom]);

    const handleRoomClick = (room) => {
        setSelectedRoom(room);
        setTimeout(() => {
            if (detailsRef.current) {
                detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100); // Ajustez le délai si nécessaire
    };

    if (!hebergement) {
        return <div>Hébergement non trouvé</div>;
    }

    return (
        <div className='container m-auto py-20 mt-42'>
            <h1 className={`${poiret.className} text-9xl font-bold text-center m-10`}>{hebergement.title}</h1>
            {hebergement.rooms?.map((room, index) => (
                <HebergementsLink 
                    key={index} 
                    index={index} 
                    title={room.roomName} 
                    setModal={setModal} 
                    onClick={() => handleRoomClick(room)}
                />
            ))}
            <Modal modal={modal} projects={hebergement.rooms}/>
  
           
            {selectedRoom && (
            <div ref={detailsRef}>
                <RoomDetails  mainImg={selectedRoom.src} roomDescription={selectedRoom.desc} roomTitle={selectedRoom.roomName} selectedRoom={selectedRoom.key}/>  
            </div>
            )}

        </div>
            
    )
}

export default HebergementPage