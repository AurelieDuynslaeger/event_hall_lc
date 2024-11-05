import React from 'react'

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold flex items-center justify-center gap-2">{children}</h3>
  )
}

export default CardTitle