import React from 'react'
import { FiMail } from 'react-icons/fi'
import { SiFacebook, SiInstagram, SiLinkedin } from 'react-icons/si'
import SocialLink from './SocialLink'

const SocialsBlock = () => {
  return (
    <>
    <SocialLink icon={<SiLinkedin />} color="bg-primary border-[1px] border-background" url="https://fr.linkedin.com/in/domaine-lassalle-1b0a58303" />
    <SocialLink icon={<SiInstagram />} color="bg-primary border-[1px] border-background" url="https://instagram.com/lassallestcreac/" />
    <SocialLink icon={<SiFacebook />} color="bg-primary border-[1px] border-background" url="https://facebook.com/domaine.lassalle.st.creac" />
    <SocialLink icon={<FiMail />} color="bg-primary border-[1px] border-background" url="mailto:contact@domaine-lassalle.fr" />
</>
  )
}

export default SocialsBlock