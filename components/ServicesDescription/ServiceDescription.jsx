import { useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

const ServiceDescription = ({mousePosition, services, slug}) => {

    const [index, setIndex] = useState(0);
    const {x, y} = mousePosition;

  return (
     <div className="h-[90vh] clip-custom">
        <div className="absolute inset-0 flex items-center justify-center flex-col z-10">
            {
                services.map( ({name}, i) => {
                    return <p onMouseOver={() => {setIndex(i)}} key={`p${i}`} className='text-5xl cursor-default m-0 uppercase text-black'>
                        {name}
                    </p>
                })
            }
        </div>
         <motion.div
         className="fixed top-0 overflow-hidden h-1/3 w-1/4 rounded-xl"
         style={{x, y}}
         >
          <Image 
            src={`/${slug}/${services[index].handle}/background.jpg`}
            alt="image"
            fill
            className='w-full object-cover'
          />
        </motion.div>
    </div>
  )
}

export default ServiceDescription