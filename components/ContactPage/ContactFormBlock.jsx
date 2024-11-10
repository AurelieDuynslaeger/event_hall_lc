import React from 'react'
import Input from './Input'
import Checkbox from './Checkbox'
import Block from './Block'


const ContactFormBlock = () => {
  return (
    <Block className="col-span-12 text-xl leading-snug">
        <form className="space-y-2">
          <div className='flex'>
            <Checkbox label="Demande de disponibilité" />
            <Checkbox label="Réserver une suite ou une chambre" />
            <Checkbox label="Réserver un Gîte (l'étable ou le studio)" />
            <Checkbox label="Réserver l'Orangerie / salle Saint-Loup" />
            <Checkbox label="Autre demande d'information" />

          </div>

            <div className='flex justify-around'>
            <Input label="Nom & Prénom *" type="text" />
            <Input label="E-mail *" type="email" />
            <Input label="Téléphone *" type="tel" />
              
            </div>
            <Input label="Message *" type="textarea" rows="5" />

            <button
                type="submit"
                className="w-1/2 m-auto mt-4 flex items-center justify-center gap-2 rounded bg-red-600 px-3 py-2 text-lg font-medium text-white hover:bg-red-700"
            >
                Envoyer
            </button>
        </form>
    </Block>
  )
}

export default ContactFormBlock