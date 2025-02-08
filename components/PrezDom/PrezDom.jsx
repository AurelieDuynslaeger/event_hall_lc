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
        Une Salle. Votre moment. <span className='text-9xl'>Notre savoir-faire.</span>
      </motion.h1>
    
    <div className='flex max-w-7xl m-auto gap-8 items-end justify-end'>
      <div className='flex flex-col'>
      <motion.h2 
       initial={{ y: 48, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ ease: "easeInOut", duration: 0.75 }}
        className='text-4xl font-sail my-8 max-w-5xl text-right text-pretty m-auto leading-loose'>
        A unique location for your team to disconnect from the ordinary and <Highlight className="text-5xl">reconnect with creativity.</Highlight>
      </motion.h2>

      <motion.p 
       initial={{ y: 48, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ ease: "easeInOut", duration: 0.75 }}
        className='text-4xl text-right font-sail my-8 max-w-5xl text-pretty m-auto leading-loose'>
       Escape the typical meeting room and give your team the space they need to think <Highlight className="text-5xl">outside the box.</Highlight>
      </motion.p>
      </div>
      <DrawOutlineButton href="/hebergements" className="w-1/5 mt-auto mb-8"> 
            <p>Discover</p>
            <PiArrowUpRightThin className="ml-2 h-8 w-8"/>
          </DrawOutlineButton>

    </div>
      
      
    </section>
  )
}

export default PrezDom