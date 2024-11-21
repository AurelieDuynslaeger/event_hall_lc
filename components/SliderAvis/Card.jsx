import Image from 'next/image'
import React from 'react'
import { cinzel, montserrat } from '@/app/font'

const Card = ({imgSrc, title, desc, nbStars}) => {
  return (
    <div className="absolute top-1/2 left-1/2 w-full h-[300px] md:h-[500px] rounded-lg transform -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-black">
          <Image src={imgSrc} alt="" className='absolute w-full h-full opacity-75'/>
          <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]">
            <p className={`${montserrat.className} relative text-center text-[3vw] font-light tracking-[-0.05em]  text-[#dfe1c8]`}>{nbStars}</p>
            <h1 className={`${cinzel.className} relative text-center text-4xl font-light tracking-[-0.05em] uppercase text-[#dfe1c8]`}>{title}</h1>
            <p className={`${montserrat.className} relative text-center text-md font-light tracking-[-0.05em]  text-[#dfe1c8]`}>{desc}</p>
          </div>
        </div>
  )
}

export default Card