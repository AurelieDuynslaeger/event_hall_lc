import React from 'react'
import { FiMail } from 'react-icons/fi'
import { SiFacebook, SiInstagram, SiLinkedin } from 'react-icons/si'
import SocialLink from './SocialLink'

const SocialsBlock = () => {
  return (
    <>
    <SocialLink icon={<SiLinkedin />} color="bg-secondary" url="https://fr.linkedin.com/in/domaine-lassalle-1b0a58303" />
    <SocialLink icon={<SiInstagram />} color="bg-secondary" url="https://instagram.com/lassallestcreac/" />
    <SocialLink icon={<SiFacebook />} color="bg-secondary" url="https://facebook.com/domaine.lassalle.st.creac" />
    <SocialLink icon={<FiMail />} color="bg-secondary" url="mailto:contact@domaine-lassalle.fr" />
</>
  )
}

export default SocialsBlock