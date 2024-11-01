"use client"

import FormInput from '@/components/FormInput'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { useMutation } from '@tanstack/react-query'
import { toast } from '@/hooks/use-toast'
import { sendProfileRequest } from '@/app/profile/actions'

const ProfileForm = ({ user, registeredUserData }) => {

  const [isCompleted, setIsCompleted] = useState(Boolean(registeredUserData))

  const { mutate: completeProfileRequest, isPending } = useMutation({
    mutationKey: ["profile"], 
    mutationFn: sendProfileRequest, 
    onSuccess: () => {
      toast({
        title: "Perfil completado exitosamente ✅",
        description: "Ahora puedes empezar a recivir reservaciones de tus clientes.",
        variant: "default"
      })
    }, 
    onError: () => {
      toast({
        title: "Algo salio mal, inténtalo de nuevo.",
        description: "Parece que hubo un error al guardar los datos.",
        variant: "destructive"
      })
    }
  })


  const form = useForm({
    defaultValues: {
      nombre: user.name, 
      email: user.email, 
      image_url: user.image,
      precio_por_hora: registeredUserData.precio_por_hora, 
      servicios: registeredUserData.servicios.join(", "), 
      ubicacion: registeredUserData.ubicacion, 
      redes_sociales: registeredUserData.redes_sociales.join(", "), 
      telefono: registeredUserData.telefono
    }
  })

  const onSubmit = (values) => {
    completeProfileRequest(values)
  }

  return (
    <div className='w-full h-[90vh] my-[10vh]'>
      <div className='w-full h-full grilla'>
        <div className='w-full h-full border-b md:border-r md:border-b-0 border-black flex flex-col items-center md:items-end md:px-6'>
          <img src="/galery6.jpg" className='w-[100px] md:w-[200px] my-5 md:h-[200px] h-[100px] rounded-full object-cover' alt="profile picture" />     
          <h3 className='text-base md:text-xl md:mt-5'>Fotógrafo</h3>
          <h2 className='text-base md:text-xl font-semibold'>{user?.name}</h2>
          <h3 className='text-base md:text-xl'>{user?.email}</h3>
        </div>
        <div className='w-full p-8 md:px-10 md:py-6 h-full flex flex-col items-center md:items-start'>
          <h1 className="text-4xl md:text-6xl mb-4 md:mb-8 font-semibold md:font-bold text-black">Completa tu perfil</h1>

          <Form className="" {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-[90%] md:w-[400px] mt-10">

                <FormInput form={form} type="number" placeholder="Precio por hora" name="precio_por_hora" label="Precio por hora" />
                <FormInput form={form} name="servicios" placeholder="Servicios o Especialidad" label="Servicios o Especialidad" />
                <FormInput form={form} name="ubicacion" placeholder="Ubicación" label="Ubicación" />
                <FormInput form={form} name="redes_sociales" placeholder="Redes sociales" label="Redes Sociales" />
                <FormInput form={form} name="telefono" placeholder="Teléfono" label="Teléfono" />

              <Button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                {
                  isPending ? "Loading ..." : isCompleted ? "Modificar Perfil"  : "Actualizar perfil"
                }
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default ProfileForm