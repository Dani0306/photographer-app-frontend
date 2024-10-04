"use client";

import { useForm } from "react-hook-form"
import React from 'react'

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import FormInput from "@/components/FormInput";

const page = () => {

  const form = useForm({
    defaultValues: {
      nombre: "", 
      email: "", 
      contraseña: "", 
      precio_por_hora: 0, 
      servicios: "", 
      ubicacion: "", 
      redes_sociales: "", 
      telefono: ""
    }
  })

  function onSubmit (values){
    console.log(values)
  }

  return (
    <div className="w-full mt-[10vh] flex items-center justify-center bg-gray-100 min-h-[90vh]">
      <div className="w-[350px] bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-16">Register</h2>
        <Form className="w-full" {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormInput form={form} name="nombre" label="Nombre" />
            <FormInput form={form} type="email" name="email" label="Email" />
            <FormInput
              form={form}
              type="password"
              name="contraseña"
              label="Contraseña"
            />
            <FormInput
              form={form}
              type="number"
              name="precio_por_hora"
              label="Precio por hora"
            />
            <FormInput form={form} name="servicios" label="Servicios" />
            <FormInput form={form} name="ubicacion" label="Ubicación" />
            <FormInput form={form} name="redes_sociales" label="Redes Sociales" />
            <FormInput form={form} name="telefono" label="Teléfono" />
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
  
}

export default page