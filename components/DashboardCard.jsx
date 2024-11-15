import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const DashboardCard = ({ children, title, description, footer }) => {
  return (
    <Card className="flex flex-col items-center justify-center bg-[#f0f3f4] rounded-xl w-[100%] sm:w-[390px] h-[470px] shadow">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <div className='mx-auto w-[100%] !mt-[15px] bg-black h-[0.05rem]'/>
        </CardHeader>
        <CardContent className="w-full">
          {children}
        </CardContent>
        <CardFooter>
            {footer}
        </CardFooter>
      </Card>
  )
}

export default DashboardCard