'use client';
import { useState } from 'react';
import AboutTitles from '@/components/AboutTitles/AboutTitles';
import AboutDesc from '@/components/AboutDesc/AboutDesc';
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll"
import Image from 'next/image';

const data = [
  {
      title: "Nous trouver",
      description: "Domaine Lassalle Saint-Créac, 500 chemin d'en Mansaut, 32380 Saint-Créac, France",
      speed: 0.6
  },
  {
      title: "VISITER",
      description: "N'hésitez pas à revenir vers nous pour toute demande complémentaire, nous pouvons aussi vous faire visiter le domaine, sans engagement. Le Domaine est référencé sur tous les sites Google Map, Plan Apple, GPS. Accessible sans difficulté à pied, à vélo ou moto, en véhicules de tourismes, en bus etc.",
      speed: 0.6
  },
  {
      title: "Navette VIP",
      description: "Nous mettons à votre disposition un service navette VIP 7 personnes. Prise en charge à Lectoure (chemin de Compostelle, pointage à la cathédrale), la gare d’Agen ou l’aéroport Toulouse-Blagnac.",
      speed: 0.77
  },
  {
      title: "venir à vous",
      description: "Tarifs A/R : Aéroport Toulouse-Blagnac [120kms : 120€ TTC] | Gare férroviaire Agen [106kms : 106€ TTC] | Aéroport Agen La Garenne [98kms : 98€ TTC] | en soit Le km dans un rayon maxi de 75 kms = 1 € TTC",
      speed: 0.9
  },
  {
      title: "NETWORKS",
      description: "Nous sommes présents sur Linkedin, Instagram et Facebook, pour nous suivre c'est par ici",
      speed: 0.9
  },

]

const AboutPage = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  return (
    <SmoothScroll>
            <main className='h-[50vw] mt-[30vh] bg-inherit  relative flex items-center justify-center'>
                <div className="absolute z-0 w-full">
                    <AboutTitles data={data} setSelectedProject={setSelectedProject} />
                    <AboutDesc data={data} selectedProject={selectedProject} />
                </div>
                <Image src="/domaine/about3_1.jpg" alt='Domaine Lassalle Sait Créac' width={800} height={0} className='h-auto object-contain w-full'/>
            </main>
        </SmoothScroll>
  )
}

export default AboutPage

