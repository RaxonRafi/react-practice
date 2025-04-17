import React from 'react'
import NavBar from '../components/Header/NavBar'
import Home from '../pages/Home'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default RootLayout