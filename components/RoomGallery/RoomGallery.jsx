import React, { useState, useLayoutEffect, useRef } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DrawOutlineButton from '../DrawOutlineButton/DrawOutlineButton';
import { PiArrowUpRightThin } from 'react-icons/pi';

const roomViews = [

    {
        title: "Salon",
        src: "/manoir_suitecreac/view_1.jpg"
    },

    {
        title: "Salle de bain",
        src: "/manoir_suitecreac/view_2.jpg"
    },

    {
        title: "Terrasse",
        src: "/manoir_suitecreac/view_3.jpg"

    },

    {
        title: "Chambre",
        src: "/manoir_suitecreac/view_4.jpg"
    },

]

//roomViews as a props 


const RoomGallery = () => {
    const [selectedView, setSelectedView] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: false,
            start: "top-=20px",
            end: document.body.offsetHeight - window.innerHeight,
        })
    }, [])

    return (
        <div ref={container} className="relative text-black mt-[10vh] p-[10%]">
            <div className="flex h-[400px] justify-between gap-[5%]">
                <div ref={imageContainer} className="relative h-full w-[40%]">
                    <Image 
                        src={roomViews[selectedView].src}
                        fill={true}
                        alt="project image"
                        priority={true}
                        className='object-cover'
                    />
                </div>
                <div className="flex h-full w-[20%] text-xl">
                    <p>The flora is characterized by the presence of high elevation wetland, as well as yellow straw, broom sedge, tola de agua and tola amaia.</p>
                </div>
                <div className="flex h-full w-[20%] text-xl">
                    <p>Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo) are considered vulnerable.</p>
                </div>
            </div>
            <div className="flex flex-col relative mt-[100px]">
                {
                    roomViews.map( (room, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedView(index)}} className="ml-auto mr-0 w-1/2 text-black uppercase text-[1vw] border-b border-black flex justify-end">
                            <h2 className='m-0 mt-10 mb-5 cursor-default'>{room.title}</h2>
                        </div>
                    })
                }
            </div>
            <DrawOutlineButton href="/reservation" className="w-1/5 ml-auto mt-8"> 
                <PiArrowUpRightThin className="mr-2 h-6 w-6"/>
                <p>Je réserve !</p>
            </DrawOutlineButton>
        </div>
    )
}

export default RoomGallery