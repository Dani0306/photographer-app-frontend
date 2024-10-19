"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMutation } from "@tanstack/react-query";
import { serverLogout } from "./navbar/actions";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const Navbar = ({ user }) => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  const router = useRouter();
  const pathname = usePathname();

  const { mutate: logout } = useMutation({
    mutationKey: ["logout"],
    mutationFn: serverLogout,
    onSuccess: () => {
      toast({
        title: "Session cerrada correctamente ✅.",
        description: "Tu session ha sido cerrada de manera segura.",
        variant: "default",
      });
      router.refresh();
    },
    onError: () => {
      console.log("Error during logout");
    },
  });

  const handleClick = () => {
    logout();
  };

  return (
    <nav className="w-full mx-auto fixed left-0 top-0 h-[10vh] bg-transparent z-[100]">
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
            isScrolled ? "text-white" : "text-black"
          )}
        >
          {!user?.ubicacion && (
            <>
              <li className="cursor-pointer hover:text-gray-600 transition-all duration-500">
                Explorar Fotógrafos
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
                  isScrolled ? "bg-white" : "bg-black"
                )}
              ></div>
              <div
                className={cn(
                  "w-[20px] h-[2px] my-[2px] transition-[transform] border-none duration-500",
                  isScrolled ? "bg-white" : "bg-black"
                )}
              ></div>
              <div
                className={cn(
                  "w-[20px] h-[2px] bg-black mt-[2px] transition-[transform] border-none translate-y-0 duration-500",
                  isScrolled ? "bg-white" : "bg-black"
                )}
              ></div>
            </button>
          </SheetTrigger>

          {/* Mobile Menu Content */}
          <SheetContent className={`border-none ${isScrolled ? "bg-black text-white" : "text-black"} z-[110]`}>
            <ul className="w-full flex flex-col">
              {user && (
                <div className="w-[90%] mx-auto flex flex-col items-end mt-10">
                  <Avatar className="w-[60px] h-[60px] my-3">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>{user?.nombre}</AvatarFallback>
                  </Avatar>
                  <strong>{user?.nombre}</strong>
                  <span>{user?.ubicacion ? "Fotógrafo" : "Usuario"}</span>
                </div>
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

              {user ? (
                <li
                  onClick={handleClick}
                  className="w-[90%] mx-auto flex items-center justify-end pb-2 mb-4 font-medium cursor-pointer hover:text-gray-500 transition-all duration-500 border-b border-gray-400"
                >
                  Cerrar sesión
                </li>
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
