import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Pages = () => {
  return (
    <div>
        <Link to="home" >Go to home</Link>
        <Link to="about" >Go to about</Link>
        <Outlet/>
        </div>
  )
}

export default Pages