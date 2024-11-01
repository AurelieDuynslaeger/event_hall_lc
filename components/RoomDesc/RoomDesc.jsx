import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';

const RoomDesc = ({roomDescArray}) => {
  return (
    <div className="relative text-black text-3xl mt-[20vw] ml-[10vw] leading-loose" >
        {
            roomDescArray.map( (phrase, index) => {
                return <AnimatedText key={index}>{phrase}</AnimatedText>
            })
        }
    </div>
  )
}

export default RoomDesc

function AnimatedText({children}) {

  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px 0px" });

  return <motion.p
            ref={textRef}
            className="m-auto relative mt-8 w-2/3 p-4"
            initial={{ opacity: 0, x: -200 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1,
              ease: "easeInOut",
              type: "tween"
            }}
          >
            {children}
          </motion.p>
}