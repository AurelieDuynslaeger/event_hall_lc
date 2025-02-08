import Image from 'next/image';
import React from 'react'

export default function Content() {
  return (
    <div className='bg-primary py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section2 />
    </div>
  )
}

const Section2 = () => {
    return (
        <div className='flex flex-col justify-center gap-10 items-center rounded-3xl p-2'>
            <Image src="/lc_logo_black.png" alt='Gather and Grow full logo' width={280} height={0} className='h-auto object-cover'/>
               <h3 className='font-stretch text-5xl'>Salle de Réception</h3>
               <h4 className='font-stretch text-7xl'>Pour tous vos évenements</h4>
        </div>
    )
}
