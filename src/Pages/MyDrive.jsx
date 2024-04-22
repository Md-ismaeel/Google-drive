import React, { useContext } from 'react'
import { ListView } from '../Components/ListView'
import { UserContext } from '../Context/Context'
import { FaArrowDown } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";
import myDrive from "../assets/empty_state_my_drive_v2.svg"

export const MyDrive = () => {
    const { user } = useContext(UserContext)

    return (
        <div className='w-full relative min-h-screen px-10 py-4 mt-2 bg-white drop-shadow-xl rounded-2xl mb-4'>

            <div className='w-full flex justify-between items-center mb-10'>
                <h1 className='text-xl'>My Drive</h1>
                <span className='cursor-pointer'>
                    <svg className="a-s-fa-Ha-pa c-qd" width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></svg>
                </span>
            </div>

            {user.data?.length > 0 ? (
                <>
                    <div className='w-[100%] flex flex-col justify-start items-center overflow-y-auto'>
                        <div className='w-full flex justify-start items-center border-b px-2 py-2'>
                            <p className='font-semibold w-[35%] flex justify-start items-center gap-1'>Name<FaArrowDown /></p>
                            <p className='font-semibold w-[20%] text-center'>Owner</p>
                            <p className='font-semibold w-[25%] text-center'>Last Modified</p>
                            <p className='font-semibold w-[15%] text-center'>File Size</p>
                            <p className='font-semibold w-[5%] text-center'><MdMoreVert /></p>
                        </div>

                        <div className='scroll-bar w-full h-[200px] flex flex-col justify-start items-start overflow-y-scroll overflow-x-hidden'>
                            <ListView />
                        </div>
                    </div>
                </>) : (

                <div className='w-full h-[100%] flex flex-col justify-center items-center gap-2'>
                    <img src={myDrive} height={"100px"} width={'30%'} />
                    <p className='text-2xl'>A place for all of your files</p>
                    <p>Drag your files and folders here or use the 'New' button to upload</p>
                </div>
            )}

        </div>
    )
}
