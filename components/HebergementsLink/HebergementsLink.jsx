'use client';
import React from 'react'

export default function index({index, title, setModal}) {
    return (
        <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className="group flex w-full justify-between items-center py-12 px-24 border-t cursor-pointer transition duration-200 hover:opacity-50 last-of-type:border-b border-gray-300">
            <h2 className='text-5xl font-normal transition-all duration-400 group-hover:-translate-x-2'>{title}</h2>
        </div>
    )
}