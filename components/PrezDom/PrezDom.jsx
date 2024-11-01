"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { poiret } from '@/app/font'
import DrawOutlineButton from '../DrawOutlineButton/DrawOutlineButton'
import { PiHeartStraightThin } from 'react-icons/pi'

const PrezDom = () => {
  return (
    <section
      className="mx-auto max-w-5xl px-4 pt-80 pb-24 text-black"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-3xl text-center m-10"
      >
        Olivier et Didier ont le plaisir de vous accueillir au domaine <span className={`${poiret.className} mb-20 text-8xl font-bold text-center`}>Lassalle Saint Créac</span>.
      </motion.h1>
    
      <motion.p 
       initial={{ y: 48, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ ease: "easeInOut", duration: 0.75 }}
        className='text-2xl my-6'>
        A la frontière du Gers et du Lot-et-Garonne, le Domaine s&apos;étend sur plus de 13 hectares.  Vos hôtes vous accueillent dans un Corps de garde du XV siècle et ses dépendances, alliant histoire, charme et authenticité.
      </motion.p>

      <motion.p  
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className='text-2xl my-6'>
        Vous profiterez, le temps d&apos;une nuit, d’un week-end, d’une semaine et plus, d&apos;un environnement d&apos;exception, champêtre, calme et reposant, au sein d&apos;une nature préservée.  
      </motion.p>

      <motion.p  
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className='text-2xl my-6'>
        Un site idyllique pour vos cérémonies, Mariage, réunion de famille, séminaire professionnel ou un week-end dans la région !
      </motion.p>
      <DrawOutlineButton href="/hebergements" className="w-1/5 m-auto"> 
            <PiHeartStraightThin className="mr-2 h-6 w-6"/>
            <p>Découvrir</p>
          </DrawOutlineButton>

    </section>
  )
}

export default PrezDom