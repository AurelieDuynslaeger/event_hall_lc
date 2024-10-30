"use client"
import React from 'react'
import { useState, useRef } from 'react';
import { useParams } from "next/navigation";
import { poiret } from '@/app/font';
import Modal from '@/components/Modal/Modal';
import HebergementsLink from "@/components/HebergementsLink/HebergementsLink"
import Image from 'next/image';
import { PiBathtubThin, PiBedThin, PiCigaretteSlashThin, PiCoffeeThin, PiHairDryerThin, PiPersonLight, PiResizeThin, PiSwimmingPoolThin, PiThermometerHotThin, PiTowelThin, PiWheelchairThin, PiWifiHighThin } from "react-icons/pi";
import { TbAirConditioning } from 'react-icons/tb';

const hebergementData = {
    manoir: {
        title: "Le Manoir",
        rooms: [
            {
                roomName: "La Suite Saint-Créac",
                src:"/manoir_suitecreac/overview_saint_creac_suite.jpg",
                color: "#e39c7e",
                desc: "Situées au 1er étage du Manoir, vous y accédez par le hall d'accueil puis l'escalier du salon, ou directement par l'escalier de la tour, Une indépendance totale! Charme et authenticité sont au rendez-vous, avec sa cheminée du XVième siècle classée, ses murs en pierre, ses portes en chêne et ses poutres centenaires. Vous disposez sur plus de 50 m², d'une chambre principale avec une literie de 180*200 haute qualité (possibilité de séparer en 2 lits de 90 à la demande), d'une vaste salle d'eau (double vasques, baignoire balnéothérapie, WC privatif), d'un espace salon avec vue sur la vallée (canapé convertible, literie pouvant accueillir 2 personnes complémentaires - voir tarif supplémentaire)",
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
                    "/manoir_suitecreac/view_1.jpg",
                    "/manoir_suitecreac/view_2.jpg",
                    "/manoir_suitecreac/view_3.jpg",
                    "/manoir_suitecreac/view_4.jpg",
                    "/manoir_suitecreac/view_5.jpg",
                    "/manoir_suitecreac/view_6.jpg",
                    "/manoir_suitecreac/view_7.jpg"
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
    const [selectedRoom, setSelectedRoom] = useState(null);
    const detailsRef = useRef(null); 

    // Récupère les données en fonction du slug
    const hebergement = hebergementData[slug];

    if (!hebergement) {
        return <div>Hébergement non trouvé</div>;
    }

    const handleRoomClick = (room) => {
        setSelectedRoom(room);
        // Scroller vers le div des détails
        detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='container m-auto py-8 mt-48'>
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
  
            <div ref={detailsRef} className="mt-10">
                {selectedRoom && (
                    <div className="bg-[#faece6] rounded-xl">
                    <div className="mx-auto max-w-7xl grid grid-cols-1 gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32">
                      
                   {/* Section de la galerie d'images */}
                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                   
                    {/* Deux images en colonne au centre */}
                    <div className="hidden lg:grid lg:grid-cols-4 lg:gap-y-8">
                        {selectedRoom.gallery.map((image, index) => (
                        <div key={index} className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <Image
                            src={image}
                            alt={`Image ${index + 2} de ${selectedRoom.roomName}`}
                            className="h-full w-full object-cover object-center"
                            width={300}
                            height={200}
                            />
                        </div>
                        ))}
                    </div>
                    </div>
                      {/* Section des informations principales */}
                      <div>
                        <h2 className={`${poiret.className} text-3xl font-bold`}>{selectedRoom.roomName}</h2>
                        <p className="mt-4 leading-6">{selectedRoom.desc}</p>
                
                        {/* Section des prestations avec icônes */}
                        <div className="mt-6">
                          <h3 className="text-xl font-semibold mb-4 sr-only">Prestations</h3>
                          <hr className='border-1 border-[#d6815d] mb-4' />
                          <div className="grid grid-cols-4 gap-4">
                            <div className="flex items-center space-x-2">
                              {selectedRoom.prestationsIcons.surface.icon}
                              <span>{selectedRoom.prestationsIcons.surface.desc}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              {selectedRoom.prestationsIcons.max.icon}
                              <span>{selectedRoom.prestationsIcons.max.desc}</span>
                            </div>
                            {selectedRoom.prestationsIcons.facilities.map((facility, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                {facility.icon}
                                <span>{facility.desc}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                  
                        {/* Section des informations supplémentaires */}
                        <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-4 sr-only">Tarifs</h3>
                        <hr className='border-1 border-[#d6815d] mb-4' />
                          <p className="font-semibold">{selectedRoom.pay}</p>
                          <p>{selectedRoom.off}</p>

                          
                          
                          <h3 className="text-lg font-semibold mt-4">Tarifs</h3>
                          <ul className="list-disc list-inside">
                            {selectedRoom.tarifs.map((tarif, index) => (
                              <li key={index}>Juin-Août: {tarif.juinaout24} / Avril-Mai, Sept-Oct: {tarif.avrmaiseptoct24} / Nov-Mars: {tarif.novtomars}</li>
                            ))}
                          </ul>
                          <h3 className="text-lg font-semibold mt-4">Options supplémentaires</h3>
                          <ul className="list-disc list-inside">
                            {selectedRoom.plus.map((option, index) => (
                              <li key={index}>Nuit supplémentaire: {option.addNight}, Petit-déjeuner anglais: {option.englshB}, Hamam: {option.hamam}, Navette: {option.navette}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                  
                    </div>
                  </div>
                  
                )}
            </div>
        </div>
    )
}

export default HebergementPage