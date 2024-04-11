import React from 'react'
import { MdInsertDriveFile, MdAccountCircle } from "react-icons/md";


export const ListView = ({ item }) => {

    return (
        <div className='w-full flex justify-between items-center border-b px-2 py-2'>

            <p className='w-[40%] flex items-center gap-2'><MdInsertDriveFile className='text-2xl' />{item.data?.caption}</p>
            <p className='w-[20%] flex justify-center items-center gap-2'>me <MdAccountCircle className='text-lg' /></p>
            <p className='w-[20%] text-center'>{new Date(item.data.timestamp?.seconds * 1000).toUTCString()}</p>
            <p className='w-[20%] text-center'>File Size</p>

        </div>
    )
}
