import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';

const ServiceDesc = ({paragraph}) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start 0.8", "start 0.10"]
    })

    const words = paragraph.split(" ")

  return (
    <>
        <p 
            ref={container}         
            className="flex text-4xl leading-[4rem] p-8 max-w-[1280px] text-primary flex-wrap m-auto"
            >
               {
                words.map( (word, i) => {
                const start = i / words.length
                const end = start + (1 / words.length)
                return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
                })
                }
        </p>
    </>
  )
}

export default ServiceDesc

const Word = ({children, progress, range}) => {
    const amount = range[1] - range[0]
  const step = amount / children.length
  return (
    <span className="relative ml-4 mr-4">
      {
        children.split("").map((char, i) => {
          const start = range[0] + (i * step);
          const end = range[0] + ((i + 1) * step)
          return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>
        })
      }
    </span>
  )
}

const Char = ({children, progress, range}) => {
    const opacity = useTransform(progress, range, [0,1])
    return (
      <span>
        <span className="absolute opacity-20">{children}</span>
        <motion.span style={{opacity: opacity}}>{children}</motion.span>
      </span>
    )
  }