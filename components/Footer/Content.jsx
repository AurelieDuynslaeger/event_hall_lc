import Image from 'next/image';
import React from 'react'

export default function Content() {
  return (
    <div className='bg-background py-8 px-12 h-full w-full flex flex-col justify-between'>
        {/* <Section1 /> */}
        <Section2 />
    </div>
  )
}


// const Section1 = () => {
//     return (
//         <div>
//             <Nav />
//         </div>
//     )
// }

const Section2 = () => {
    return (
        <div className='flex flex-col justify-center gap-10 items-center rounded-3xl p-2'>
            <Image src="/LogoFull.png" alt='Gather and Grow full logo' width={1300} height={0} className='h-auto object-cover'/>
               <h3 className='font-stretch text-5xl'>Reconnect your team.</h3>
               <h4 className='font-stretch text-7xl'>Propel your projects.</h4>
        </div>
    )
}

// const Nav = () => {
//     return (
//         <div className='flex shrink-0 gap-20 font-metbook text-2xl'>
//             <div className='flex flex-col gap-2'>
//                 <h3 className='mb-2 uppercase text-primary font-bold'>Payments Methods</h3>
//                 <p>Paiements sécurisés via STRIPE</p>
//                 <FaCcVisa className="text-foreground text-4xl"/>
//                 <FaCcMastercard className="text-foreground text-4xl"/>
//                 <SiAmericanexpress className="text-foreground text-4xl"/>
//             </div>
//         </div>
//     )
// }