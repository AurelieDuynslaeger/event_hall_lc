'use client';
import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//main img = best image de la room 
const IntroRoomDetail = ({mainImg, roomName}) => {
    const background = useRef(null);
    const introImage = useRef(null);
    const homeHeader = useRef(null);

    useLayoutEffect( () => {
      gsap.registerPlugin(ScrollTrigger);
      const timeline = gsap.timeline({
          scrollTrigger: {
              trigger: document.documentElement,
              scrub: true,
              start: "top",
              end: "+=500px",
          },
      })
      timeline
          .from(background.current, {clipPath: `inset(15%)`})
          .to(introImage.current, {height: "200px"}, 0)
  }, [])

  return (
    <div ref={homeHeader} className="relative w-full flex justify-center">
            <div className="w-full h-[140vh] absolute brightness-60" ref={background}>
                <Image 
                    src={mainImg}
                    fill={true}
                    alt="background image"
                    priority={true}
                    className='object-cover'
                />
            </div>
            <div className="flex justify-center relative mt-[35vh]">
                    <div ref={introImage} data-scroll data-scroll-speed="0.3" className="brightness-70 w-[350px] h-[475px] absolute">
                        <Image
                            src={mainImg}
                            alt="intro image"
                            fill={true} 
                            priority={true}
                            className='object-cover object-top'
                        />
                    </div>
                    <h1 data-scroll data-scroll-speed="0.7" className='text-white text-6xl font-bold z-3 text-center whitespace-nowrap'>{roomName}</h1>
             </div>
        </div>
  )
}

export default IntroRoomDetail