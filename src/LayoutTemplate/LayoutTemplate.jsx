import React from 'react'
import Navbar from '../Components/Navbar'
import { SideBar } from '../Components/SideBar'
import { Outlet } from 'react-router-dom'

const LayoutTemplate = () => {
    return (
        <div className='w-full'>
            <Navbar />
            <div className='w-[100%] flex'>
                <div className='w-[22%]'>
                    <SideBar />
                </div>
                <div className='w-[75%]'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default LayoutTemplate
