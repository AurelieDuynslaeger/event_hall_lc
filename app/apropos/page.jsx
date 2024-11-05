"use client"
import React from "react";
import { motion } from "framer-motion";
import BounceCard from "@/components/BounceCard/BounceCard"
import CardTitle from "@/components/CardTitle/CardTitle"

import { PiFacebookLogoThin, PiInstagramLogoThin, PiLinkedinLogoThin } from "react-icons/pi";
import Link from "next/link";

const AboutPage = () => {

  return (
       <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
          Informations
          <span className="text-slate-400"> essentielles</span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-[#a25433] px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-[#e39c7e] hover:text-black"
        >
          Une visite du Domaine ?
        </motion.button>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Do a thing</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[#e39c7e] to-[#faece6] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-indigo-50">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Nous rejoindre</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[#d6815d] to-[#e39c7e] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Nous Trouver</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[#a25433] to-[#d6815d] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-emerald-50">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Nous Suivre</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[#71402b] to-[#a25433] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] flex flex-col gap-4">
            <span className="block text-center font-semibold text-red-50">
              Retrouvez-nous sur
            </span>
            <div className="w-full flex items-center justify-around">
              <Link href="https://www.facebook.com/domaine.lassalle.st.creac" target="_blank" rel="noopener noreferrer" >
                <PiFacebookLogoThin className="h-16 w-16 text-white"/>
              </Link>
              <Link href="https://instagram.com/lassallestcreac/" target="_blank" rel="noopener noreferrer">
                <PiInstagramLogoThin className="h-16 w-16 text-white"/>
              </Link>
             <Link href="https://fr.linkedin.com/in/domaine-lassalle-1b0a58303" target="_blank" rel="noopener noreferrer">
              <PiLinkedinLogoThin className="h-16 w-16 text-white"/>
             </Link>
            </div>
          </div>
        </BounceCard>
      </div>
    </section>
  )
}

export default AboutPage

