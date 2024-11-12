import React from 'react'
import { twMerge } from 'tailwind-merge'
import Block from './Block'

const SocialLink = ({ icon, color, url }) => {
  return (
    
    <Block
    whileHover={{
      rotate: "2.5deg",
      scale: 1.1,
    }}
    className={twMerge("col-span-6 md:col-span-3 rounded-lg p-6", color)}
  >
   <a href={url} className="grid h-full place-content-center text-3xl text-background">
            {icon}
        </a>
  </Block>
  )
}

export default SocialLink