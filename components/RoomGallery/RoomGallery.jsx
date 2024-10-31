import React, { useState, useLayoutEffect, useRef } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const roomViews = [

    {
        title: "Salon",
        src: "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
    },

    {
        title: "Salle de bain",
        src: "https://plus.unsplash.com/premium_photo-1661902468735-eabf780f8ff6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmF0aHJvb218ZW58MHx8MHx8fDA%3D"
    },

    {
        title: "Terrasse",
        src: "https://images.unsplash.com/photo-1665758564776-f2aa6b41327e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlcnJhc3NlfGVufDB8fDB8fHww"

    },

    {
        title: "Chambre",
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
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
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        })
    }, [])

    return (
        <div ref={container} className="relative text-black mt-[25vh] p-[10%]">
            <div className="flex h-[700px] justify-between gap-[5%]">
                <div ref={imageContainer} className="relative h-full w-[40%]">
                    <Image 
                        src={`/images/${roomViews[selectedView].src}`}
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
            <div className="flex flex-col relative mt-[200px]">
                {
                    roomViews.map( (room, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedView(index)}} className="w-full text-black uppercase text-[3vw] border-b border-black flex justify-end">
                            <h2 className='m-0 mt-10 mb-5 cursor-default'>{room.title}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default RoomGallery