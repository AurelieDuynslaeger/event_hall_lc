import React from 'react'
import { FiMail } from 'react-icons/fi'
import { SiFacebook, SiInstagram, SiLinkedin } from 'react-icons/si'
import SocialLink from './SocialLink'

const SocialsBlock = () => {
  return (
    <>
    <SocialLink icon={<SiLinkedin />} color="bg-background border-2 border-primary" url="https://fr.linkedin.com/in/domaine-lassalle-1b0a58303" />
    <SocialLink icon={<SiInstagram />} color="bg-background border-2 border-primary" url="https://instagram.com/lassallestcreac/" />
    <SocialLink icon={<SiFacebook />} color="bg-background border-2 border-primary" url="https://facebook.com/domaine.lassalle.st.creac" />
    <SocialLink icon={<FiMail />} color="bg-background border-2 border-primary" url="mailto:contact@domaine-lassalle.fr" />
</>
  )
}

export default SocialsBlock