'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IntroRoomDetail from '../IntroRoomDetail/IntroRoomDetail';
import RoomDesc from '../RoomDesc/RoomDesc';
import RoomGallery from '../RoomGallery/RoomGallery';
import { PiBathtubThin, PiBedThin, PiCigaretteSlashThin, PiCoffeeThin, PiFarmThin, PiHairDryerThin, PiPersonLight, PiResizeThin, PiSwimmingPoolThin, PiThermometerHotThin, PiTowelThin, PiWheelchairThin, PiWifiHighThin } from "react-icons/pi";
import { TbAirConditioning } from 'react-icons/tb';
import { GiVacuumCleaner } from 'react-icons/gi';


const roomViews = {
    saint_creac: {
    prestationIcons: [
        { icon: <PiResizeThin className="h-8 w-8 text-[#a25433]"/>, desc: "50m²" },
        { icon: <PiPersonLight className="h-8 w-8 text-[#a25433]"/>, desc: "1 à 4 pers. maximum" },
        { icon: <PiCigaretteSlashThin className="h-8 w-8 text-[#a25433]"/>, desc: "Non fumeur" },
        { icon: <PiWheelchairThin className="h-8 w-8 text-[#a25433]"/>, desc: "Non PMR" },
        { icon: <PiWifiHighThin className="h-8 w-8 text-[#a25433]"/>, desc: "Wifi Inclus" },
        { icon: <TbAirConditioning className="h-8 w-8 text-[#a25433]"/>, desc: "Climatisation réversible" },
        { icon: <PiBathtubThin className="h-8 w-8 text-[#a25433]"/>, desc: "Baignoire balnéothérapie" },
        { icon: <PiBedThin className="h-8 w-8 text-[#a25433]"/>, desc: "Literie de haute qualité 180*200" },
        { icon: <PiTowelThin className="h-8 w-8 text-[#a25433]"/>, desc: "Linge de lit et de toilette inclus" },
        { icon: <PiHairDryerThin className="h-8 w-8 text-[#a25433]"/>, desc: "Sèche cheveux" },
        { icon: <PiCoffeeThin className="h-8 w-8 text-[#a25433]"/>, desc: "Petit déjeuner continental inclus" },
        { icon: <PiSwimmingPoolThin className="h-8 w-8 text-[#a25433]"/>, desc: "Accès piscine et spa" },
        { icon: <GiVacuumCleaner className="h-8 w-8 text-[#a25433]"/>, desc: "Ménage inclus" },
        { icon: <PiThermometerHotThin className="h-8 w-8 text-[#a25433]"/>, desc: "Accès Hamman et sauna sur réservation" }
        ],
        views : [
            {
                title: "Vue d'ensemble",
                src: "/manoir_suitecreac/view_9_chambre15em.jpg"
            },
            {
                title: "Inspiration XVème siècle",
                src: "/manoir_suitecreac/view_3.jpg"
        
            },
            {
                title: "Salon",
                src: "/manoir_suitecreac/view_7.jpg"
            },
            {
                title: "Suite Salon",
                src: "/manoir_suitecreac/view_1.jpg"
            },
            {
                title: "Salle de bain",
                src: "/manoir_suitecreac/view_2.jpg"
            },
        
            {
                title: "Baignoire Balnéo",
                src: "/manoir_suitecreac/view_5.jpg"
            },
            {
                title: "Sanitaires",
                src: "/manoir_suitecreac/view_6.jpg"
            },
        ]
        },
    saint_clarc: {
    prestationIcons: [
        { icon: <PiResizeThin />, desc: "50m²" },
        { icon: <PiPersonLight />, desc: "1 à 4 pers. maximum" },
        { icon: <PiCigaretteSlashThin className="h-6 w-6 text-[#87482d]"/>, desc: "Non fumeur" },
        { icon: <PiWheelchairThin className="h-6 w-6 text-[#87482d]"/>, desc: "Non PMR" },
        { icon: <PiFarmThin className="h-6 w-6 text-[#87482d]"/>, desc: "Terrasse privative 25m²" },
        { icon: <PiWifiHighThin className="h-6 w-6 text-[#87482d]"/>, desc: "Wifi Inclus" },
        { icon: <TbAirConditioning className="h-6 w-6 text-[#87482d]"/>, desc: "Climatisation réversible" },
        { icon: <PiBedThin className="h-6 w-6 text-[#87482d]"/>, desc: "Literie de haute qualité 180*200" },
        { icon: <PiTowelThin className="h-6 w-6 text-[#87482d]"/>, desc: "Linge de lit et de toilette inclus" },
        { icon: <PiHairDryerThin className="h-6 w-6 text-[#87482d]"/>, desc: "Sèche cheveux" },
        { icon: <PiCoffeeThin className="h-6 w-6 text-[#87482d]"/>, desc: "Petit déjeuner continental inclus" },
        { icon: <PiSwimmingPoolThin className="h-6 w-6 text-[#87482d]"/>, desc: "Accès piscine et spa" },
        { icon: <GiVacuumCleaner className="h-8 w-8 text-[#a25433]"/>, desc: "Ménage inclus" },
        { icon: <PiThermometerHotThin className="h-6 w-6 text-[#87482d]"/>, desc: "Accès Hamman et sauna sur réservation" }
        ],
        views : [
            {
                title: "Vue d'ensemble",
                src: "/manoir_suiteclar/overview_sinatclar_suite.jpg",
            },
            {
                title: "Vue d'ensemble suite",
                src: "/manoir_suiteclar/view_2.jpg",
            },
            {
                title: "Salon configuration couchage",
                src: "/manoir_suiteclar/view_6.jpg"
            },
            {
                title: "Salon configuration couchage suite",
                src: "/manoir_suiteclar/view_5.jpg"
        
            },
            {
                title: "Inspiration XVème siècle - Souillarde (ancien évier)",
                src: "/manoir_suiteclar/view_9.jpg"
            },
            {
                title: "Salle de douche",
                src: "/manoir_suiteclar/view_3.jpg"
            },
            {
                title: "Douche à l'italienne",
                src: "/manoir_suiteclar/view_4.jpg"
            },
            {
                title: "La Terrasse",
                src: "/manoir_suiteclar/view_8.jpg"
            },
        ]
    },
    saint_loup: {
    prestationIcons: [
        { icon: <PiResizeThin />, desc: "35m²" },
        { icon: <PiPersonLight />, desc: "1 à 2 pers." },
        { icon: <PiCigaretteSlashThin className="h-6 w-6 text-[#87482d]"/>, desc: "Non fumeur" },
        { icon: <PiWheelchairThin className="h-6 w-6 text-[#87482d]"/>, desc: "Non PMR" },
        { icon: <PiWifiHighThin className="h-6 w-6 text-[#87482d]"/>, desc: "Wifi Inclus" },
        { icon: <TbAirConditioning className="h-6 w-6 text-[#87482d]"/>, desc: "Climatisation réversible" },
        { icon: <PiBathtubThin className="h-6 w-6 text-[#87482d]"/>, desc: "Salle de douche à l'italienne" },
        { icon: <PiBedThin className="h-6 w-6 text-[#87482d]"/>, desc: "Literie de haute qualité 160*200" },
        { icon: <PiTowelThin className="h-6 w-6 text-[#87482d]"/>, desc: "Linge de lit et de toilette inclus" },
        { icon: <PiHairDryerThin className="h-6 w-6 text-[#87482d]"/>, desc: "Sèche cheveux" },
        { icon: <PiCoffeeThin className="h-6 w-6 text-[#87482d]"/>, desc: "Petit déjeuner continental inclus" },
        { icon: <PiSwimmingPoolThin className="h-6 w-6 text-[#87482d]"/>, desc: "Accès piscine et spa" },
        { icon: <PiThermometerHotThin className="h-6 w-6 text-[#87482d]"/>, desc: "Accès Hamman et sauna sur réservation" }
        ],
        views : [
            {
                title: "Vue d'ensemble",
                src: "/manoir_chsaintloup/overwiew_saintloup.jpg"
            },
            {
                title: "Suite Vue d'ensemble",
                src: "/manoir_chsaintloup/view_1.jpg"
            },
            {
                title: "Espace salon",
                src: "/manoir_chsaintloup/view_2.jpg"
            },
            {
                title: "Suite espace salon",
                src: "/manoir_chsaintloup/view_3.jpg"
        
            },
            {
                title: "Salle de douche",
                src: "/manoir_chsaintloup/view_4.jpg"
            },
            {
                title: "Suite Salle de douche",
                src: "/manoir_chsaintloup/view_5.jpg"
            },
            {
                title: "Dressing",
                src: "/manoir_chsaintloup/view_6.jpg"
            },
            {
                title: "Vue sur la vallée",
                src: "/manoir_chsaintloup/view_7.jpg"
            },
        ]
        },
    mansaut: {
    prestationIcons: [
        { icon: <PiResizeThin />, desc: "35m²" },
        { icon: <PiPersonLight />, desc: "1 à 2 pers." },
        { icon: <PiCigaretteSlashThin className="h-6 w-6 text-[#87482d]"/>, desc: "Non fumeur" },
        { icon: <PiWheelchairThin className="h-6 w-6 text-[#87482d]"/>, desc: "Non PMR" },
        { icon: <PiWifiHighThin className="h-6 w-6 text-[#87482d]"/>, desc: "Wifi Inclus" },
        { icon: <TbAirConditioning className="h-6 w-6 text-[#87482d]"/>, desc: "Climatisation réversible" },
        { icon: <PiBathtubThin className="h-6 w-6 text-[#87482d]"/>, desc: "Salle de douche à l'italienne" },
        { icon: <PiBedThin className="h-6 w-6 text-[#87482d]"/>, desc: "Literie de haute qualité 160*200" },
        { icon: <PiTowelThin className="h-6 w-6 text-[#87482d]"/>, desc: "Linge de lit et de toilette inclus" },
        { icon: <PiHairDryerThin className="h-6 w-6 text-[#87482d]"/>, desc: "Sèche cheveux" },
        { icon: <PiCoffeeThin className="h-6 w-6 text-[#87482d]"/>, desc: "Petit déjeuner continental inclus" },
        { icon: <PiSwimmingPoolThin className="h-6 w-6 text-[#87482d]"/>, desc: "Accès piscine et spa" },
        { icon: <PiThermometerHotThin className="h-6 w-6 text-[#87482d]"/>, desc: "Accès Hamman et sauna sur réservation" }
        ],
        views : [
            {
                title: "Vue d'ensemble",
                src: "/manoir_chmansaut/overview_mansaut.jpg"
            },
            {
                title: "Suite Vue d'ensemble",
                src: "/manoir_chmansaut/view_1.jpg"
            },
            {
                title: "Inspiration XVème sicèle",
                src: "/manoir_chmansaut/view_2.jpg"
            },
            {
                title: "Détails",
                src: "/manoir_chmansaut/view_3.jpg"
        
            },
            {
                title: "Dressing",
                src: "/manoir_chmansaut/view_4.jpg"
            },
            {
                title: "Salle de douche",
                src: "/manoir_chmansaut/view_5.jpg"
            },
            {
                title: "Suite Salle de douche",
                src: "/manoir_chmansaut/view_6.jpg"
            },
            {
                title: "Sanitaires",
                src: "/manoir_chmansaut/view_7.jpg"
            },
            {
                title: "Terrasse et vue sur la vallée",
                src: "/manoir_chmansaut/view_8.jpg"
            },
        ]
        },
}

const RoomDetails = ( {ref, mainImg, roomDescription, roomTitle, selectedRoom}) => {

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
    <div className="mt-8" ref={ref}>
        <IntroRoomDetail mainImg={mainImg} roomName={roomTitle}/>
        <div ref={roomDescRef}>
            <RoomDesc roomDescArray={roomDescription}/>
        </div>
        <RoomGallery selectedRoomViews={selectedRoomData.views} prestationsIcons={selectedRoomData.prestationIcons}/>
    </div>
  )
}

export default RoomDetails