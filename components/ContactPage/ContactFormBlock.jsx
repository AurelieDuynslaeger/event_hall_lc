import React from 'react'
import Input from './Input'
import Checkbox from './Checkbox'
import Block from './Block'
import DrawOutlineButton from '../DrawOutlineButton/DrawOutlineButton'
import { BsSend } from "react-icons/bs";


const ContactFormBlock = () => {
  return (
    <Block className="col-span-12 text-xl leading-snug font-sail">
        <form className="space-y-2">
          <div className='flex justify-around'>
            <Checkbox label="Mariage" />
            <Checkbox label="Anniversaires" />
            <Checkbox label="Baptême" />
            <Checkbox label="Autre demande" />

          </div>

            <div className='flex justify-around'>
            <Input label="Nom & Prénom *" type="text" />
            <Input label="E-mail *" type="email" />
            <Input label="Téléphone *" type="tel" />
              
            </div>
            <Input label="Votre message *" type="textarea" rows="3" />
            <DrawOutlineButton href="/" className="w-2/5 m-auto mb-8"> 
            <p>Envoyer</p>
            <BsSend className="ml-2 h-8 w-8"/>
          </DrawOutlineButton>
        </form>
    </Block>
  )
}

export default ContactFormBlock