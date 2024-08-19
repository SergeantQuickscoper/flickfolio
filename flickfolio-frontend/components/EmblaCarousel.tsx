'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


export function EmblaCarousel(props:any) {
  const [emblaRef] = useEmblaCarousel({},[Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container min-h-screen">
        <img src='5.jpg' className='embla__slide object-cover' />
        <img src='2.jpg' className='embla__slide object-cover'/>
        <img src='3.jpg' className='embla__slide object-cover'/>
        <img src='4.jpg' className='embla__slide object-cover'/>
        <img src='1.jpg' className='embla__slide object-cover'/>
      </div>
    </div>
  )
}