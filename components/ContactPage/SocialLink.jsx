import React from 'react'
import {motion} from "framer-motion"
import { twMerge } from 'tailwind-merge'

const SocialLink = ({ icon, color, url }) => {
  return (
    <motion.div
        whileHover={{
            rotate: "2.5deg",
            scale: 1.1,
        }}
        className={twMerge("col-span-6 md:col-span-3 rounded-lg p-6", color)}
    >
        <a href={url} className="grid h-full place-content-center text-3xl text-white">
            {icon}
        </a>
    </motion.div>
  )
}

export default SocialLink