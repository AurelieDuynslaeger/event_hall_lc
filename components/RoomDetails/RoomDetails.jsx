'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IntroRoomDetail from '../IntroRoomDetail/IntroRoomDetail';
import RoomDesc from '../RoomDesc/RoomDesc';
import RoomGallery from '../RoomGallery/RoomGallery';
import { PiArrowUpRightThin, PiBathtubThin, PiBedThin, PiCigaretteSlashThin, PiCoffeeThin, PiCookingPotThin, PiFarmThin, PiHairDryerThin, PiPersonLight, PiResizeThin, PiSwimmingPoolThin, PiThermometerHotThin, PiTowelThin, PiWheelchairThin, PiWifiHighThin } from "react-icons/pi";
import { TbAirConditioning} from 'react-icons/tb';
import { GiVacuumCleaner } from 'react-icons/gi';
import { CiParking1 } from 'react-icons/ci';
import { MdOutlineElectricCar } from 'react-icons/md';
import DrawOutlineButton from '../DrawOutlineButton/DrawOutlineButton';

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
            { icon: <PiResizeThin className="h-6 w-6 text-[#87482d]" />, desc: "50m²" },
            { icon: <PiPersonLight className="h-6 w-6 text-[#87482d]" />, desc: "1 à 4 pers. maximum" },
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
            { icon: <PiResizeThin className="h-6 w-6 text-[#87482d]" />, desc: "35m²" },
            { icon: <PiPersonLight className="h-6 w-6 text-[#87482d]" />, desc: "1 à 2 pers." },
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
            { icon: <PiResizeThin className="h-6 w-6 text-[#87482d]" />, desc: "35m²" },
            { icon: <PiPersonLight className="h-6 w-6 text-[#87482d]" />, desc: "1 à 2 pers." },
            { icon: <PiCigaretteSlashThin className="h-6 w-6 text-[#87482d]"/>, desc: "Non fumeur" },
            { icon: <PiWheelchairThin className="h-6 w-6 text-[#87482d]"/>, desc: "Non PMR" },
            { icon: <PiWifiHighThin className="h-6 w-6 text-[#87482d]"/>, desc: "Wifi Inclus" },
            { icon: <PiFarmThin className="h-6 w-6 text-[#87482d]"/>, desc: "Terrasse privative 20m²" },
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
    perchoir: {
        prestationIcons: [
            { icon: <PiResizeThin className="h-6 w-6 text-[#87482d]" />, desc: "130m²" },
            { icon: <PiPersonLight className="h-6 w-6 text-[#87482d]" />, desc: "14 pers. maximum" },
            { icon: <PiCigaretteSlashThin className="h-6 w-6 text-[#87482d]"/>, desc: "Non fumeur" },
            { icon: <PiWheelchairThin className="h-6 w-6 text-[#87482d]"/>, desc: "Non PMR" },
            { icon: <PiFarmThin className="h-6 w-6 text-[#87482d]"/>, desc: "Terrasse privative 24m²" },
            { icon: <PiWifiHighThin className="h-6 w-6 text-[#87482d]"/>, desc: "Wifi Inclus" },
            { icon: <TbAirConditioning className="h-6 w-6 text-[#87482d]"/>, desc: "Climatisation réversible" },
            { icon: <PiBathtubThin className="h-6 w-6 text-[#87482d]"/>, desc: "2 Salles d'eau dont une double" },
            { icon: <PiBedThin className="h-6 w-6 text-[#87482d]"/>, desc: "Literie de haute qualité 90 + 1 lit double 160" },
            { icon: <PiTowelThin className="h-6 w-6 text-[#87482d]"/>, desc: "Linge de lit et de toilette inclus" },
            { icon: <PiHairDryerThin className="h-6 w-6 text-[#87482d]"/>, desc: "Sèche cheveux" },
            { icon: <PiCookingPotThin className="h-6 w-6 text-[#87482d]"/>, desc: "Kitchenette" },
            { icon: <PiSwimmingPoolThin className="h-6 w-6 text-[#87482d]"/>, desc: "Accès piscine et spa" },
            ],
            views : [
                {
                    title: "Vue d'ensemble",
                    src: "/dortoir_perchoir/overview_perchoir.jpg"
                },
                {
                    title: "Entrée de la Tour",
                    src: "/dortoir_perchoir/view_7_entree_tour.jpg"
                },
                {
                    title: "Accès au dortoir",
                    src: "/dortoir_perchoir/view_2_charpente.jpg"
                },
                {
                    title: "Le perchoir et ses 15 couchages",
                    src: "/dortoir_perchoir/view_3_couchages.jpg"
            
                },
                {
                    title: "Salle de bain simple",
                    src: "/dortoir_perchoir/view_4_sdb.jpg"
                },
                {
                    title: "Salle de bain double",
                    src: "/dortoir_perchoir/view_5_sdbdouble.jpg"
                },
                {
                    title: "Terrasse",
                    src: "/dortoir_perchoir/view_6_terrasse.jpg"
                },
            ]
            },
    loft: {
        prestationIcons: [
            { icon: <PiResizeThin className="h-6 w-6 text-[#87482d]" />, desc: "250m²" },
            { icon: <PiPersonLight className="h-6 w-6 text-[#87482d]" />, desc: "15 pers. maximum" },
            { icon: <PiCigaretteSlashThin className="h-6 w-6 text-[#87482d]"/>, desc: "Non fumeur" },
            { icon: <PiWheelchairThin className="h-6 w-6 text-[#87482d]"/>, desc: "Non PMR" },
            { icon: <PiFarmThin className="h-6 w-6 text-[#87482d]"/>, desc: "Terrasse ouvrant sur la cour" },
            { icon: <PiWifiHighThin className="h-6 w-6 text-[#87482d]"/>, desc: "Wifi Inclus" },
            { icon: <TbAirConditioning className="h-6 w-6 text-[#87482d]"/>, desc: "Climatisation réversible" },
            { icon: <PiBathtubThin className="h-6 w-6 text-[#87482d]"/>, desc: "2 Salles d'eau double et une simple" },
            { icon: <PiBedThin className="h-6 w-6 text-[#87482d]"/>, desc: "Literie de haute qualité" },
            { icon: <PiTowelThin className="h-6 w-6 text-[#87482d]"/>, desc: "Linge de lit et de toilette inclus" },
            { icon: <PiHairDryerThin className="h-6 w-6 text-[#87482d]"/>, desc: "Sèche cheveux" },
            { icon: <PiCookingPotThin className="h-6 w-6 text-[#87482d]"/>, desc: "Cuisine entièrement équipée" },
            { icon: <PiSwimmingPoolThin className="h-6 w-6 text-[#87482d]"/>, desc: "Accès piscine et spa et autres strucutres du Domaine" },
            { icon: <CiParking1 className="h-6 w-6 text-[#87482d]"/>, desc: "Parking à proximité du gîte" },
            { icon: <MdOutlineElectricCar className="h-6 w-6 text-[#87482d]"/>, desc: "Borne de recharge véhicule électrique" },
            ],
            views : [
                {
                    title: "Vue d'ensemble Salon",
                    src: "/gite_etable/overview_loft.jpeg"
                },
                {
                    title: "Suite Pollen : vue d'ensemble",
                    src: "/gite_etable/view_1_pollen.jpg"
                },
                {
                    title: "Suite Pollen : configuration 2 couchages",
                    src: "/gite_etable/view_3_pollennext.jpg"
                },
                {
                    title: "Suite Pollen : coin salon",
                    src: "/gite_etable/view_2_pollensuite.jpg"
                },
                {
                    title: "Suite Pollen : coin salon",
                    src: "/gite_etable/view_4.jpg"
                },
                {
                    title: "Suite Olive : vue d'ensmble",
                    src: "/gite_etable/view_8_olive.jpg"
                },
                {
                    title: "Suite Olive : coin salon",
                    src: "/gite_etable/view_9_olive.jpg"
                },
                {
                    title: "Dressing",
                    src: "/gite_etable/view_7_dressing.jpg"
                },
                {
                    title: "Salle d'eau (1/3)",
                    src: "/gite_etable/view_6_sdb.jpg"
                },
                {
                    title: "Salle d'eau (2/3)",
                    src: "/gite_etable/view_5_sdb.jpg"
                },
                {
                    title: "Salle d'eau (3/3)",
                    src: "/gite_etable/view_10_sdb.jpg"
                },
                {
                    title: "Couchages Mezzanine (1/3)",
                    src: "/gite_etable/view_11_mezza.jpg"
                },
                {
                    title: "Couchages Mezzanine (2/3)",
                    src: "/gite_etable/view_12_mezza.jpg"
                },
                {
                    title: "Couchages Mezzanine (3/3)",
                    src: "/gite_etable/view_13_mezza.jpg"
                },
            ]
            },
    studio: {
        prestationIcons: [
            { icon: <PiResizeThin className="h-6 w-6 text-[#87482d]" />, desc: "26m²" },
            { icon: <PiPersonLight className="h-6 w-6 text-[#87482d]" />, desc: "1 à 2 pers. maximum" },
            { icon: <PiCigaretteSlashThin className="h-6 w-6 text-[#87482d]"/>, desc: "Non fumeur" },
            { icon: <PiWheelchairThin className="h-6 w-6 text-[#87482d]"/>, desc: "Non PMR" },
            { icon: <PiFarmThin className="h-6 w-6 text-[#87482d]"/>, desc: "Terrasse plein Ouest 50m²" },
            { icon: <PiWifiHighThin className="h-6 w-6 text-[#87482d]"/>, desc: "Wifi Inclus" },
            { icon: <TbAirConditioning className="h-6 w-6 text-[#87482d]"/>, desc: "Climatisation réversible" },
            { icon: <PiBathtubThin className="h-6 w-6 text-[#87482d]"/>, desc: "Salle de douche à l'italienne" },
            { icon: <PiBedThin className="h-6 w-6 text-[#87482d]"/>, desc: "Literie de haute qualité 160*190" },
            { icon: <PiTowelThin className="h-6 w-6 text-[#87482d]"/>, desc: "Linge de lit et de toilette inclus" },
            { icon: <PiHairDryerThin className="h-6 w-6 text-[#87482d]"/>, desc: "Sèche cheveux" },
            { icon: <PiCookingPotThin className="h-6 w-6 text-[#87482d]"/>, desc: "Cuisine équipée (sans four)" },
            { icon: <PiSwimmingPoolThin className="h-6 w-6 text-[#87482d]"/>, desc: "Accès piscine et spa" },
            { icon: <CiParking1 className="h-6 w-6 text-[#87482d]"/>, desc: "Parking à proximité du gîte" },
            { icon: <MdOutlineElectricCar className="h-6 w-6 text-[#87482d]"/>, desc: "Borne de recharge véhicule électrique" },
            ],
            views : [
                {
                    title: "Vue d'ensemble (1/2)",
                    src: "/gite_studio/view_4.jpg"
                },
                {
                    title: "Vue d'ensemble (2/2)",
                    src: "/gite_studio/view_5.jpg"
                },
                {
                    title: "Salle à manger et Cuisine (1/2)",
                    src: "/gite_studio/view_8.jpg"
                },
                {
                    title: "Salle à manger et Cuisine (1/2)",
                    src: "/gite_studio/view_6.jpg"
                },
                {
                    title: "La Salle de bain",
                    src: "/gite_studio/view_7.jpg"
                },
                {
                    title: "Accés direct à la terrasse",
                    src: "/gite_studio/view_2.jpg"
            
                },
                {
                    title: "La Terrasse",
                    src: "/gite_studio/view_1_terrasse.jpg"
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
        <RoomGallery selectedRoomViews={selectedRoomData.views} prestationsIcons={selectedRoomData.prestationIcons}/>

    
        <DrawOutlineButton  href={`/reservation?subject=${selectedRoom}`}  className="w-1/4 m-auto -mt-20"> 
            <PiArrowUpRightThin className="mr-2 h-6 w-6"/>
            <p>Je réserve !</p>
        </DrawOutlineButton>
    </div>
  )
}

export default RoomDetails