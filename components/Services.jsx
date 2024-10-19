"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { cn } from "@/lib/utils"
  import { useState, useEffect } from 'react'
  import { useInView } from "react-intersection-observer"
  import { CAROUSEL_SERVICES_ITEMS } from "@/lib/constants";
  
  const Services = () => {

    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.25
      })

    
    // CAROUSEL CODE 
  
    const [api, setApi] = useState()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
  

    useEffect(() => {
      if (!api) {
        return
      }
  
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)
  
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
      })
    }, [api])
  
  
    return (
      <section id="services" ref={ref} className='w-full px-4 mt-[100px] lg:min-h-[90vh] flex flex-col items-center justify-center'>
           <h2 className={cn("font-bold text-4xl md:text-5xl text-center lg:text-5xl xl:text-6xl opacity-0 translate-x-[-150px] transition-all duration-1000", inView && "fadeInX")}>
             Servicios de <span className='text-blue-600'>Fotografía</span> disponibles
           </h2>
           <p className={cn("text-base lg:text-xl font-light mt-10 max-w-[600px] lg:max-w-[700px] text-gray-950 px-6 lg:px-0 text-center text-wrap opacity-0 translate-x-[100px] transition-all duration-1000", inView && "fadeInX")}>
               Nuestros fotógrafos ofrecen una amplia variedad de servicios para cada tipo de evento o situación: bodas, sesiones de moda, eventos corporativos, y más.
          </p>

          <Carousel className={cn("w-[90%] md:w-[80%] lg:w-[50%] mx-auto min-h-[50vh] mt-16 opacity-0 translate-y-[-100px] transition-all duration-1000",  inView && "fadeInY")}>
            <CarouselContent>
              {CAROUSEL_SERVICES_ITEMS.map((item, index) => (
                <CarouselItem key={index}>
                  <div className='m-auto w-full h-[50vh] md:w-[400px] lg:w-[600px] lg:h-[500px] flex items-center flex-col p-2'>
                    <h1 className='text-sm text-center lg:text-2xl font-semibold mb-3 lg:mb-10'>
                      {item.title}
                    </h1>
                    <img 
                      className='w-full h-full rounded-xl object-cover' 
                      src={item.image} 
                      alt="image" 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>

      </section>
    )
  }
  
  export default Services