import SearchContent from '@/components/SearchContent'
import React from 'react'


const Page = async () => {

    const response = await fetch(process.env.DATABASE_URL + "/auth/photographer/all")
    const { photographers } = await response.json();

  return (
    <SearchContent photographers={photographers}/>
  )
}

export default Page