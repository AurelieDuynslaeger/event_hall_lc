import React from 'react'
import { FiMail } from 'react-icons/fi'
import { SiFacebook, SiInstagram, SiLinkedin } from 'react-icons/si'
import SocialLink from './SocialLink'

const SocialsBlock = () => {
  return (
    <>
    <SocialLink icon={<SiLinkedin />} color="bg-blue-500" url="#" />
    <SocialLink icon={<SiInstagram />} color="bg-pink-600" url="#" />
    <SocialLink icon={<SiFacebook />} color="bg-blue-800" url="#" />
    <SocialLink icon={<FiMail />} color="bg-red-600" url="mailto:contact@domaine-lassalle.fr" />
</>
  )
}

export default SocialsBlock