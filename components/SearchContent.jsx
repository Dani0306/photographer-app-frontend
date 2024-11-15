"use client"

import React, { useEffect, useState } from 'react'
import { Facebook, Github, Instagram, MapPin, Search, Star, Twitter } from 'lucide-react'
import { formatToCOP } from '@/lib/utils'

const SearchContent = ({ photographers }) => {

    const [initialPhotographers, setInitialPhotographers] = useState(photographers)
    const [variablePhotographers, setVariablePhotographers] = useState([]);
    const [query, setQuery] = useState("")

    const filterPhotographer = () => {
        setVariablePhotographers(initialPhotographers.filter(item => {
            return item.nombre.split(" ").join("").toLowerCase().includes(query) || item.ubicacion.toLowerCase().includes(query) || item.servicios.join("").toLowerCase().includes(query) || item.precio_por_hora.toString().includes(query)
        }))
    }

    useEffect(() => {
        filterPhotographer()
        console.log(variablePhotographers)
    }, [query])

  return (
    <div className="w-full min-h-[100vh] pt-10 flex flex-col items-center mt-[10vh]">
        <h2 className="font-bold text-4xl mb-16 mt-6 md:text-5xl text-center lg:text-5xl xl:text-6xl">Encuentra la mejor opción</h2>
            <div className='relative mb-8'>
                <Search className='absolute left-3 w-5 h-5 top-3'/>
                <input onChange={(e) => setQuery(e.target.value)} value={query} placeholder='Filtra por especialidad, ciudad o nombre.' type="text" className='bg-[#d7dbdd] px-10 min-w-[350px] h-[45px] rounded-full md:w-[500px] lg:w-[650px] border-2 border-black' />
            </div>

            <div className='flex flex-col overflow-y-auto w-[90%] md:w-[750px]'>
            {variablePhotographers.map(item => (
                <div className='w-full flex flex-col h-[200px] border border-black my-2'>
                    <div className='h-[20%] w-full flex items-center justify-between px-4 border-b border-black'>
                        <div className='w-max h-full flex items-center'>
                            <MapPin className='w-6 h-6 mr-2'/>
                            <span>{item?.ubicacion}</span>
                        </div>
                        <span>{item?.nombre}</span>
                    </div>
                    <div className='w-full h-[60%] justify-between flex flex-col px-4 py-3'>
                        <div className='w-full flex justify-between'>
                            <div className='flex items-center justfy-center space-x-1'>
                                <img className='w-[50px] h-[50px] rounded-full object-cover' src="photo3.jpg" alt="" />
                                <div className='flex'>
                                    <Facebook className='w-5 h-5 ml-1'/>
                                    <Instagram className='w-5 h-5 ml-1'/>
                                    <Twitter className='w-5 h-5 ml-2'/>
                                </div>
                            </div>
                            <span>{item?.email}</span>
                        </div>
                        <div className='w-full h-[35px] flex justify-between'>
                            <span className='self-end'>{item?.servicios.join(", ")}</span>
                            <button className='w-[100px] h-[35px] rounded-xl text-sm bg-blue-600 text-white'>
                                Contratar
                            </button>
                        </div>
                    </div>
                    <div className='h-[20%] w-full flex items-center justify-between px-4 border-t border-black'>
                        <span>Precio Hora: {formatToCOP(item?.precio_por_hora)} COP</span>
                        <div className='w-max h-full flex items-center'>
                            <span>Calificación: {item?.calificacion}</span>
                            <Star className='w-5 h-5 ml-2'/>
                        </div>
                    </div>
                </div>
            ))}
            </div>
    </div>
  )
}

export default SearchContent