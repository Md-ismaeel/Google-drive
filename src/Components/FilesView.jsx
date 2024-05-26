import React from 'react'
import { MdInsertDriveFile } from "react-icons/md";

export const FilesView = ({ item }) => {

    return (
        <div className='w-[150px] min-h-[100px] mt-4 flex flex-col justify-start items-center border'>

            <p className='w-[100%] flex justify-center items-center mt-3 mb-3 text-gray-500'><MdInsertDriveFile className='text-5xl w-[100%' /></p>
            <a href={item.imgUrl} target='_blank' className='w-[100%] flex justify-center items-center border-t text-sm py-1 bg-gray-200 '>
                <span className='hover:underline hover:text-blue-500 flex justify-center items-center w-full'>{item.name?.length >= 15 ? item.name.slice(0, 15) + "..." : item.name}</span></a>

        </div>
    )
}

