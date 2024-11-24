'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IntroRoomDetail from '../IntroRoomDetail/IntroRoomDetail';
import RoomDesc from '../RoomDesc/RoomDesc';
import RoomGallery from '../RoomGallery/RoomGallery';
import {PiBathtubThin, PiBedThin, PiCigaretteSlashThin, PiCoffeeThin, PiHairDryerThin, PiPersonLight, PiResizeThin, PiSwimmingPoolThin, PiThermometerHotThin, PiTowelThin, PiWheelchairThin, PiWifiHighThin } from "react-icons/pi";
import { TbAirConditioning} from 'react-icons/tb';
import { GiVacuumCleaner } from 'react-icons/gi';

const roomViews = {
    overlook_cabin: {
        prestationIcons: [
            { icon: <PiResizeThin className="h-8 w-8 text-primary"/>, desc: "50m²" },
            { icon: <PiPersonLight className="h-8 w-8 text-primary"/>, desc: "1 to 4 people maximum" },
            { icon: <PiCigaretteSlashThin className="h-8 w-8 text-primary"/>, desc: "Non-smoking" },
            { icon: <PiWheelchairThin className="h-8 w-8 text-primary"/>, desc: "Not accessible for disabled guests" },
            { icon: <PiWifiHighThin className="h-8 w-8 text-primary"/>, desc: "Wifi included" },
            { icon: <TbAirConditioning className="h-8 w-8 text-primary"/>, desc: "Reversible air conditioning" },
            { icon: <PiBathtubThin className="h-8 w-8 text-primary"/>, desc: "Balneotherapy bathtub" },
            { icon: <PiBedThin className="h-8 w-8 text-primary"/>, desc: "High-quality bedding 180*200" },
            { icon: <PiTowelThin className="h-8 w-8 text-primary"/>, desc: "Bed and bath linen included" },
            { icon: <PiHairDryerThin className="h-8 w-8 text-primary"/>, desc: "Hairdryer" },
            { icon: <PiCoffeeThin className="h-8 w-8 text-primary"/>, desc: "Breakfast included" },
            { icon: <PiSwimmingPoolThin className="h-8 w-8 text-primary"/>, desc: "Access to pool and spa" },
            { icon: <GiVacuumCleaner className="h-8 w-8 text-primary"/>, desc: "Cleaning included" },
            { icon: <PiThermometerHotThin className="h-8 w-8 text-primary"/>, desc: "Access to Hammam and sauna upon reservation" }
            ],
        views : [
            {
                title: "Overview",
                src: "/view_12.avif"
            },
            {
                title: "Bathroom",
                src: "/view_2.avif"
        
            },
            {
                title: "Where you chill",
                src: "/view_11.avif"
            },
            {
                title: "Living",
                src: "/view_19.jpeg"
            },
            {
                title: "Terrace",
                src: "/view_4.avif"
            },
            {
                title: "Sauna",
                src: "/view_8.avif"
            },
        ]
        },
}

const RoomDetails = ( {ref, mainImg, roomDescription, roomTitle, selectedRoom }) => {

    const roomDescRef = useRef(null);
    const selectedRoomData = roomViews[selectedRoom];

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
    <div ref={ref}>
        <IntroRoomDetail mainImg={mainImg} roomName={roomTitle}/>
        <div ref={roomDescRef}>
            <RoomDesc roomDescArray={roomDescription}/>
        </div>
        <RoomGallery selectedRoomViews={selectedRoomData.views} prestationsIcons={selectedRoomData.prestationIcons} selectedRoom={selectedRoomData}/>
    </div>
  )
}

export default RoomDetails