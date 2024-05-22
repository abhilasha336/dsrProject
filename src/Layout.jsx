import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Navigation } from './components/Navigation'
import { Outlet } from 'react-router-dom'

function Layout() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navigation></Navigation>
       <Outlet></Outlet>
    </>
  )
}

export default Layout
