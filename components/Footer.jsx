"use client";

import React from 'react'
import { Button } from './ui/button'
import { Info } from 'lucide-react';

const Footer = () => {

  return (
    <footer className='w-full mt-[100px] pb-[40px]'>
        <div className="w-full flex flex-col items-center space-y-8 px-4">
          <div className='flex w-full lg:w-[80%] item-center justify-between'>
            <h3 className='text-xl font-bold lg:text-4xl'>Síguenos!</h3>
            <Button className="flex items-center justify-evenly" variant="default">
              Mas información
              <Info className='size-4 ml-2'/>
            </Button>
          </div>

          <div className='w-full lg:w-[80%] bg-black h-[1px]' />

          <div className='w-full flex items-center justify-between lg:w-[80%] '>
            <span className='font-bold text-gray-950'>@fotomatch</span>
            <span className='hidden md:inline font-extralight text-gray-950'>Copyright © 2021 - 2024 PHOTOMATCH. All rights reserved.</span>
            <div className='flex space-x-2 items-center'>
              <a href="https://www.instagram.com/serviciosinglesdaniel/">
                <img src="/instagram.png" className='size-6 object-cover' alt="instagram" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61566505854285">
                <img src="/facebook.png" className='size-6 object-cover' alt="facebook" />
              </a>
              <img src="/tiktok.png" className='size-8 object-cover' alt="Tik tok" />
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer