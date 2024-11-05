import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

const ServicesGallery = ({slug, handle, mousePosition}) => {
    const { x, y } = mousePosition;
  return (
    <div className="h-[100vh] clip-custom">
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
            src={`/${slug}/${handle}/1.jpg`}
            alt="image"
            fill
             className='w-full object-cover'
          />
        </motion.div>

    </div>
  )
}

export default ServicesGallery