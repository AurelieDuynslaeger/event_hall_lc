"use client"
import React from "react";
import { useParams } from "next/navigation";
import RoomDetails from '@/components/RoomDetails/RoomDetails';


const hebergementData = {
  cloudline: {
      title: "Cloudline Hub",
      rooms: [
          {
              roomName: "The Overlook Cabin",
              key: "overlook_cabin",
              src:"/bedroom_detail.jpeg",
              color: "#e39c7e",
              desc: [
                "Situated on the upper level of the cabin, you enter through the private entrance, offering total independence and seclusion.",
                "The cabin boasts rustic charm with its wood-paneled walls, vaulted ceiling beams, and large windows offering panoramic views of the surrounding mountains and lake.",
                "Covering over 45 m², it features a cozy master bedroom with high-quality 180*200 bedding (can be separated into two 90 cm beds upon request), a spacious bathroom with double sinks, a luxurious spa bathtub, and a private WC.",
                "A charming living area invites relaxation with breathtaking views of the forest and mountains, featuring a convertible sofa bed that can accommodate two additional guests (additional charges apply)."
            ]
          },
          {
              roomName: "The Pine Suite",
              key: "pine_suit",
              src:"/view_3.avif",
              color: "#e39c7e",
              desc: [
                "Situated on the upper level of the cabin, you enter through the private entrance, offering total independence and seclusion.",
                "The cabin boasts rustic charm with its wood-paneled walls, vaulted ceiling beams, and large windows offering panoramic views of the surrounding mountains and lake.",
                "Covering over 45 m², it features a cozy master bedroom with high-quality 180*200 bedding (can be separated into two 90 cm beds upon request), a spacious bathroom with double sinks, a luxurious spa bathtub, and a private WC.",
                "A charming living area invites relaxation with breathtaking views of the forest and mountains, featuring a convertible sofa bed that can accommodate two additional guests (additional charges apply)."
            ]
          },
          {
            roomName: "The Eagle Nest",
            key: "eagle_nest",
            src:"/view_3.avif",
            color: "#e39c7e",
            desc: [
              "Situated on the upper level of the cabin, you enter through the private entrance, offering total independence and seclusion.",
              "The cabin boasts rustic charm with its wood-paneled walls, vaulted ceiling beams, and large windows offering panoramic views of the surrounding mountains and lake.",
              "Covering over 45 m², it features a cozy master bedroom with high-quality 180*200 bedding (can be separated into two 90 cm beds upon request), a spacious bathroom with double sinks, a luxurious spa bathtub, and a private WC.",
              "A charming living area invites relaxation with breathtaking views of the forest and mountains, featuring a convertible sofa bed that can accommodate two additional guests (additional charges apply)."
          ]
        },
      ]
  },
  bayside: {
    title: "Cloudline Hub",
    rooms: [
        {
            roomName: "The Overlook Cabin",
            key: "overlook_cabin",
            src:"/bedroom_detail.jpeg",
            color: "#e39c7e",
            desc: [
              "Situated on the upper level of the cabin, you enter through the private entrance, offering total independence and seclusion.",
              "The cabin boasts rustic charm with its wood-paneled walls, vaulted ceiling beams, and large windows offering panoramic views of the surrounding mountains and lake.",
              "Covering over 45 m², it features a cozy master bedroom with high-quality 180*200 bedding (can be separated into two 90 cm beds upon request), a spacious bathroom with double sinks, a luxurious spa bathtub, and a private WC.",
              "A charming living area invites relaxation with breathtaking views of the forest and mountains, featuring a convertible sofa bed that can accommodate two additional guests (additional charges apply)."
          ]
        },
        {
            roomName: "The Pine Suite",
            key: "pine_suit",
            src:"/view_3.avif",
            color: "#e39c7e",
            desc: [
              "Situated on the upper level of the cabin, you enter through the private entrance, offering total independence and seclusion.",
              "The cabin boasts rustic charm with its wood-paneled walls, vaulted ceiling beams, and large windows offering panoramic views of the surrounding mountains and lake.",
              "Covering over 45 m², it features a cozy master bedroom with high-quality 180*200 bedding (can be separated into two 90 cm beds upon request), a spacious bathroom with double sinks, a luxurious spa bathtub, and a private WC.",
              "A charming living area invites relaxation with breathtaking views of the forest and mountains, featuring a convertible sofa bed that can accommodate two additional guests (additional charges apply)."
          ]
        },
    ]
  },
};

const RoomDetailsPage = () => {
    const { slug, key } = useParams();
    
    const hebergement = hebergementData[slug];
    const selectedRoom = hebergement?.rooms.find((room) => room.key === key);

    if (!hebergement) {
        return <p>Établissement non trouvé.</p>;
    }

    if (!selectedRoom) {
        return <p>Chambre non trouvée.</p>;
    }

  return (
    <div className='mt-28'>
      <RoomDetails  mainImg={selectedRoom.src} roomDescription={selectedRoom.desc} roomTitle={selectedRoom.roomName} selectedRoom={selectedRoom.key}/>

      {/* Bouton retour aux chambres */}
            {/* <motion.button 
                onClick={scrollToRooms} 
                className="flex gap-1 text-xs items-center" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                transition={{ duration: 0.5 }}
                style={{ position: 'fixed', bottom: '20px', left: '20px' }}
            >
                <PiArrowUpThin className="h-6 w-6 text-[#87482d]"/> Retour aux chambres
            </motion.button> */}
            {/* </div>
            )} */}
    </div>
  )
}

export default RoomDetailsPage