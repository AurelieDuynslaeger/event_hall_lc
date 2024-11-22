import React from 'react'
import { FiMapPin } from 'react-icons/fi'
import Block from './Block'
import Image from 'next/image'

const LocationBlock = () => {
  return (
    <Block className="col-span-12 flex items-center gap-4 md:col-span-3">
        <FiMapPin className="text-4xl text-primary" />
        <Image src="/logoMinGG.svg" alt="" width={150} height={0} className='h-auto object-cover'/>
    </Block>
  )
}

export default LocationBlock