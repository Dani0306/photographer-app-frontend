"use client";

import Calendar from "./Calendar";
import DashboardCard from "./DashboardCard";

const DashboardContent = ({ user }) => {
  
  return (
    <div className="md:space-x-8 space-y-8 md:space-y-0 w-full mt-[10vh] min-h-[90vh] py-[30px] px-[12px] md:px-[20px] flex flex-col items-center justify-center md:items-start md:flex-row">
      <DashboardCard title="Reservas Pendientes" description="Ten presente estas fechas resaltadas en tu calendario.">
        <Calendar />
      </DashboardCard>
      <DashboardCard title="Ganancias" description="Monitorea y analiza tus ingresos y ganancias de las reservas completadas.">
        <div className="w-full flex flex-col">
          <span>Balance</span>
          <span className="text-3xl">
            230.000$
          </span>
          <div className="w-full flex space-x-2 items-end justify-center mt-16">
            <div className="w-[20px] h-[100px] bg-blue-600"></div>
            <div className="w-[20px] h-[20px] bg-blue-600"></div>
            <div className="w-[20px] h-[50px] bg-blue-600"></div>
            <div className="w-[20px] h-[80px] bg-blue-600"></div>
            <div className="w-[20px] h-[60px] bg-blue-600"></div>
            <div className="w-[20px] h-[44px] bg-blue-600"></div>
            <div className="w-[20px] h-[30px] bg-blue-600"></div>
            <div className="w-[20px] h-[10px] bg-blue-600"></div>
            <div className="w-[20px] h-[80px] bg-blue-600"></div>
            <div className="w-[20px] h-[90px] bg-blue-600"></div>
            <div className="w-[20px] h-[44px] bg-blue-600"></div>
            <div className="w-[20px] h-[100px] bg-blue-600"></div>
            <div className="w-[20px] h-[10px] bg-blue-600"></div>
          </div>
        </div>
      </DashboardCard>
      <DashboardCard title="Calificaciones" description="Consulta las calificaciones de los clientes para evaluar el desempeño del fotógrafo.">
        <div className="w-full flex flex-col">
        <div className="w-full flex flex-col my-2">
            <span>Calidad</span>
            <div className="w-[90%] bg-blue-600 h-[20px]" />
          </div>
          <div className="w-full flex flex-col my-2">
            <span>Creatividad</span>
            <div className="w-[70%] bg-blue-600 h-[20px]" />
          </div>
          <div className="w-full flex flex-col my-2">
            <span>Puntualidad</span>
            <div className="w-[40%] bg-blue-600 h-[20px]" />
          </div>
          <div className="w-full flex flex-col my-2">
            <span>Equipo</span>
            <div className="w-[100%] bg-blue-600 h-[20px]" />
          </div>
        </div>
      </DashboardCard>
      {/* <DashboardCard title="Progreso" description="Visualiza el avance y progreso del tu agenda a través de la plataforma.">
        <div className="w-full h-max flex flex-col space-y-3">
          <div className="w-[80%] flex items-center justify-between">
            <img className="w-[60px] h-[60px] rounded-full object-cover" src="/photo3.jpg" alt="" />
          </div>
          <div className="w-[80%] flex items-center justify-between">
            <span className="pl-2">{user?.nombre}</span>
          </div>
          <div className="w-[80%] flex items-center justify-between">
            <span className="pl-2">Ubicaión: {user?.ubicacion}</span>
          </div>
          <div className="w-[80%] flex items-center justify-between">
            <span className="pl-2">Telefóno: {user?.telefono}</span>
          </div>
          <div className="w-[80%] flex items-center justify-between">
            <span className="pl-2">Contacto: {user?.email}</span>
          </div>
          <button className="w-full !mt-8 bg-black text-white h-[50px] rounded-xl">
            Modificar
          </button>
        </div>
      </DashboardCard> */}
      </div>
  )
}

export default DashboardContent