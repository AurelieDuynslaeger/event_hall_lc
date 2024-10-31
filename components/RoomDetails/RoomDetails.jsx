'use client';

import { useEffect } from 'react';
import IntroRoomDetail from '../IntroRoomDetail/IntroRoomDetail';
import RoomDesc from '../RoomDesc/RoomDesc';
import RoomGallery from '../RoomGallery/RoomGallery';

const RoomDetails = ( {mainImg, roomDescription, roomTitle}) => {

    useEffect( () => {
        (
          async () => {
              const LocomotiveScroll = (await import('locomotive-scroll')).default
              const locomotiveScroll = new LocomotiveScroll();
          }
        )()
      }, [])

  return (
    <div className="mt-48">
        <IntroRoomDetail mainImg={mainImg} roomName={roomTitle}/>
        <RoomDesc roomDescArray={roomDescription}/>
        <RoomGallery/>
    </div>
  )
}

export default RoomDetails