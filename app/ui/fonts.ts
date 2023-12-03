import { Albert_Sans, Chicle, Outfit } from 'next/font/google'

export const albert = Albert_Sans({
  subsets: ['latin']
})
  
export const chicle = Chicle({
  subsets: ['latin'],
  weight: '400',
  variable: '--chicle',
})

export const outfit = Outfit({
  subsets: ['latin'],
})
  
