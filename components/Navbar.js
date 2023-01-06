import React from 'react'
import Link from "next/link"
import { useSelector } from 'react-redux'

const navbar = () => {
    const {basket} = useSelector((state)=>state.basket)
  return (
    <div>
<div className=' fixed top-0 w-full flex h-10 bg-emerald-300 text-orange-900 font-bold uppercase justify-between items-center px-4'>
      <div>Pars Bilişim</div>
      <div className='flex gap-3 '>
        <Link href="/"> Store</Link>
        <Link href="/card"> Card({basket.length})</Link>
      </div>
    </div>
    <div className='h-4'>

    </div>
    </div>
    
  )
}

export default navbar