import React from 'react'
import logo from "../assets/drive_logo.png"
import { IoMdSearch } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { MdOutlineOfflinePin } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoApps } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
    return (
        <div className='w-full h-[70px] px-6 flex justify-between items-center'>

            <NavLink to={'/'} className='w-[20%]text-xl flex justify-center items-center gap-3'>
                <img src={logo} height={'40px'} width={'45px'} />
                <p className='opacity-70 hover:underline text-lg'>Drive</p>
            </NavLink>

            <div className='w-[52%] relative'>
                <input type='text' placeholder='Search in Drive' className='w-full ml-6 text-lg text-black bg-slate-200 py-[10px] px-16 rounded-full outline-none focus:outline-none focus:border focus:bg-white focus:drop-shadow-xl' />
                <p className='absolute top-1 left-9 text-2xl hover:bg-slate-200 rounded-full p-2'><IoMdSearch /></p>
                <p className='absolute top-1 right-0 text-2xl hover:bg-slate-200 rounded-full p-2'><svg className="Q6yead QJZfhe " width="24" height="24" viewBox="0 0 24 24" focusable="false"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path></svg></p>
            </div>


            <ul className='w-[18%] flex text-2xl justify-between items-center'>
                <span><MdOutlineOfflinePin /></span>
                <span><MdOutlineContactSupport /></span>
                <span><IoSettingsOutline /></span>
                <span><IoApps /></span>
                <span className='text-4xl'><MdAccountCircle className='text-gray-400' /></span>

            </ul>
        </div>
    )
}

export default Navbar
