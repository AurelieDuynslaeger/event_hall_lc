import Image from 'next/image'
import React from 'react'
import { motion} from 'framer-motion';

const ServicesGallery = ({name, slug, handle, mousePosition}) => {
    const { x, y } = mousePosition;


  return (
    <div className="h-[90vh] clip-custom">
        <div className="w-full m-auto relative">
            <Image 
                src={`/${slug}/${handle}/background.jpg`}
                alt="image"
                className='h-auto w-full object-cover'
                width={800}
                height={0}
            />
            
        </div>
        <motion.div className="fixed top-0 overflow-hidden h-1/2 w-1/4 rounded-xl"
        style={{x, y}}>
          <Image 
            src={`/${slug}/${handle}/1.webp`}
            alt="image"
            fill
             className='w-full object-cover'
          />
         
            <motion.p
              initial={{ opacity: 0, y: 20 }}  // Initialisation : invisible et légèrement en bas
              animate={{
                opacity: 1, // Déclencher l'animation quand 'trigger' est true
                y: 0,  // Déclencher l'animation vers le haut
              }}
              className='font-stretch uppercase absolute bottom-1 right-1 text-white text-3xl p-1 rounded-lg'
            >
              {name}
            </motion.p>
        </motion.div>
    </div>
  )
}

export default ServicesGallery