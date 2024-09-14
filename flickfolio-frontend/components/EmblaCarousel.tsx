'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
const urlBase = "https://image.tmdb.org/t/p/original/";

export function EmblaCarousel(props:any) {
  const [emblaRef] = useEmblaCarousel({},[Autoplay()])
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container min-h-screen">
        {props.imgArray.map((i:any) => {
          return <img src={i} className='embla__slide object-cover brightness-[0.25]' key={i.index}/>
        })}
      </div>
    </div>
  )
}