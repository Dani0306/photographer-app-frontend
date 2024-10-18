"use client";

import { GALERY_IMAGES } from '@/lib/constants';
import { cn, splitArray } from '@/lib/utils';
import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"
import { useInView as useInViewReactObserver } from 'react-intersection-observer';

const ReviewColumn = ({ reviews, className, reviewClassName, msPerPixel = 0 }) => {
  const columnref = useRef(null)
  const [columnHiehgt, setColumnHeight] = useState(0)
  const duration = `${columnHiehgt * msPerPixel}ms`

  useEffect(() => {
    if(!columnref.current) return 
    
    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnref.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnref.current)

    return () => {
      resizeObserver.disconnect()
    }

  }, [])

  return <div ref={columnref} className={cn("animate-marquee space-y-8 py-4", className)} style={{ "--marquee-duration": duration }}>
    {reviews.concat(reviews).map((imgSrc, reviewIndex) => (
      <Review key={reviewIndex} className={reviewClassName?.(reviewIndex % reviews.length)} imgSrc={imgSrc}/>
    ))}
  </div>

}


const Review = ({ imgSrc, className, ...props }) => {
  const POSSIBLE_ANIMATION_DELAYS = ["0s", "0.1s", "0.2s", "0.3s", "0.4s", "0.5s"]

  const animationDelay = POSSIBLE_ANIMATION_DELAYS[Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)]

  return <div className={cn("animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5", className)} {...props} style={{ animationDelay }}>
      <img className="w-[90%] md:w-[300px] h-[450px] object-cover" src={imgSrc} alt="" />
  </div>
}

const ReviewGrid = () => {

  const containerRef = useRef()
  const isInView = useInView(containerRef, { once: true, amount: 0.4 })
  const columns = splitArray(GALERY_IMAGES, 3)
  const column1 = columns[0]
  const column2 = columns[1]
  const column3 = splitArray(columns[2], 2)

  return <div ref={containerRef} className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
    {
      isInView ? 
      <>
          <ReviewColumn reviews={[...column1, ...column3.flat(), ...column2]} reviewClassName={(reviewIndex) => cn({ "md:hidden": reviewIndex >= column1.length + column3[0].length, "lg:hidden": reviewIndex >= column1.length })} msPerPixel={10}/>
          <ReviewColumn className='hidden md:block ' reviews={[...column2, ...column3[1]]} reviewClassName={(reviewIndex) => reviewIndex >= column2.length ? "lg:hidden" : ""} msPerPixel={15}/>
          <ReviewColumn className='hidden md:block ' reviews={column3.flat()} msPerPixel={10}/> 

      </> : 
      null
    }

    <div className='pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100'/>
    <div className='pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100'/>
  </div>

}

const Galery = () => {

  const { inView, ref } = useInViewReactObserver({
    triggerOnce: false, 
    threshold: 0.25
  })

  return (
    <div ref={ref} className="w-full my-[100px] px-4 flex flex-col items-center justify-center relative max-w-[5xl]">
        <h2 className={cn("font-bold text-4xl my-20 md:text-5xl text-center opacity-0 translate-x-[100px] transition-all duration-1000 lg:text-6xl", inView && "fadeInX")}>Conóce <span className="text-blue-600">Nuestro</span> Trabajo</h2>
      <ReviewGrid />
    </div>
  )
}

export default Galery