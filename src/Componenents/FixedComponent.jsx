import React from 'react'
import Navbar from './HomePage/Navbar'
import { Outlet } from 'react-router-dom'

const FixexComponent = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default FixexComponent