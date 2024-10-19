"use client";

import { useForm } from "react-hook-form"
import { useState } from 'react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import FormInput from "@/components/FormInput";
import { sendRegisterPhotographerRequest, sendRegisterUserRequest } from "./actions";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation"

const Page = () => {

  const [type, setType] = useState("user")
  const router = useRouter();

  const handleChangeType = () => {
    if(type === "user") setType("photographer")
    else setType("user")
  }

  const { mutate: createRegisterRequest, isPending } = useMutation({
    mutationKey: ["register"], 
    mutationFn: type === "user" ? sendRegisterUserRequest : sendRegisterPhotographerRequest,
    onSuccess: () => {
      toast({
        title: "Registro exitoso ✅",
        description: "Seras redirigido a nuestra pagina principal.",
        variant: "default"
      })
      router.push("/")
    },
    onError: () => {
      toast({
        title: "Todos los campos son requeridos.",
        description: "Ya tienes cuenta? inicia sesión.",
        variant: "destructive"
      })
    }
  })

  const defaultValuesPhotographer = {
    nombre: "", 
    email: "", 
    contraseña: "", 
    precio_por_hora: 0, 
    servicios: "", 
    ubicacion: "", 
    redes_sociales: "", 
    telefono: ""
  }

  const defaultValuesUser = {
    nombre: "",
    email: "", 
    avatarUrl: "", 
    contraseña: "",
  }

  const form = useForm({
    defaultValues: type === "user" ? defaultValuesUser : defaultValuesPhotographer
  })

  function onSubmit (values){
    createRegisterRequest(values)
  }

  return (
    <div className="w-full mt-[5vh] flex flex-col lg:flex-row-reverse pt-14 min-h-[90vh]">
      <div className="w-full flex pt-20 flex-col items-center lg:w-[65%]">
        <h1 className="text-4xl md:text-6xl mb-4 font-bold text-black">Regístrate</h1>
        <p className="text-base lg:text-xl font-light mt-10 mb-16 max-w-[600px] lg:max-w-[700px] text-gray-950 px-6 lg:px-0 text-center text-wrap">
          Crea una cuenta para unirte a nuestra plataforma y acceder a servicios de fotografía personalizados según tus necesidades.
        </p>
          <Form className="" {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-[90%] md:w-[400px] mb-10">
            <div className="w-full flex items-center justify-between">
              <span onClick={handleChangeType} className="text-sm text-blue-600 hover:text-blue-900 cursor-pointer">Registrarse como {type === "photographer" ? "Usuario" : "Fotógrafo"}</span>
              <Link href="/auth/login">
                <span className="text-sm text-blue-600 cursor-pointer">Login</span>
              </Link>
            </div>
              <FormInput form={form} name="nombre" placeholder="nombre" label="Nombre" />
              <FormInput form={form} type="email" placeholder="email" name="email" label="Email" />
              <FormInput
                form={form}
                type="password" 
                placeholder="contraseña"
                name="contraseña"
                label="Contraseña"
              />
              {
                type === "photographer" && 
                <>
                  <FormInput form={form} type="number" placeholder="Precio por hora" name="precio_por_hora" label="Precio por hora" />
                  <FormInput form={form} name="servicios" placeholder="Servicios" label="Servicios" />
                  <FormInput form={form} name="ubicacion" placeholder="Ubicación" label="Ubicación" />
                  <FormInput form={form} name="redes_sociales" placeholder="Redes sociales" label="Redes Sociales" />
                  <FormInput form={form} name="telefono" placeholder="Teléfono" label="Teléfono" />
                </>
              }
              <Button
                disabled={isPending}
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                {
                  isPending ? "Loading ..." : "Registrárme"
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