import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer'

const PreLayout = () => {
  return (
    <div>
        <Outlet />
        <Footer />
    </div>
  )
}

export default PreLayout