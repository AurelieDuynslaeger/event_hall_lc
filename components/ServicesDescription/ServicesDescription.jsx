import { useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

const ServicesDescription = ({mousePosition, service, slug }) => {

    const [index, setIndex] = useState(0);
    const {x, y} = mousePosition;
    
  return (
     <div className="h-[90vh] clip-custom">
        <div className="absolute w-2/3 h-full m-auto flex items-start justify-center flex-col gap-4 z-10">
            {
                service.map( ({ name }, i) => {
                  console.log(i);
                  
                    return <p onMouseOver={() => {setIndex(i)}} key={`p${i}`} className='text-5xl cursor-default m-0 uppercase text-primary'>
                        {name}
                    </p>
                })
            }
        </div>
         <motion.div
         className="fixed top-0 overflow-hidden h-1/2 w-1/4 rounded-xl"
         style={{x, y}}
         >
          <Image 
            src={`/${slug}/${service[index].handle}/1.webp`}
            alt="image"
            fill
            className='w-full object-cover opacity-70'
          />
        </motion.div>
    </div>
  )
}

export default ServicesDescription