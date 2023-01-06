"use client"
import { useSelector } from "react-redux"
import StoreCard from "../components/StoreCard"
import data from "../helper/data"


export default function Home() {
  return (
    <>
     <div className='flex flex-wrap justify-center gap-6 mt-7'>
      {data.map((produc ,index)=> <StoreCard produc={produc} key={index}/>)}
    </div>
    </>
  )
}
