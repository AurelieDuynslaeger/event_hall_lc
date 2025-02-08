'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';

const IntroRoomDetail = ({ mainImg, roomName }) => {
    const background = useRef(null);
    const isInView = useInView(background, { once: true, margin: "-200px 0px" });

    return (
        <div className="relative w-full flex justify-center">
            <motion.div
                ref={background}
                initial={{ clipPath: 'inset(25%)' }}
                animate={isInView ? { clipPath: 'inset(0%)' } : {}}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="w-[80%] h-[80vh] absolute brightness-60"
            >
                <Image
                    src={mainImg}
                    fill={true}
                    alt="background image"
                    priority={true}
                    className='object-cover'
                />
            </motion.div>

            <div className="flex justify-center relative mt-[35vh] ">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                    className="text-primary font-stretch text-8xl font-bold z-3 text-center whitespace-nowrap backdrop-blur-lg p-4 rounded-xl"
                >
                    {roomName}
                </motion.h1>
            </div>
        </div>
    );
};

export default IntroRoomDetail;
