import React from 'react'
import Block from './Block'

const Header = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
    <h1 className="mb-12 text-xl leading-tight flex flex-col items-center space-y-2">
      
      <span className="text-background">
      Nous sommes là pour rendre votre expérience inoubliable. N`&apos;hésitez pas à nous appeler ou à nous envoyer un message, et nous vous répondrons dans les plus brefs délais.
      </span>
      <span className="text-2xl font-stretch text-background">
      L&apos;équipe de La Croustadine.{" "}
      </span>
    </h1>
  </Block>
  )
}

export default Header