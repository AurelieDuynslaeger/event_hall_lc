'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IntroRoomDetail from '../IntroRoomDetail/IntroRoomDetail';
import RoomDesc from '../RoomDesc/RoomDesc';
import RoomGallery from '../RoomGallery/RoomGallery';

const RoomDetails = ( {ref, mainImg, roomDescription, roomTitle}) => {

    const roomDescRef = useRef(null);

   useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Créez un effet de défilement ici
    const trigger = ScrollTrigger.create({
      trigger: roomDescRef.current,
      start: 'top bottom', // Déclenche quand le haut de l'élément touche le bas de la fenêtre
      end: 'bottom top',   // Se termine quand le bas de l'élément touche le haut de la fenêtre
      onEnter: () => {
        // Ajoutez l'animation ici
        gsap.from(roomDescRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
        });
      },
      onLeaveBack: () => {
        // Ajoutez l'animation inverse si nécessaire
        gsap.to(roomDescRef.current, {
          opacity: 0,
          y: -50,
          duration: 1,
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div className="mt-8" ref={ref}>
        <IntroRoomDetail mainImg={mainImg} roomName={roomTitle}/>
        <div ref={roomDescRef}>
            <RoomDesc roomDescArray={roomDescription}/>
        </div>
        <RoomGallery/>
    </div>
  )
}

export default RoomDetails