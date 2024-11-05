"use client"
import React from "react";
import { motion } from "framer-motion";
import BounceCard from "@/components/BounceCard/BounceCard"
import CardTitle from "@/components/CardTitle/CardTitle"

import { PiFacebookLogoThin, PiInstagramLogoThin, PiLinkedinLogoThin} from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import VerticalAccordInfos from "@/components/VerticalAccordInfos/VerticalAccordInfos"

const AboutPage = () => {

  return (
    //    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
    //   <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
    //     <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
    //       Informations
    //       <span className="text-slate-400"> essentielles</span>
    //     </h2>
    //     <motion.button
    //       whileHover={{ scale: 1.05 }}
    //       whileTap={{ scale: 0.95 }}
    //       className="whitespace-nowrap rounded-lg bg-[#a25433] px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-[#e39c7e] hover:text-black"
    //     >
    //       Une visite du Domaine ?
    //     </motion.button>
    //   </div>
    //   <div className="mb-4 grid grid-cols-12 gap-4">
    //     <BounceCard className="col-span-12 md:col-span-4">
    //       <CardTitle>Qui Sommes-Nous ?</CardTitle>
    //       <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[#e39c7e] to-[#faece6] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
    //         <figcaption class="mt-10">
    //           <Image class="mx-auto h-30 w-30 rounded-full" src="/domaine/image0.jpeg" alt="" width={80} height={0}/>
    //         </figcaption>
    //       </div>
    //     </BounceCard>
    //     <BounceCard className="col-span-12 md:col-span-8">
    //       <CardTitle>Venir à nous, ou on vient à Vous !</CardTitle>
    //       <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[#e39c7e] to-[#faece6] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
    //         <span className="block text-center font-semibold text-orange-50">
    //         Nous mettons à votre disposition un service navette VIP 7 personnes.
    //         </span>
    //         <span className="block text-center font-semibold text-orange-50">
    //         Prise en charge à Lectoure (chemin de Compostelle, pointage à la cathédrale), la Gare d’Agen ou à Aéroport Toulouse-Blagnac.
    //         </span>
    //         <span className="block text-center font-semibold text-gray-800 text-xs">
    //         rayon de 75 km maximum - tarif à la demande
    //         </span>
    //       </div>
    //     </BounceCard>
    //   </div>
    //   <div className="grid grid-cols-12 gap-4">
    //     <BounceCard className="col-span-12 md:col-span-8">
    //       <CardTitle>Nous Trouver</CardTitle>
    //       {/* bg-gradient-to-br from-[#a25433] to-[#d6815d] */}
    //       <Link href="https://www.google.com/maps/place/Domaine+Lassalle+Saint-Créac/@43.9173699,0.7821338,14z" target="_blank" rel="noopener noreferrer">
    //       <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[url('/domaine/lassallemap.jpg')] bg-cover bg-center bg-no-repeat p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
    //       <span className="block text-center font-semibold text-black backdrop-blur-md p-2">
    //       Domaine Lassalle Saint-Créac, 500 chemin d&apos;en Mansaut, 32380 Saint-Créac, France
    //         </span>
    //       </div>
    //       </Link>
          
    //     </BounceCard>
    //     <BounceCard className="col-span-12 md:col-span-4">
    //       <CardTitle>Nous Suivre</CardTitle>
    //       <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[#e39c7e] to-[#faece6]] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] flex flex-col gap-4">
    //         <span className="block text-center font-semibold text-red-50">
    //           Retrouvez-nous sur
    //         </span>
    //         <div className="w-full flex items-center justify-around">
    //           <Link href="https://www.facebook.com/domaine.lassalle.st.creac" target="_blank" rel="noopener noreferrer" >
    //             <PiFacebookLogoThin className="h-16 w-16 text-white"/>
    //           </Link>
    //           <Link href="https://instagram.com/lassallestcreac/" target="_blank" rel="noopener noreferrer">
    //             <PiInstagramLogoThin className="h-16 w-16 text-white"/>
    //           </Link>
    //          <Link href="https://fr.linkedin.com/in/domaine-lassalle-1b0a58303" target="_blank" rel="noopener noreferrer">
    //           <PiLinkedinLogoThin className="h-16 w-16 text-white"/>
    //          </Link>
    //         </div>
    //       </div>
    //     </BounceCard>
    //   </div>
    // </section>
    <VerticalAccordInfos />
  )
}

export default AboutPage

