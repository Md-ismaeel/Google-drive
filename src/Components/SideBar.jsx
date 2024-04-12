import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { NewFiles } from './NewFiles';

export const SideBar = () => {
    const location = useLocation()
    const [isActive, setIsActive] = useState('')

    useEffect(() => {
        setIsActive(location.pathname)
    }, [location])


    return (
        <div className='w-full mt-2 px-6'>
            <NewFiles />

            <div className='w-full flex flex-col gap-2'>

                <NavLink to={'/'} className={`${isActive === "/" ? 'bg-blue-100' : 'hover:bg-slate-200'} flex justify-start items-center gap-4 cursor-pointer px-4 py-1 rounded-full`}>
                    <svg className="c-qd  text-sm" height="24" width="24" viewBox="0 0 24 24" fill="#000000" focusable="false"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><polygon points="12,3 4,9 4,21 10,21 10,14 14,14 14,21 20,21 20,9"></polygon></g></svg>
                    <span className='flex text-sm opacity-80'>Home</span>
                </NavLink>

                <NavLink to={'/my-drive'} className={`${isActive === "/my-drive" ? 'bg-blue-100' : 'hover:bg-slate-200'} flex justify-start items-center gap-4 cursor-pointer px-4 py-1 rounded-full`}>
                    <svg className=" c-qd text-sm" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000" focusable="false"><path d="M9.05 15H15q.275 0 .5-.137.225-.138.35-.363l1.1-1.9q.125-.225.1-.5-.025-.275-.15-.5l-2.95-5.1q-.125-.225-.35-.363Q13.375 6 13.1 6h-2.2q-.275 0-.5.137-.225.138-.35.363L7.1 11.6q-.125.225-.125.5t.125.5l1.05 1.9q.125.25.375.375T9.05 15Zm1.2-3L12 9l1.75 3ZM3 17V4q0-.825.587-1.413Q4.175 2 5 2h14q.825 0 1.413.587Q21 3.175 21 4v13Zm2 5q-.825 0-1.413-.587Q3 20.825 3 20v-1h18v1q0 .825-.587 1.413Q19.825 22 19 22Z"></path></svg>
                    <span className='flex text-sm opacity-80'>My Drive</span>
                </NavLink>

                <NavLink to={'/computer'} className={`${isActive === "/computer" ? 'bg-blue-100' : 'hover:bg-slate-200'} flex justify-start items-center gap-4 cursor-pointer px-4 py-1 rounded-full`}  >
                    <svg className=" c-qd text-sm" width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path></svg>
                    <span className='flex text-sm'>Computers</span>
                </NavLink>

                <NavLink to={'/starred'} className={`${isActive === "/starred" ? 'bg-blue-100' : 'hover:bg-slate-200'} flex justify-start items-center gap-4 cursor-pointer px-4 py-1 rounded-full`}>
                    <svg className=" c-qd" width="24px" height="24px" viewBox="0 0 24 24" focusable="false" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                    <span className='flex text-sm opacity-80'>Starred</span>
                </NavLink>

                <span className='mt-[-10px] ml-16 text-sm'>Star items to display here</span>
            </div>

            <div className='w-full mt-2 flex flex-col gap-2'>

                <NavLink to={'/shareWidthMe'} className={`${isActive === "/shareWidthMe" ? 'bg-blue-100' : 'hover:bg-slate-200'} flex justify-start items-center gap-4 cursor-pointer px-4 py-1 rounded-full`}>
                    <svg className=" c-qd text-sm" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000" focusable="false"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path d="M15,8c0-1.42-0.5-2.73-1.33-3.76C14.09,4.1,14.53,4,15,4c2.21,0,4,1.79,4,4s-1.79,4-4,4c-0.43,0-0.84-0.09-1.23-0.21 c-0.03-0.01-0.06-0.02-0.1-0.03C14.5,10.73,15,9.42,15,8z M16.66,13.13C18.03,14.06,19,15.32,19,17v3h4v-3 C23,14.82,19.42,13.53,16.66,13.13z M9,4c2.21,0,4,1.79,4,4s-1.79,4-4,4s-4-1.79-4-4S6.79,4,9,4z M9,13c2.67,0,8,1.34,8,4v3H1v-3 C1,14.34,6.33,13,9,13z"></path></g></g></svg>
                    <span className='flex text-sm opacity-80'>Starred with me</span>
                </NavLink>

                <NavLink to={'/recent'} className={`${isActive === "/recent" ? 'bg-blue-100' : 'hover:bg-slate-200'} flex justify-start items-center gap-4 cursor-pointer px-4 py-1 rounded-full`}>
                    <svg className="c-qd  text-sm" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000" focusable="false"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M11.99,2C6.47,2,2,6.48,2,12s4.47,10,9.99,10C17.52,22,22,17.52,22,12S17.52,2,11.99,2z M15.29,16.71L11,12.41V7h2v4.59l3.71,3.71L15.29,16.71z"></path></g></svg>
                    <span className='flex text-sm opacity-80'>Recent</span>
                </NavLink>

                <NavLink to={'/spam'} className={`${isActive === "/spam" ? 'bg-blue-100' : 'hover:bg-slate-200'} flex justify-start items-center gap-4 cursor-pointer px-4 py-1 rounded-full`}>
                    <svg className="c-qd  text-sm" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000" focusable="false"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M12,17c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1 S12.55,17,12,17z M13,13h-2V7h2V13z"></path></g></svg>
                    <span className='flex text-sm opacity-80'>Spam</span>
                </NavLink>

                <NavLink to={'/bin'} className={`${isActive === "/bin" ? 'bg-blue-100' : 'hover:bg-slate-200'} flex justify-start items-center gap-4 cursor-pointer px-4 py-1 rounded-full`}>
                    <svg width="24px" text-smght="24px" viewBox="0 0 24 24" fill="#000000" focusable="false" className=" c-qd"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><path d="M15,4V3H9v1H4v2h1v13c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V6h1V4H15z M11,17H9V8h2V17z M15,17h-2V8h2V17z"></path></g></svg>
                    <span className='flex text-sm opacity-80'>Bin</span>
                </NavLink>

                <NavLink to={'/storage'} className={`${isActive === "/storage" ? 'bg-blue-100' : 'hover:bg-slate-200'} flex justify-start items-center gap-4 cursor-pointer px-4 py-1 rounded-full`}>
                    <svg className="a-s-f text-sma-Ha-pa c-qd a-ml-da-Q-c" width="24px" height="24px" viewBox="0 0 24 24" focusable="false" fill="#6f6f6f"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></svg>
                    <span className='flex text-sm opacity-80'>Storage</span>
                </NavLink>

                <div className='w-full px-6'>
                    <p className='w-full h-1 bg-gradient-to-r from-blue-600 to-white rounded-full mb-1'></p>
                    <p className=' opacity-80 text-sm'>7.4 GB of 15GB used</p>
                </div>

            </div>
        </div>
    )
}
