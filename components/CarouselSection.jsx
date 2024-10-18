"use client";

import { HERO_SECTION_PICTURES } from "@/lib/constants";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { useRef }from "react"
import Autoplay from "embla-carousel-autoplay"

const CarouselSection = () => {


  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
<Carousel
      plugins={[plugin.current]}
      className="max-w-full min-h-[100vh] relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <div className="absolute inset-0 z-[10] bg-black opacity-50" />
      <h1 className='left-1/2 z-[50] top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute px-6 lg:px-0 text-center font-bold text-5xl lg:text-7xl text-white text-wrap leading-[1.2] lg:leading-none'>
          Encuentra el fotógrafo <br/> perfecto para cada ocasión.
      </h1>
      <CarouselContent>
      {
        HERO_SECTION_PICTURES.map((image, index) => (
        <CarouselItem key={index}>
          <div
            className="w-full h-[100vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          />
        </CarouselItem>
      ))}
      </CarouselContent>
    </Carousel>
  )
}

export default CarouselSection