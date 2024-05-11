import React from 'react'
import { Navbar, Welcome } from '@/components'

const page = () => {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
         <Navbar />
         <Welcome />
      </div>
     
    </div>
  )
}

export default page