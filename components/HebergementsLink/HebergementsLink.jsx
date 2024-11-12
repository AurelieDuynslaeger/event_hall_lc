'use client';
import Link from 'next/link';
import React from 'react'

const HebergementsLink = ({index, title, setModal, roomDetailUrl}) => {
    return (
        <Link href={roomDetailUrl}>
            <div 
                onMouseEnter={() => {setModal({active: true, index})}} 
                onMouseLeave={() => {setModal({active: false, index})}} 
                className="group flex w-full justify-between items-center py-8 px-24 border-t cursor-pointer transition duration-200 hover:opacity-50 last-of-type:border-b border-secondary">
                <h2 className='text-4xl font-normal transition-all duration-400 group-hover:-translate-x-2'>{title}</h2>
            </div>
        </Link>
    )
}

export default HebergementsLink