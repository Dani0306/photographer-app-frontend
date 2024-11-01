"use client";


import Link from "next/link"
import { AiFillFacebook as Facebook, AiFillGoogleCircle as Google, AiOutlineGithub as GitHub } from "react-icons/ai"
import LoginButton from "@/components/LoginButton";
import { signIn } from 'next-auth/react';
import { useState } from "react";

const Page = () => {

  const [type, setType] = useState("user")

  const handleSetType = () => {
    type === "user" ? setType("photographer") : setType("user")
  }

  const handleLogin = () => {
    if(type === "photographer") localStorage.setItem("type", "photographer")
    signIn("google")
  }

  return (
    <div className="w-full mt-[5vh] flex flex-col lg:flex-row-reverse pt-14 min-h-[90vh]">
      <div className="w-full flex pt-20 flex-col items-center lg:w-[65%]">
        <h1 className="text-4xl md:text-6xl mb-4 font-bold text-black">Inicia Sesión</h1>
        <p className="text-base lg:text-xl font-light mt-10 mb-16 max-w-[600px] lg:max-w-[700px] text-gray-950 px-6 lg:px-0 text-center text-wrap">
          Crea una cuenta para unirte a nuestra plataforma y acceder a servicios de fotografía personalizados según tus necesidades.
        </p>

        <div className='w-[90%] max-w-[320px] flex flex-col items-center justify-around mt-5'>
            <div className='w-full flex items-ceneter justify-between py-4'>
              <span onClick={handleSetType} className='text-blue-600 text-xs cursor-pointer'>
                {type === "photographer" ? "Ingresa como usuario" : "Ingreasa como fotográfo"}
              </span>
              <span className='text-blue-600 text-xs'>
                <Link href="/auth/register">Regístrate</Link>
                </span>
            </div>
            <LoginButton onClick={handleLogin} Icon={Google} provider="Google" className="border border-black text-black"/>
            <LoginButton Icon={GitHub}  provider="Github" className="text-white bg-[#000]"/>
            <LoginButton Icon={Facebook}  provider="Facebook" className="text-white bg-[#0000FF]"/>
        </div>
          
      </div>
        <img className="hidden self-center lg:flex h-[70vh] object-contain" src="/photographer.png" alt="register image" />
    </div>
  );
  
}

export default Page

