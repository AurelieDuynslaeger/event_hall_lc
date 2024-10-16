import React from 'react';
import { PiFacebookLogoThin, PiInstagramLogoThin, PiLinkedinLogoThin, PiGoogleLogoThin, PiPhoneListThin } from 'react-icons/pi';

const footerLinks = [
    { title: "Facebook", href: "https://www.facebook.com/domaine.lassalle.st.creac", icon: <PiFacebookLogoThin className='h-12 w-12'/> },
    { title: "Instagram", href: "https://www.instagram.com/lassallestcreac/", icon: <PiInstagramLogoThin className='h-12 w-12' /> },
    { title: "LinkedIn", href: "https://www.linkedin.com/in/domaine-lassalle-1b0a58303", icon: <PiLinkedinLogoThin className='h-12 w-12' /> },
    { title: "Gmail", href: "mailto:domaine@lassalle-saintcreac.fr", icon: <PiGoogleLogoThin className='h-12 w-12' /> }, // Ajoute "mailto:" pour les liens Gmail
];

const Footer = () => {
    return (
        <footer className="bg-gray-200 text-center py-6">
            <div className="mb-4">
                <ul className="flex justify-evenly space-x-4 mt-2">
                    {footerLinks.map((link) => (
                        <li key={link.title}>
                            <a 
                                href={link.href} 
                                target={link.href.startsWith('http') ? "_blank" : "_self"} // Ouvre dans un nouvel onglet pour les liens externes
                                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined} // Ajoute rel pour les liens externes
                                className="flex items-center space-x-1 text-gray-700 text-xl" // Appliquer les styles de bouton ici
                            >
                                {link.icon}
                            </a>
                        </li>
                    ))}
                </ul>
                {/* Affichage du numéro de téléphone sans lien */}
                {/* <p className="text-gray-700 mt-2 flex items-center justify-center w-1/2"> <PiPhoneListThin className='h-8 w-8'/> : +33 6 81 37 25 05</p> */}
            </div>
            <div>
                <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} Domaine Lassalle Saint-Créac. Développé par Ad. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
