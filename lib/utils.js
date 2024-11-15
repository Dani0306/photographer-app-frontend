import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// split array galery function 

export const splitArray = (array, numberParts) => {
  const result = [];

  for (let i = 0; i < array.length; i++){
    const index = i % numberParts
    if(!result[index]){
      result[index] = [];
    }

    result[index].push(array[i])
  }

  return result

}

export function formatToCOP(number) {
  return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
  }).format(number);
}



export function formatDateToSpanish(dateString) {
  const date = new Date(dateString);
  
  // Define the days and months in Spanish
  const days = [
    "Domingo", "Lunes", "Martes", "Miércoles", 
    "Jueves", "Viernes", "Sábado"
  ];
  
  const months = [
    "enero", "febrero", "marzo", "abril", 
    "mayo", "junio", "julio", "agosto", 
    "septiembre", "octubre", "noviembre", "diciembre"
  ];
  
  // Extract the day, month, and year
  const dayOfWeek = days[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  // Return the formatted string
  return `${dayOfWeek} ${day} de ${month}, ${year}`;
}
