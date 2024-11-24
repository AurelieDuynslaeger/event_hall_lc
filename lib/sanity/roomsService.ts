import { sanityClient } from '@/lib/sanityClient';

export const fetchRoom = async (roomId: string) => {
    const query = `*[_type == "room" && _id == $roomId] {
      _id,
      title,
      description,
      price,
      images,
      availability,
      hub-> { title }
    }`;
  
    const params = { roomId };
  
    const room = await sanityClient.fetch(query, params);
  
    return room[0] || null;
  };
  


  export const fetchRoomsByHub = async (hubId: string) => {
    const query = `*[_type == "room" && hub._ref == "${hubId}"] {
      _id,
      title,
      description,
      price,
      images
    }`;
  
    const rooms = await sanityClient.fetch(query);
    return rooms;
  };
  