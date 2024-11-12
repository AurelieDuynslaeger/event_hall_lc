import React from 'react'
import { FiMapPin } from 'react-icons/fi'
import Block from './Block'

const LocationBlock = () => {
  return (
    <Block className="col-span-12 flex items-center gap-4 md:col-span-3">
        <FiMapPin className="text-4xl text-secondary" />
        <p className="text-center text-lg text-primary">Domaine Lassalle Saint Créac</p>
    </Block>
  )
}

export default LocationBlock