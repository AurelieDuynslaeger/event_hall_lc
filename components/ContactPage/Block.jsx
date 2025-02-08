import React from 'react'
import {motion} from "motion/react"
import { twMerge } from 'tailwind-merge'

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
        variants={{
            initial: {
                scale: 0.5,
                y: 50,
                opacity: 0,
            },
            animate: {
                scale: 1,
                y: 0,
                opacity: 1,
            },
        }}
        transition={{
            type: "spring",
            mass: 3,
            stiffness: 400,
            damping: 50,
        }}
        className={twMerge(
            "col-span-4 rounded-lg  bg-primary p-6 border border-background",
            className
        )}
        {...rest}
    />
  )
}

export default Block