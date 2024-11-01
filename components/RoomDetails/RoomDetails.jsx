'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IntroRoomDetail from '../IntroRoomDetail/IntroRoomDetail';
import RoomDesc from '../RoomDesc/RoomDesc';
import RoomGallery from '../RoomGallery/RoomGallery';


const roomViews = {
  saint_creac: [
      {
          title: "Salon",
          src: "/manoir_suitecreac/view_1.jpg"
      },
  
      {
          title: "Salle de bain",
          src: "/manoir_suitecreac/view_2.jpg"
      },
  
      {
          title: "Inspiration XVème siècle",
          src: "/manoir_suitecreac/view_3.jpg"
  
      },
      {
          title: "Baignoire Balnéo",
          src: "/manoir_suitecreac/view_5.jpg"
      },
      {
          title: "Sanitaires",
          src: "/manoir_suitecreac/view_6.jpg"
      },
      {
          title: "Salon",
          src: "/manoir_suitecreac/view_7.jpg"
      },
      {
          title: "Vue d'ensemble",
          src: "/manoir_suitecreac/view_9_chambre15em.jpg"
      },
  ],
  saint_clarc: [
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
  ],
  saint_loup: [
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
  ],
  mansaut: [
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
  

}

const RoomDetails = ( {ref, mainImg, roomDescription, roomTitle, selectedRoom}) => {

    const roomDescRef = useRef(null);
    const selectedRoomViews = roomViews[selectedRoom];

   useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: roomDescRef.current,
      start: 'top bottom',
      end: 'bottom top',  
      onEnter: () => {
        gsap.from(roomDescRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
        });
      },
      onLeaveBack: () => {
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
        <RoomGallery selectedRoomViews={selectedRoomViews}/>
    </div>
  )
}

export default RoomDetails