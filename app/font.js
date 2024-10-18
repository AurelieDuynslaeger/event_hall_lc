import { Poppins, Poiret_One } from 'next/font/google'

export const poppins = Poppins({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
})

export const poiret = Poiret_One({
    weight: ['400'],
    subsets: ['latin']
})