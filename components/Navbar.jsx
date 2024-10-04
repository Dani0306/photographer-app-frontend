"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


const Navbar = () => {



  return (
    <nav className="w-full absolute left-0 top-0 h-[10vh] bg-transparent z-[20]">
        <div className="w-full h-full flex items-center justify-between px-4 md:px-6 lg:px-12">
            <img src="/logoFotografia.png" alt="" className="w-[50px] h-[50px] object-cover"/>
            <h2 className="text-white lg:hidden">Fótografia Profesional</h2>
            <ul className="hidden lg:flex w-max h-full items-center space-x-6">
                <li className="cursor-pointer text-white hover:text-gray-600 transition-all duration-500">Explorar Fotógrafos</li>
                <li className="cursor-pointer text-white hover:text-gray-600 transition-all duration-500">Servicios</li>
                <li className="cursor-pointer text-white hover:text-gray-600 transition-all duration-500">Portafolio</li>
                <li className="cursor-pointer text-white hover:text-gray-600 transition-all duration-500">Cómo funciona</li>
            </ul>
            <Sheet className="z-[21]">
                <SheetTrigger asChild>
                <button className="flex flex-col items-center justify-center h-max w-max">
                    <div className="w-[20px] h-[2px] bg-white mb-[2px] transition-[transform] border-none duration-500"></div>
                    <div className={"w-[20px] h-[2px] bg-white my-[2px] transition-[transform] border-none duration-500"}></div>
                    <div className="w-[20px] h-[2px] bg-white mt-[2px] transition-[transform] border-none translate-y-0 duration-500"></div>
                </button>
                </SheetTrigger>
                <SheetContent className=" border-none text-black">
                        <ul className="w-full flex flex-col">
                            <li className="lg:hidden w-[90%] mx-auto flex items-center justify-end pb-2 mb-2 mt-16 font-medium cursor-pointer hover:text-gray-500 transition-all duration-500 border-b border-gray-400">Explorar Fotógrafos</li>
                            <li className="lg:hidden w-[90%] mx-auto flex items-center justify-end pb-2 mb-4 font-medium cursor-pointer hover:text-gray-500 transition-all duration-500 border-b border-gray-400">Servicios</li>
                            <li className="lg:hidden w-[90%] mx-auto flex items-center justify-end pb-2 mb-4 font-medium cursor-pointer hover:text-gray-500 transition-all duration-500 border-b border-gray-400">Portafolio / Galería</li>
                            <li className="lg:hidden w-[90%] mx-auto flex items-center justify-end pb-2 mb-4 font-medium cursor-pointer hover:text-gray-500 transition-all duration-500 border-b border-gray-400">Cómo Funciona</li>
                            <li className="lg:mt-16 w-[90%] mx-auto flex items-center justify-end pb-2 mb-4 font-medium cursor-pointer hover:text-gray-500 transition-all duration-500 border-b border-gray-400">Opiniones y Testimonios</li>
                            <li className="w-[90%] mx-auto flex items-center justify-end pb-2 mb-4 font-medium cursor-pointer hover:text-gray-500 transition-all duration-500 border-b border-gray-400">Sobre Nosotros</li>
                            <li className="w-[90%] mx-auto flex items-center justify-end pb-2 mb-4 font-medium cursor-pointer hover:text-gray-500 transition-all duration-500 border-b border-gray-400">Iniciar sesión</li>
                            <li className="w-[90%] mx-auto flex items-center justify-end pb-2 mb-4 font-medium cursor-pointer hover:text-gray-500 transition-all duration-500 border-b border-gray-400">Registrate</li>
                        </ul>
                </SheetContent>
            </Sheet>
        </div>
    </nav>
  )
}

export default Navbar

