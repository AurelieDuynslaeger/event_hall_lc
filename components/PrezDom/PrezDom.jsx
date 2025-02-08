"use client"
import React from 'react'
import { motion } from 'motion/react'
import DrawOutlineButton from '../DrawOutlineButton/DrawOutlineButton'
import { PiArrowUpRightThin } from 'react-icons/pi'
import {Highlight} from "@/components/Home/hero-highlight"

const PrezDom = () => {
  return (
    <section
      className="mx-auto max-w-8xl pt-80 pb-0 text-background"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="font-sail mb-12 text-8xl font-bold text-center leading-1"
      >
        Une Salle. <br/>Votre moment. <br/><span className='text-9xl'>Notre savoir-faire.</span>
      </motion.h1>
    
    <div className='w-full flex max-w-7xl m-auto gap-8 items-end justify-end'>
      <div className='w-full flex flex-col items-center justify-center'>
      <motion.h2 
       initial={{ y: 48, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ ease: "easeInOut", duration: 0.75 }}
        className='text-4xl font-sail my-6 max-w-5xl m-auto text-center leading-loose'>
        Célébrez chaque instant<Highlight className="text-5xl">unique,</Highlight>
      </motion.h2>

      <motion.p 
       initial={{ y: 48, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ ease: "easeInOut", duration: 0.75 }}
        className='text-4xl font-sail my-6 max-w-5xl m-auto text-center leading-loose'>
          dans un lieu, aux multiples facettes, conçu pour marquer les événements les plus précieux de
      <Highlight className="text-5xl">votre vie.</Highlight>
      </motion.p>
      <DrawOutlineButton href="/hebergements" className="w-1/3 mt-auto mb-8"> 
            <p>Projetez-vous</p>
            <PiArrowUpRightThin className="ml-2 h-8 w-8"/>
          </DrawOutlineButton>
      </div>
    </div>
      
      
    </section>
  )
}

export default PrezDom