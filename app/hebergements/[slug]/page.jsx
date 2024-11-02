"use client"
import React, { useEffect, useState, useRef } from 'react'
import { useParams } from "next/navigation";
import { poiret } from '@/app/font';
import Modal from '@/components/Modal/Modal';
import HebergementsLink from "@/components/HebergementsLink/HebergementsLink"
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
                desc: [
                    "Situées au 1er étage du Manoir, vous y accédez par le hall d'accueil puis l'escalier du salon, ou directement par l'escalier de la tour, Une indépendance totale!", 
                    "Charme et authenticité sont au rendez-vous, avec sa cheminée du XVième siècle classée, ses murs en pierre, ses portes en chêne et ses poutres centenaires.",
                    "Vous disposez sur plus de 50 m², d'une chambre principale avec une literie de 180*200 haute qualité (possibilité de séparer en 2 lits de 90 à la demande), d'une vaste salle d'eau (double vasques, baignoire balnéothérapie, WC privatif)", 
                    "Un superbe espace salon avec vue sur la vallée (canapé convertible, literie pouvant accueillir 2 personnes complémentaires - voir tarif supplémentaire)"],
                pay: "Tarif TTC la nuitée pour 2 personnes, taxe de séjour en sus",
                off: "Remise de 15% à partir de 3 nuités",
                tarifs: [
                    {
                        juinaout24: "165.00€",
                        avrmaiseptoct24: "145.00€",
                        novtomars: "125.00€"
                    }
                ],
                plus:[
                    {
                        addNight: "30.00€ TTC/pers",
                        englshB: "5.00€",
                        hamam: "7.50€ les 30min de sauna/hammam",
                        navette: "Service Vip Aéroport"
                    }
                ],
            },
            {
                roomName: "La Suite Saint-Clarc",
                key: "saint_clarc",
                src:"/manoir_suiteclar/view_2.jpg",
                color: "#e39c7e",
                desc: [
                    "Situées au rez-de-chaussée du Manoir, vous y accédez directement par la cour principale, le hall d'accueil ou par la tour, Une indépendance totale!", 
                    "Charme et authenticité sont au rendez-vous, avec ses murs en pierre, ses portes en chêne et ses poutres centenaires. Vous disposez sur plus de 50 m², d'une chambre principale avec une literie de 180*200 haute qualité (possibilité de séparer en 2 lits de 90 à la demande)", 
                    "Une vaste salle d'eau (double vasques, grande douche à l'italienne, WC privatif) et d'un espace salon en contre-bas  (canapé convertible, literie de pouvant accueillir 2 personnes complémentaires - voir tarif supplémentaire).", 
                    "Le tout donnant sur votre terrasse privative avec vue sur la vallée."
                ],
                pay: "Tarif TTC la nuitée pour 2 personnes, taxe de séjour en sus",
                off: "Remise de 15% à partir de 3 nuités",
                tarifs: [
                    {
                        juinaout24: "165.00€",
                        avrmaiseptoct24: "145.00€",
                        novtomars: "125.00€"
                    }
                ],
                plus:[
                    {
                        addNight: "30.00€ TTC/pers",
                        englshB: "5.00€",
                        hamam: "7.50€ les 30min de sauna/hammam",
                        navette: "Service Vip Aéroport"
                    }
                ],

            },
            {
                roomName: "La Chambre Saint-Loup",
                key: "saint_loup",
                src:"/manoir_chsaintloup/overwiew_saintloup.jpg",
                color: "#e39c7e",
                desc: [
                    "Situées au 1ier étage du Manoir, vous y accédez par le hall d'accueil puis l'escalier du salon.", 
                    "Charme et authenticité sont au rendez-vous, avec ses murs en pierre, ses portes en chêne et ses poutres centenaires. Vous disposez sur plus de 35 m², d'une chambre avec une literie de 160*200 haute qualité (possibilité de séparer en 2 lits de 80 à la demande).", 
                    "Une vaste salle d'eau (vasque, grande douche à l'italienne, WC privatif) et d'un dressing avec vue sur la vallée.", 
                    "Vous avez un accès direct à la bibliothèque et l'espace salon du 1er étage, à disposition de nos hôtes."
                ],
            },
            {
                roomName: "La Chambre Mansaut",
                key: "mansaut",
                src:"/manoir_chmansaut/overview_mansaut.jpg",
                color: "#e39c7e",
                desc: [
                    "Situées au rez-de-chaussée du Manoir, vous y accédez directement par le hall d'accueil.", 
                    "Charme et authenticité sont au rendez-vous, avec ses murs en pierre, ses portes en chêne et ses poutres centenaires. Vous disposez sur plus de 35 m², d'une chambre avec une literie de 160*200 haute qualité (possibilité de séparer en 2 lits de 80 à la demande).", 
                    "une vaste salle d'eau ( vasque, grande douche à l'italienne, WC privatif) et d'un dressing,  le tout donnant sur votre terrasse privative avec vue sur la vallée.", 
                    "Vous avez un accès direct à la bibliothèque et l'espace salon du 1er étage, à disposition de nos hôtes."
                ],
            }
        ]
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