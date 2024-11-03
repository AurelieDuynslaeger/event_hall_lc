"use client"
import { useSearchParams} from 'next/navigation'
import React, { useState } from 'react'

const BookingPage = () => {

    const searchParams = useSearchParams()
    const room = searchParams.get('subject')

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Données de réservation:', formData)
        // Ajoute ici le code pour envoyer les données à ton API de réservation si nécessaire
    }

    return (
        <div className='mt-44 container m-auto'>
        {/* Lien pr revenir en arrière (en tout cas à nav-1 de l'user ) */}
        <h1>Vous souhaitez réserver  : {room}</h1>

        <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
                <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Réserver</button>
            </form>
        </div>
    )
}

export default BookingPage