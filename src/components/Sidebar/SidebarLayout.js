import { Outlet } from 'react-router-dom';
import React from 'react'
import Sidebar from './Sidebar';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

function SidebarLayout() {
  return (
    <>
        <Sidebar />
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default SidebarLayout