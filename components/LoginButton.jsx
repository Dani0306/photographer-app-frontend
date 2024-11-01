import { cn } from '@/lib/utils'
import React from 'react'

const LoginButton = ({  Icon, provider, className, ...props }) => {

  return (
    <div className='w-full h-max flex flex-col items-center justify-center my-1 hover:scale-[1.03] transition-all duration-500'>
        <button className={cn("w-full h-[50px] flex items-center rounded-md justify-start pl-[14%] space-x-3", className)} {...props}>
            {provider === "Google" ? <img src="/google.png" className='w-8 h-8 object-cover'/> : <Icon className='!w-8 !h-8 text-white' />}
          <span className='text-sm md:text-base'>Inicia sesión con {provider}</span>
        </button>
    </div>
  )
}

export default LoginButton