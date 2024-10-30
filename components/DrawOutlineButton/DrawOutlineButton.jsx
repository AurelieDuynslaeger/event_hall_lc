import Link from 'next/link'
import React from 'react'

const DrawOutlineButton = ({ children, href, className = "", ...rest }) => {
  return (
    <Link href={href} className={`flex items-center justify-center ${className}`} passHref>
    <button
      {...rest}
      className="w-full group relative px-4 py-2 font-medium text-slate-950 transition-colors duration-[400ms]  hover:text-[#e39c7e]"
    >
      <span className='flex items-center justify-center text-3xl'>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#e39c7e] transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#e39c7e] transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#e39c7e] transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#e39c7e] transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
    </Link>
  )
}

export default DrawOutlineButton