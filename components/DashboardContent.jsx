"use client";

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const DashboardContent = () => {
  return (
<div className="w-full mt-[10vh] min-h-[90vh] px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-4">
    <Card className="w-full h-max md:col-span-2 lg:border border-black">
      <CardHeader>
        <CardTitle>Vista General</CardTitle>
        <CardDescription>Aquí tienes un breve resumen de tu rutina</CardDescription>
      </CardHeader>
      <CardContent>
      <div className="grid grid-cols-auto-fill place-items-center place-content-center gap-6 p-2">
        <div className="w-[170px] h-[90px] border border-black rounded flex-col flex items-center justify-center text-sm hover:translate-y-[-3px] transition-transform cursor-pointer">
            <span>Revervas Pendientes</span>
            <strong className="mt-2">0</strong>
        </div>
        <div className="w-[170px] h-[90px] border border-black rounded flex-col flex items-center justify-center text-sm hover:translate-y-[-3px] transition-transform cursor-pointer">
            <span>Ganancias Totales</span>
            <strong className="mt-2">2.400.000$</strong>
        </div>
        <div className="w-[170px] h-[90px] border border-black rounded flex-col flex items-center justify-center text-sm hover:translate-y-[-3px] transition-transform cursor-pointer">
            <span>Projectos en curso</span>
            <strong className="mt-2">0</strong>
        </div>
        <div className="w-[170px] h-[90px] border border-black rounded flex-col flex items-center justify-center text-sm hover:translate-y-[-3px] transition-transform cursor-pointer">
            <span>Calificaciones y reseñas</span>
            <strong className="mt-2">0</strong>
        </div>
      </div>


      </CardContent>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>



    <Card className="w-full md:w-[375px] h-[400px] border border-black">
      <CardHeader>
        <CardTitle>Administración de Reservaciones</CardTitle>
        <CardDescription>Aquí tienes un breve resumen de tus reservas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-max flex flex-col items-center justify-center space-y-3">
          <div className="w-[90%] rounded-md h-[50px] flex items-center justify-center border border-black cursor-pointer hover:translate-y-[-3px] transition-transform">
            Reservas entrantes  <span className="ml-3">&rarr;</span>
          </div>
          <div className="w-[90%] rounded-md h-[50px] flex items-center justify-center border border-black cursor-pointer hover:translate-y-[-3px] transition-transform">
            Reservas pasadas  <span className="ml-3">&rarr;</span>
          </div>
          <div className="w-[90%] rounded-md h-[50px] flex items-center justify-center border border-black cursor-pointer hover:translate-y-[-3px] transition-transform">
            Ver Calendario  <span className="ml-3">&rarr;</span>
          </div>
          <div className="w-[90%] rounded-md h-[50px] flex items-center justify-center border border-black cursor-pointer hover:translate-y-[-3px] transition-transform">
            Estado de las reservas  <span className="ml-3">&rarr;</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>

    </ div>
  )
}

export default DashboardContent