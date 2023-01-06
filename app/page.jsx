"use client"
import { useSelector } from "react-redux"


export default function Home() {
  const {basket} = useSelector((state)=>state.basket)
  console.log(basket)
  return (
    <>
     sadık
    </>
  )
}
