"use client";

import { cn } from '@/lib/utils'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import RegisterButton from './RegisterButton';

const HowDoesItWork = () => {

    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.25
    })
    
  return (
    <section id='proccess' ref={ref} className='w-full my-[100px] px-4 flex flex-col items-center justify-center'>
        <h2 className={cn("font-bold text-4xl my-20 md:text-5xl text-center opacity-0 translate-x-[100px] transition-all duration-1000 lg:text-6xl", inView && "fadeInX")}>¿Cómo funciona?</h2>
        <div className='flex flex-col w-full items-center lg:flex-row lg:justify-center lg:space-x-6 max-w-full'>
            <div className={cn("w-full md:w-[70%] space-y-6 lg:max-w-[45%] flex flex-col items-center opacity-0 translate-x-[-100px] transition-all duration-1000 justify-center", inView && "fadeInX")}>
                <div className='w-full h-max flex items-center justify-between px-4'>
                    <div className='w-[20%] lg:w-[15%] h-[50px] bg-blue-600 rounded-3xl flex items-center justify-center'>
                        <span className='font-bold text-white text-2xl'>1</span>
                    </div>
                    <p className='w-[70%] text-left'>
                    Contáctanos por WhatsApp para explicarnos qué tipo de trabajo necesitas. Puedes enviarnos detalles específicos sobre tu tarea, traducción, ensayo o examen.
                    </p>
                </div>
                <div className='w-full h-nmax flex items-center justify-between px-4'>
                    <div className='w-[20%] lg:w-[15%] h-[50px] bg-blue-600 rounded-3xl flex items-center justify-center'>
                        <span className='font-bold text-white text-2xl'>2</span>
                    </div>
                    <p className='w-[70%] text-left'>
                        Te enviaremos un mensaje con los precios detallados según el tipo de trabajo y su nivel de dificultad. Aceptamos varios métodos de pago para tu conveniencia.
                    </p>
                </div>
                <div className='w-full h-nmax flex items-center justify-between px-4'>
                    <div className='w-[20%] lg:w-[15%] h-[50px] bg-blue-600 rounded-3xl flex items-center justify-center'>
                        <span className='font-bold text-white text-2xl'>3</span>
                    </div>
                    <p className='w-[70%] text-left'>
                        Una vez que recibas la información y estés de acuerdo, realiza el pago y envíanos el comprobante. Nosotros comenzaremos a trabajar de inmediato en tu solución.
                    </p>
                </div>
                <div className='w-full h-nmax flex items-center justify-between px-4'>
                    <div className='w-[20%] lg:w-[15%] h-[50px] bg-blue-600 rounded-3xl flex items-center justify-center'>
                        <span className='font-bold text-white text-2xl'>4</span>
                    </div>
                    <p className='w-[70%] text-left'>
                        Recibirás tu trabajo final directamente por WhatsApp o por el canal de contacto que prefieras en el tiempo acordado.
                    </p>
                </div>
            </div>
            <div className={cn("mx-auto lg:mx-0 w-[80%] h-[350px] flex items-center justify-center lg:h-[400hx] lg:w-[400px] mt-20 lg:mt-0 opacity-0 translate-x-[100px] transition-all duration-1000", inView && "fadeInX")}>
                <RegisterButton text={"Empezar "}/>
            </div>
        </div>
    </section>
  )
}

export default HowDoesItWork