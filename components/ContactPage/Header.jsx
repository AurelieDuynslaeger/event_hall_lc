import React from 'react'
import Block from './Block'
import { cinzel } from '@/app/font'

const Header = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
    <h1 className="mb-12 text-xl font-medium leading-tight flex flex-col items-center space-y-2">
      
      <span className="text-primary">
      Nous sommes avant tout à votre disposition. N&apos;hésitez pas à nous appeler
            ou nous laisser un message, nous répondrons à votre demande dans les plus
            brefs délais.
      </span>
      <span className={`${cinzel.className} text-xl font-bold text-primary`}>
      Olivier & Didier.{" "}
      </span>
    </h1>
  </Block>
  )
}

export default Header