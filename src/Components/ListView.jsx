import React, { useContext, useState } from 'react'
import { MdInsertDriveFile, MdAccountCircle } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";
import { UserContext } from '../Context/Context';


export const ListView = ({ item }) => {
    console.log(item);

    const { click, setClick } = useContext(UserContext)

    const convertingToBytes = (bytes, decimals = 2) => {

        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };

    const handleDelete = () => {
        console.log('working');
        setClick(false)
    }

    return (
        <div className='w-full flex justify-between items-center border-b px-2 py-2 text-sm'>

            <a href={item.data.fileUrl} target='_blank' className='w-[35%] flex items-center gap-2'><MdInsertDriveFile className='text-2xl' /><span className='hover:underline hover:text-blue-500'>{item.data.caption?.length >= 30 ? item.data.caption.slice(0, 30) + "..." : item.data.caption}</span></a>
            <p className='w-[20%] flex justify-center items-center gap-2'>me <MdAccountCircle className='text-lg text-gray-400' /></p>
            <p className='w-[25%] text-center'>{new Date(item.data.timestamp?.seconds * 1000).toUTCString()}</p>
            <p className='w-[15%] text-center'>{convertingToBytes(item.data?.size)}</p>
            <p onClick={handleDelete} className='w-[5%] text-center relative cursor-pointer'><MdMoreVert />
                {click ? (
                    <span className='absolute h-[100px] w-[200px] bg-gray-500'>Delete</span>
                ) : ''}
            </p>

        </div>
    )
}
