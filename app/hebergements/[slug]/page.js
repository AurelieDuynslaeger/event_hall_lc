"use client"
import React from 'react'
import { useParams } from "next/navigation";

const hebergementData = {
    manoir: {
        title: "Le Manoir",
        description: "Le Manoir est un hébergement magnifique...",
        // Ajoute d'autres données nécessaires ici (images, etc.)
    },
    dortoir: {
        title: "Le Dortoir",
        description: "Le Dortoir offre un cadre confortable...",
    },
    etable: {
        title: "L'Étable",
        description: "L'Étable est un hébergement rustique...",
    },
};

const HebergementPage = () => {
    const params = useParams();
    const { slug } = params;

    // Récupère les données en fonction du slug
    const hebergement = hebergementData[slug];

    if (!hebergement) {
        return <div>Hébergement non trouvé</div>;
    }

    return (
        <div>
            <h1>{hebergement.title}</h1>
            <p>{hebergement.description}</p>
            {/* Tu peux ajouter ici d'autres infos comme des images, etc. */}
        </div>
    )
}

export default HebergementPage