import React from 'react'

const RegisterButton = ({ text }) => {
  return (
    <button className="hover:text-black hover:bg-white hover:border-[5px] border-black transition-colors animate-float rounded-xl text-white bg-black border-[5px] w-[250px] h-[50px] text-base md:text-2xl font-semibold flex items-center justify-center md:w-[270px] md:h-[70px]">
        <span className="mr-4">{text}</span> &rarr;
    </button>
  )
}

export default RegisterButton