import React, { useState, useRef } from 'react'
import Image from 'next/image';
import DrawOutlineButton from '../DrawOutlineButton/DrawOutlineButton';
import { PiArrowUpRightThin } from 'react-icons/pi';
import { motion, useInView } from 'framer-motion';


const RoomGallery = ({ selectedRoomViews, prestationsIcons }) => {
    const [selectedView, setSelectedView] = useState(0);
    const imageContainer = useRef(null);
    const ref = useRef(null);
  const inView = useInView(ref, { once: false });

     if (!selectedRoomViews || selectedRoomViews.length === 0) {
        return <div>Aucune vue disponible pour cette chambre.</div>; // Message d'erreur ou retour alternatif
    }

    return (
        <div className="relative text-black mt-[10vh] p-[10%]">
            <div className="flex h-[800px] justify-between gap-[5%]">
                <motion.div 
                ref={imageContainer} 
                className="relative h-full w-[40%]"
                initial={{ y: -100 }} 
                animate={{ y: 0 }} 
                transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <Image 
                        src={selectedRoomViews[selectedView].src}
                        fill={true}
                        alt={selectedRoomViews[selectedView].title}
                        priority={true}
                        className='object-cover'
                    />
                </motion.div>
                <div className="flex flex-col w-1/2">
                <motion.div 
                        className="w-full grid grid-cols-4 mt-6 gap-2"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        ref={ref}
                    >
                        {prestationsIcons.map((prest, index) => (
                            <motion.div 
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ delay: index * 0.1 }} 
                                className="flex items-center mb-2"
                            >
                                {prest.icon}
                                <span className="ml-2 text-[0.6rem]">{prest.desc}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                <div className="flex flex-col relative">
                        {
                            selectedRoomViews.map((view, index) => (
                                <div 
                                    key={index} 
                                    onMouseOver={() => setSelectedView(index)} 
                                    className="ml-auto mr-0 w-full text-black uppercase text-[1vw] border-b border-[#a25433] flex justify-end"
                                >
                                    <h2 className='m-0 mt-6 mb-5 cursor-default'>{view.title}</h2>
                                </div>
                            ))
                        }
                    </div>
                   
                    <DrawOutlineButton href="/reservation" className="w-1/2 ml-auto mt-8"> 
                        <PiArrowUpRightThin className="mr-2 h-6 w-6"/>
                        <p>Je réserve !</p>
                    </DrawOutlineButton>
                </div>
            </div>
            
        </div>
    )
}

export default RoomGallery