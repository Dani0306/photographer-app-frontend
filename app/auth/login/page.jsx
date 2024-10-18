"use client";

import { useForm } from "react-hook-form"
import { useState } from 'react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import FormInput from "@/components/FormInput";
import { useMutation } from "@tanstack/react-query";
import { sendLoginPhotographerRequest, sendLoginUserRequest } from "../login/actions";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation"

const Page = () => {

  const [type, setType] = useState("user")

  const router = useRouter();

  const handleChangeType = () => {
    if(type === "user") setType("photographer")
    else setType("user")
  }

  const { mutate: createLoginRequest, isPending } = useMutation({
    mutationKey: ["login"], 
    mutationFn: type === "user" ? sendLoginUserRequest : sendLoginPhotographerRequest,
    onSuccess: () => {
      toast({
        title: "Inicio de sesión exitoso ✅",
        description: "Seras redirigido a nuestra pagina principal.",
        variant: "default"
      })
      router.push("/")
    },
    onError: () => {
      toast({
        title: "Usuario o contraseña incorrect@.",
        description: "Ya tienes cuenta? inicia sesión.",
        variant: "destructive"
      })
    }
  })

  const form = useForm({
    defaultValues: {
      email: "", 
      contraseña: ""
    }
  })

  function onSubmit (values){
    createLoginRequest(values)
  }

  return (
    <div className="w-full mt-[5vh] flex flex-col lg:flex-row-reverse pt-14 bg-gray-100 min-h-[90vh]">
      <div className="w-full flex pt-20 flex-col items-center lg:w-[65%]">
        <h1 className="text-4xl md:text-6xl mb-4 font-bold text-black">Inicia Sesión</h1>
        <p className="text-base lg:text-xl font-light mt-10 mb-16 max-w-[600px] lg:max-w-[700px] text-gray-950 px-6 lg:px-0 text-center text-wrap">
          Crea una cuenta para unirte a nuestra plataforma y acceder a servicios de fotografía personalizados según tus necesidades.
        </p>
          <Form className="" {...form}>
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
          </Form>
      </div>
        <img className="hidden self-center lg:flex h-[70vh] object-contain" src="/photographer.png" alt="register image" />
    </div>
  );
  
}

export default Page