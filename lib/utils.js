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
