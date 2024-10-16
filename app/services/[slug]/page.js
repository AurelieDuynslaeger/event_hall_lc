"use client"
import React from 'react'
import { useRouter, useParams } from "next/navigation";

const serviceData = {
    receptions: {
        title: "Nos réceptions",
        description: "lorem ipsum RECEPTIONS",
        links: [
            { name: "L'Orangerie", href: "/services/receptions/orangerie" },
            { name: "Salle Saint Loup", href: "/services/receptions/saintloup" },
        ],
        // Ajoute d'autres données nécessaires ici (images, etc.)
    },
    tablehote: {
        title: "Table d'hôte",
        description: "lorem ipsum TABLE HOTE",
    },
    spabienetre: {
        title: "Spa et Bien-être",
        description: "lorem ipsum SPA",
    },
};

const ServicePage = () => {
    const router = useRouter(); // Utilise le hook useRouter
    const { slug } = useParams();

    // Récupère les données en fonction du slug
    const service = serviceData[slug];

    if (!service) {
        return <div>Hébergement non trouvé</div>;
    }

    return (
        <div>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            {/* Tu peux ajouter ici d'autres infos comme des images, etc. */}
            {service.links && service.links.length > 0 && (
                <ul>
                    {service.links.map((link) => (
                        <li key={link.name}>
                            <button onClick={() => router.push(link.href)}>
                                {link.name}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ServicePage