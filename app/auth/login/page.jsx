"use client";

import { useState } from 'react'
import Link from "next/link"
import { AiFillFacebook as Facebook, AiFillGoogleCircle as Google, AiOutlineGithub as GitHub } from "react-icons/ai"
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation"
import LoginButton from "@/components/LoginButton";

const Page = () => {

  const [type, setType] = useState("user")

  const router = useRouter();

  const handleLogin = () => {
    
  }

  const handleChangeType = () => {
    if(type === "user") setType("photographer")
    else setType("user")
  }


  // const form = useForm({
  //   defaultValues: {
  //     email: "", 
  //     contraseña: ""
  //   }
  // })

  // function onSubmit (values){
  //   createLoginRequest(values)
  // }

  return (
    <div className="w-full mt-[5vh] flex flex-col lg:flex-row-reverse pt-14 min-h-[90vh]">
      <div className="w-full flex pt-20 flex-col items-center lg:w-[65%]">
        <h1 className="text-4xl md:text-6xl mb-4 font-bold text-black">Inicia Sesión</h1>
        <p className="text-base lg:text-xl font-light mt-10 mb-16 max-w-[600px] lg:max-w-[700px] text-gray-950 px-6 lg:px-0 text-center text-wrap">
          Crea una cuenta para unirte a nuestra plataforma y acceder a servicios de fotografía personalizados según tus necesidades.
        </p>

        <div className='w-[90%] max-w-[320px] flex flex-col items-center justify-around mt-5'>
            <div className='w-full flex items-ceneter justify-between py-4'>
              <span className='text-blue-600 text-xs'>
                {type === "photographer" ? "Ingresa como usuario" : "Ingreasa como fotográfo"}
              </span>
              <span className='text-blue-600 text-xs'>
                <Link href="/auth/register">Regístrate</Link>
                </span>
            </div>
            <LoginButton Icon={Google} provider="Google" className="border border-black text-black"/>
            <LoginButton Icon={GitHub} provider="Github" className="text-white bg-[#000]"/>
            <LoginButton Icon={Facebook} provider="Facebook" className="text-white bg-[#0000FF]"/>
        </div>
          
      </div>
        <img className="hidden self-center lg:flex h-[70vh] object-contain" src="/photographer.png" alt="register image" />
    </div>
  );
  
}

export default Page



{/* <Form className="" {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-[90%] md:w-[400px] mb-10">
            <div className="w-full flex items-center justify-between">
              <span onClick={handleChangeType} className="text-sm text-blue-600 hover:text-blue-900 cursor-pointer">Iniciar sesión como {type === "photographer" ? "Usuario" : "Fotógrafo"}</span>
              <Link href="/auth/register">
                <span className="text-sm text-blue-600 cursor-pointer">Regístrate</span>
              </Link>
            </div>
              <FormInput 
                form={form} 
                type="email"
                placeholder={type === "user" ? "Email del usuario" : "Email del Fotógrafo"} 
                name="email" label={type === "user" ? "Email del usuario" : "Email del Fotógrafo"} 
              />
              <FormInput
                form={form}
                type="password" 
                placeholder={type === "user" ? "Contraseña del usuario" : "Contraseña del Fotógrafo"}
                name="contraseña"
                label={type === "user" ? "Contraseña del usuario" : "Contraseña del Fotógrafo"}
              />
              <Button
                disabled={isPending}
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                {
                  isPending ? "Loading ..." : "Iniciar sesión"
                }
                
              </Button>
            </form>
          </Form> */}