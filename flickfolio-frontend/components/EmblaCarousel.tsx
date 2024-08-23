'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
const urlBase = "https://image.tmdb.org/t/p/original/";

export function EmblaCarousel(props:any) {
  const [emblaRef] = useEmblaCarousel({},[Autoplay()])
  let imgArray = ['5.jpg', '2.jpg', '3.jpg', '4.jpg', '1.jpg']
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container min-h-screen">
        {props.imgArray.map((i) => {
          return <img src={i} className='embla__slide object-cover' key={i.index}/>
        })}
      </div>
    </div>
  )
}