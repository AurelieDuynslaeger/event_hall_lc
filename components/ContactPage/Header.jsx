import React from 'react'
import Block from './Block'

const Header = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
    <h1 className="mb-12 text-xl leading-tight flex flex-col items-center space-y-2">
      
      <span className="text-primary">
      We’re here to make your experience unforgettable. Feel free to call us or drop us a message, and we’ll get back to you as quickly as possible.
      </span>
      <span className="text-2xl font-stretch text-primary">
      Emma & Nathan.{" "}
      </span>
    </h1>
  </Block>
  )
}

export default Header