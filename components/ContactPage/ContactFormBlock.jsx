import React from 'react'
import Input from './Input'
import Checkbox from './Checkbox'
import Block from './Block'
import DrawOutlineButton from '../DrawOutlineButton/DrawOutlineButton'
import { BsSend } from "react-icons/bs";


const ContactFormBlock = () => {
  return (
    <Block className="col-span-12 text-xl leading-snug">
        <form className="space-y-2">
          <div className='flex justify-around'>
            <Checkbox label="Request Availability for Private Booking" />
            <Checkbox label="Book Suites or Rooms for Exclusive Use" />
            <Checkbox label="Inquire About Exclusive Group Services" />
            <Checkbox label="Other Information Request" />

          </div>

            <div className='flex justify-around'>
            <Input label="Name & Lastname *" type="text" />
            <Input label="E-mail *" type="email" />
            <Input label="Phone *" type="tel" />
              
            </div>
            <Input label="Your Message *" type="textarea" rows="5" />
            <DrawOutlineButton href="/hebergements" className="w-2/5 m-auto mb-8"> 
            <p>Send</p>
            <BsSend className="ml-2 h-8 w-8"/>
          </DrawOutlineButton>
        </form>
    </Block>
  )
}

export default ContactFormBlock