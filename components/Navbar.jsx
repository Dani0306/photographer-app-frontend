"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { signOut } from "next-auth/react"
import { IoClose } from "react-icons/io5";
import ConditionalLink from "./ConditionalLink";


const Navbar = ({ user, registeredUser }) => {

  const router = useRouter();
  const pathname = usePathname();

  const logout = () => {
    localStorage.removeItem("type")
    signOut()
    router.push("/")
  }

  const [isScrolled, setIsScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false)

  // Detects scroll position to toggle navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if(typeof window !== "undefined" && user && !registeredUser && localStorage.getItem("type") === "photographer" && pathname !== "/profile"){
      const timer = setTimeout(() => {
        setShowPopup(true)
      }, 10000);
      return () => clearTimeout(timer);      
    }
  }, [])



  return (
    <nav className="w-full mx-auto fixed left-0 top-0 h-[10vh] z-[100]">

{
  showPopup && (
    <div className="absolute w-full h-[100vh] z-[110] bg-black bg-opacity-50 flex items-center justify-center">
      <div className={`w-[90%] h-[250px] md:w-[450px] bg-white rounded-xl p-8 md:p-8 flex flex-col relative justify-center 
        transform transition duration-300 ease-out ${showPopup ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        
        <button onClick={() => setShowPopup(false)} className="absolute top-4 right-3">
          <IoClose className="w-6 h-6"/>
        </button>
        
        <h2 className="font-semibold text-base md:text-xl mb-4">Completa tu Perfil</h2>
        <p className="text-sm md:text-base">
          Completa tu perfil como fotógrafo para empezar a recibir reservas y servicios de tus clientes.
        </p>
        
        <div className="flex space-x-4 w-full justify-center mt-7">
          <button onClick={() => setShowPopup(false)} className="w-[150px] h-[35px] flex items-center justify-center border border-black rounded-xl">
            Más tarde
          </button>
          <button onClick={() => setShowPopup(false)} className="w-[150px] h-[35px] flex items-center justify-center bg-blue-600 text-white rounded-xl">
            <Link href="/profile">
              Ir ahora <span className="ml-2">&rarr;</span>
            </Link> 
          </button>
        </div>
      </div>
    </div>
  )
}

      <div
        className={`w-full ${isScrolled && "bg-black text-white"} transition-all duration-500 h-full flex items-center justify-between px-4 md:px-6 lg:px-12`}
      >
        {/* Logo */}
        <Link href="/">
          <img
            src="/logofotografia.png"
            alt="Logo"
            className="w-[50px] h-[50px] object-cover"
          />
        </Link>

        {/* Site Name */}
        <h2
          className={cn(
            "lg:hidden",
            isScrolled ? "text-white" : "text-black"
          )}
        >
          Fotografía Profesional
        </h2>

        {/* Desktop Menu */}
        <ul
          className={cn(
            "hidden lg:flex w-max h-full items-center space-x-6",
            pathname === "/" && "text-white" || isScrolled  ? "text-white" : "text-black"
          )}
        >
          {!user?.ubicacion && (
            <>
              <li className="cursor-pointer hover:text-gray-600 transition-all duration-500">
                <Link href="/searchphotographers">
                  Explorar Fotógrafos
                </Link>
              </li>
              <li className="cursor-pointer hover:text-gray-600 transition-all duration-500">
                Servicios
              </li>
            </>
          )}
          <li className="cursor-pointer hover:text-gray-600 transition-all duration-500">
            Portafolio / Galería
          </li>
          <li className="cursor-pointer hover:text-gray-600 transition-all duration-500">
            Cómo Funciona
          </li>
        </ul>

        {/* Mobile Menu - Sheet */}
        <Sheet className="z-[21]">
          <SheetTrigger asChild>
            <button className="flex flex-col items-center justify-center h-max w-max">
              <div
                className={cn(
                  "w-[20px] h-[2px] mb-[2px] transition-[transform] border-none duration-500",
                  pathname === "/" && "bg-white" || isScrolled ? "bg-white" : "bg-black"
                )}
              ></div>
              <div
                className={cn(
                  "w-[20px] h-[2px] my-[2px] transition-[transform] border-none duration-500",
                  pathname === "/" && "bg-white" || isScrolled ? "bg-white" : "bg-black"
                )}
              ></div>
              <div
                className={cn(
                  "w-[20px] h-[2px] bg-black mt-[2px] transition-[transform] border-none translate-y-0 duration-500",
                  pathname === "/" && "bg-white" || isScrolled ? "bg-white" : "bg-black"
                )}
              ></div>
            </button>
          </SheetTrigger>

          {/* Mobile Menu Content */}
          <SheetContent className={`border-none ${isScrolled ? "bg-black text-white" : "text-black"} z-[110]`}>
            <ul className="w-full flex flex-col">
              {user && (
                <ConditionalLink condition={typeof window !== "undefined" && localStorage?.getItem("type") === "photographer"} href="/profile">
                  <div className="w-[90%] mx-auto flex flex-col items-end mt-10">
                      <img src={user?.user?.image} className="w-[60px] h-[60px] rounded-full object-cover" alt="" />
                    <strong>{user?.user?.name}</strong>
                    <span>{typeof window !== "undefined" && localStorage.getItem("type") === "photographer" ? "Fotógrafo" : "Usuario"}</span>
                  </div>
                </ConditionalLink>
              )}

              {!user?.ubicacion && (
                <li className="lg:hidden w-[90%] mx-auto flex items-center justify-end pb-2 mb-2 mt-12 font-medium cursor-pointer hover:text-gray-500 transition-all duration-500 border-b border-gray-400">
                  Explorar Fotógrafos
                </li>
              )}

              <li
                className={cn(
                  "lg:hidden w-[90%] mx-auto flex items-center justify-end pb-2 mb-4 font-medium cursor-pointer hover:text-gray-500 transition-all duration-500 border-b border-gray-400",
                  user?.ubicacion && "mt-12"
                )}
              >
                Servicios
              </li>

              {user?.ubicacion && (
                <li className="lg:hidden w-[90%] mx-auto flex items-center justify-end pb-2 mb-4 font-medium cursor-pointer hover:text-gray-500 transition-all duration-500 border-b border-gray-400">
                  Portafolio / Galería
                </li>
              )}

              <li className="lg:hidden w-[90%] mx-auto flex items-center justify-end pb-2 mb-4 font-medium cursor-pointer hover:text-gray-500 transition-all duration-500 border-b border-gray-400">
                Cómo Funciona
              </li>
              <li className="lg:mt-16 w-[90%] mx-auto flex items-center justify-end pb-2 mb-4 font-medium cursor-pointer hover:text-gray-500 transition-all duration-500 border-b border-gray-400">
                Opiniones y Testimonios
              </li>
              <li className="w-[90%] mx-auto flex items-center justify-end pb-2 mb-4 font-medium cursor-pointer hover:text-gray-500 transition-all duration-500 border-b border-gray-400">
                Sobre Nosotros
              </li>
              {
                user && typeof window !== "undefined" && localStorage?.getItem("type") === "photographer" && <>
                <Link href="/dashboard">
                  <li
                    className="w-[90%] mx-auto flex items-center justify-end pb-2 mb-4 font-medium cursor-pointer hover:text-gray-500 transition-all duration-500 border-b border-gray-400">
                    Dashboard
                  </li>
                </Link>   
                </>
              }

              {user ? (
                <>
                <li
                onClick={logout}
                className="w-[90%] mx-auto flex items-center justify-end pb-2 mb-4 font-medium cursor-pointer hover:text-gray-500 transition-all duration-500 border-b border-gray-400"
              >
                Cerrar sesión
              </li>         
              </>
              
              ) : (
                <>
                  <Link href="/auth/login">
                    <li className="w-[90%] mx-auto flex items-center justify-end pb-2 mb-4 font-medium cursor-pointer hover:text-gray-500 transition-all duration-500 border-b border-gray-400">
                      Iniciar sesión
                    </li>
                  </Link>
                  <Link href="/auth/register">
                    <li className="w-[90%] mx-auto flex items-center justify-end pb-2 mb-4 font-medium cursor-pointer hover:text-gray-500 transition-all duration-500 border-b border-gray-400">
                      Regístrate
                    </li>
                  </Link>
                </>
              )}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
