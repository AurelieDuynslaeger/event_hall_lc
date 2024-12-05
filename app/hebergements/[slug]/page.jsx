"use client"
import React, { useState, useRef } from 'react'
import { useParams } from "next/navigation";
import Modal from '@/components/Modal/Modal';
import HebergementsLink from "@/components/HebergementsLink/HebergementsLink"

const hebergementData = {
    cloudline: {
        title: "Cloudline Hub",
        rooms: [
            {
                roomName: "The Overlook Cabin",
                key: "overlook_cabin",
                src:"/bedroom_detail.jpeg",
                color: "#e39c7e",
                desc: [
                    "Situées au 1er étage du Manoir, vous y accédez par le hall d'accueil puis l'escalier du salon, ou directement par l'escalier de la tour, Une indépendance totale!", 
                    "Charme et authenticité sont au rendez-vous, avec sa cheminée du XVième siècle classée, ses murs en pierre, ses portes en chêne et ses poutres centenaires.",
                    "Vous disposez sur plus de 50 m², d'une chambre principale avec une literie de 180*200 haute qualité (possibilité de séparer en 2 lits de 90 à la demande), d'une vaste salle d'eau (double vasques, baignoire balnéothérapie, WC privatif)", 
                    "Un superbe espace salon avec vue sur la vallée (canapé convertible, literie pouvant accueillir 2 personnes complémentaires - voir tarif supplémentaire)"],
            },
            {
                roomName: "The Pine Suite",
                key: "pine_suit",
                src:"/view_3.avif",
                color: "#e39c7e",
                desc: [
                    "Situées au rez-de-chaussée du Manoir, vous y accédez directement par la cour principale, le hall d'accueil ou par la tour, Une indépendance totale!", 
                    "Charme et authenticité sont au rendez-vous, avec ses murs en pierre, ses portes en chêne et ses poutres centenaires. Vous disposez sur plus de 50 m², d'une chambre principale avec une literie de 180*200 haute qualité (possibilité de séparer en 2 lits de 90 à la demande)", 
                    "Une vaste salle d'eau (double vasques, grande douche à l'italienne, WC privatif) et d'un espace salon en contre-bas  (canapé convertible, literie de pouvant accueillir 2 personnes complémentaires - voir tarif supplémentaire).", 
                    "Le tout donnant sur votre terrasse privative avec vue sur la vallée."
                ],
            },
            {
                roomName: "The Eagle’s Nest",
                key: "eagle_nest",
                src:"/view_18.jpeg",
                color: "#e39c7e",
                desc: [
                    "Situées au 1er étage du Manoir, vous y accédez par le hall d'accueil puis l'escalier du salon.", 
                    "Charme et authenticité sont au rendez-vous, avec ses murs en pierre, ses portes en chêne et ses poutres centenaires. Vous disposez sur plus de 35 m², d'une chambre avec une literie de 160*200 haute qualité (possibilité de séparer en 2 lits de 80 à la demande).", 
                    "Une vaste salle d'eau (vasque, grande douche à l'italienne, WC privatif) et d'un dressing avec vue sur la vallée.", 
                    "Vous avez un accès direct à la bibliothèque et l'espace salon du 1er étage, à disposition de nos hôtes."
                ],
            },
        ]
    },
    bayside: {
        title: "Bayside Hub",
        rooms: [
            {
                roomName: "The Overlook Cabin",
                key: "overlook_cabin",
                src:"/bedroom_detail.jpeg",
                color: "#e39c7e",
                desc: [
                    "Situées au 1er étage du Manoir, vous y accédez par le hall d'accueil puis l'escalier du salon, ou directement par l'escalier de la tour, Une indépendance totale!", 
                    "Charme et authenticité sont au rendez-vous, avec sa cheminée du XVième siècle classée, ses murs en pierre, ses portes en chêne et ses poutres centenaires.",
                    "Vous disposez sur plus de 50 m², d'une chambre principale avec une literie de 180*200 haute qualité (possibilité de séparer en 2 lits de 90 à la demande), d'une vaste salle d'eau (double vasques, baignoire balnéothérapie, WC privatif)", 
                    "Un superbe espace salon avec vue sur la vallée (canapé convertible, literie pouvant accueillir 2 personnes complémentaires - voir tarif supplémentaire)"],
            },
            {
                roomName: "The Pine Suite",
                key: "pine_suit",
                src:"/view_3.avif",
                color: "#e39c7e",
                desc: [
                    "Situées au rez-de-chaussée du Manoir, vous y accédez directement par la cour principale, le hall d'accueil ou par la tour, Une indépendance totale!", 
                    "Charme et authenticité sont au rendez-vous, avec ses murs en pierre, ses portes en chêne et ses poutres centenaires. Vous disposez sur plus de 50 m², d'une chambre principale avec une literie de 180*200 haute qualité (possibilité de séparer en 2 lits de 90 à la demande)", 
                    "Une vaste salle d'eau (double vasques, grande douche à l'italienne, WC privatif) et d'un espace salon en contre-bas  (canapé convertible, literie de pouvant accueillir 2 personnes complémentaires - voir tarif supplémentaire).", 
                    "Le tout donnant sur votre terrasse privative avec vue sur la vallée."
                ],
            },
            {
                roomName: "The Eagle’s Nest",
                key: "eagle_nest",
                src:"/view_18.jpeg",
                color: "#e39c7e",
                desc: [
                    "Situées au 1er étage du Manoir, vous y accédez par le hall d'accueil puis l'escalier du salon.", 
                    "Charme et authenticité sont au rendez-vous, avec ses murs en pierre, ses portes en chêne et ses poutres centenaires. Vous disposez sur plus de 35 m², d'une chambre avec une literie de 160*200 haute qualité (possibilité de séparer en 2 lits de 80 à la demande).", 
                    "Une vaste salle d'eau (vasque, grande douche à l'italienne, WC privatif) et d'un dressing avec vue sur la vallée.", 
                    "Vous avez un accès direct à la bibliothèque et l'espace salon du 1er étage, à disposition de nos hôtes."
                ],
            },
        ]
    },
};

const HebergementPage = () => {
    const params = useParams();
    const { slug } = params;
    const [modal, setModal] = useState({active: false, index: 0})
    const roomsRef = useRef(null);

    const hebergement = hebergementData[slug];

    if (!hebergement) {
        return <div>Hébergement non trouvé</div>;
    }

    return (
        <div ref={roomsRef} className='container mx-auto my-auto'>
            <h1  className="font-stretch text-9xl font-bold text-left m-10">{hebergement.title}</h1>
            {hebergement.rooms?.map((room, index) => (
                <HebergementsLink 
                    key={index} 
                    index={index} 
                    title={room.roomName} 
                    setModal={setModal} 
                    roomDetailUrl={`/hebergements/${slug}/${room.key}`}
                />
            ))}
            <Modal modal={modal} projects={hebergement.rooms}/>
        </div>
    )
}

export default HebergementPage