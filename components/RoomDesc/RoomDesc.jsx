import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

//cut la desc des rooms et la mettre en tableau et le passer à RoomDesc

// const roomDesc = ["Los Flamencos National Reserve", "is a nature reserve located", "in the commune of San Pedro de Atacama", "The reserve covers a total area", "of 740 square kilometres (290 sq mi)"]

//pass roomDesc as a prop
const RoomDesc = ({roomDescArray}) => {
  return (
    <div className="relative text-gray-800 font-bold text-[2vw] mt-[20vw] ml-[10vw]" >
        {
            roomDescArray.map( (phrase, index) => {
                return <AnimatedText key={index}>{phrase}</AnimatedText>
            })
        }
    </div>
  )
}

export default RoomDesc

function AnimatedText({children}) {
  const text = useRef(null);

  useLayoutEffect( () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(text.current, {
          scrollTrigger: {
              trigger: text.current,
              scrub: 0.5,
              start: "bottom bottom",
              end: "top top+=100",
              toggleActions: "play none none reverse",
          },
          opacity: 0,
          left: "-200px",
          ease: "power3.Out"
      })
  }, [])
  return <p ref={text} className='m-0 relative'>{children}</p>
}