import React, { useState,useRef } from 'react'
import Image from 'next/image';
import DrawOutlineButton from '../DrawOutlineButton/DrawOutlineButton';
import { PiArrowUpRightThin } from 'react-icons/pi';
import { motion } from 'framer-motion';


const RoomGallery = ({ selectedRoomViews }) => {
    const [selectedView, setSelectedView] = useState(0);
    const imageContainer = useRef(null);
     // Vérifiez si selectedRoomViews est défini et a au moins un élément
     if (!selectedRoomViews || selectedRoomViews.length === 0) {
        return <div>Aucune vue disponible pour cette chambre.</div>; // Message d'erreur ou retour alternatif
    }

    return (
        <div className="relative text-black mt-[10vh] p-[10%]">
            <div className="flex h-[550px] justify-between gap-[5%]">
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
                <div className="flex flex-col relative mt-[100px]">
                        {
                            selectedRoomViews.map((view, index) => (
                                <div 
                                    key={index} 
                                    onMouseOver={() => setSelectedView(index)} 
                                    className="ml-auto mr-0 w-full text-black uppercase text-[1vw] border-b border-black flex justify-end"
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