import React from "react"
import Navbar from "./components/Navbar"
import { Outlet } from "react-router"

const Layout = () => {
  return (
    <div className="px-4 md:px-10 py-4 w-full overflow-hidden">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout
