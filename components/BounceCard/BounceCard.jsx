import React from 'react'
import { motion } from "framer-motion";

const BounceCard = ({className, children}) => {
  return (
    <motion.div
        whileHover={{ scale: 0.95, rotate: "-1deg" }}
        className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-[#fcf6f4] p-8 ${className}`}
      >
        {children}
      </motion.div>
  )
}

export default BounceCard