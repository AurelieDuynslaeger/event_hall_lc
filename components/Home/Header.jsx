import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

CustomEase.create(
    "hop",
    "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1 "
  );



const Header = () => {
    const h1ref = useRef();
    const heroRef = useRef();
    const overlayRef = useRef();
    const heroImg = useRef()
    const [textArray, setTextArray] = useState([]);

    useEffect(() => {
        const text = "Gather & Grow";
        const letters = text.split('').map((char, index) => {
          return <span key={index}>{char === ' ' ? '\u00A0' : char}</span>;
        });
        setTextArray(letters); // Met à jour l'état avec les lettres sous forme de span
      }, []);

      useEffect(() => {
        const revealLandingPage = () => {
          gsap.to(heroRef.current, {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            duration: 2,
            ease: 'hop',
            onStart: () => {
              gsap.to(heroRef.current, {
                transform: 'translate(-50%, -50%) scale(1)',
                duration: 2.25,
                ease: 'power3.inOut',
                delay: 0.25,
              });
    
              gsap.to(overlayRef.current, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                duration: 2,
                delay: 0.5,
                ease: 'hop',
              });
    
              gsap.to(heroImg.current, {
                transform: 'scale(1)',
                duration: 2.25,
                ease: 'power3.inOut',
                delay: 0.25,
              });
    
              gsap.to('.header h1 span', {
                y: 0,
                stagger: 0.1,
                duration: 2,
                ease: 'power4.inOut',
                delay: 0.75,
              });
            },
          });
        };
    
        revealLandingPage();
      }, []);

  return (
    <section ref={heroRef} 
    className="hero-clippath absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[0.7] w-screen h-screen will-change-transform z-10">
        <div 
            className='overlay-clippath absolute top-0 left-0 w-full h-full bg-background z-20' 
            ref={overlayRef}></div>
        <div className='header header-clippath absolute w-full top-[25%] left-0 z-10'>
            <h1 
                className='font-stretch text-[16vw] font-thin text-center m-0 p-0 leading-[100%]' 
                ref={h1ref}>{textArray}</h1>
        </div>
    </section>
  )
}

export default Header