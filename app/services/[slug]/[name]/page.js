"use client"
import React from 'react'
import { useParams } from "next/navigation";

const roomData = {
    receptions: {
        orangerie: {
            title: "L'Orangerie",
            description: "Détails spécifiques de l'Orangerie...",
            images: [/* liste d'images de l'Orangerie */],
        },
        saintloup: {
            title: "Salle Saint Loup",
            description: "Détails spécifiques de la Salle Saint Loup...",
            images: [/* liste d'images de la Salle Saint Loup */],
        },
    },
};

export default function RoomPage() {
    const params = useParams();
    const { slug, name } = params;

    // Récupère les données pour la salle en fonction du slug et du name
    const roomDetails = roomData[slug]?.[name];

    if (!roomDetails) {
        return <h1>Room not found</h1>; // Gérer les erreurs si nécessaire
    }

    return (
        <div>
            <h1>{roomDetails.title}</h1>
            <p>{roomDetails.description}</p>
            {/* Afficher les images et autres informations */}
            {/* CTA pour demander un devis */}
        </div>
    );
}
