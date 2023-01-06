"use client"
import { store } from '../reduxStore/store'
import { Provider } from "react-redux"
import Navbar from "../components/Navbar"
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <Provider store={store}>
          <Navbar />
        {children}
          </Provider></body>
    </html>
  )
}
