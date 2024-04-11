import React from 'react'
import { MdInsertDriveFile } from "react-icons/md";
import firebase from 'firebase';

export const FilesView = ({ item }) => {
    // const { caption, fileUrl, size } = item;

    return (
        <div className='w-[150px] min-h-[100px] mt-4 flex flex-col  items-center border'>

            <p className='w-[100%] flex justify-center items-center mt-3 mb-3 text-gray-500'><MdInsertDriveFile className='text-5xl w-[100%' /></p>
            <p className='w-[100%] flex justify-center items-center border-t text-sm py-1 bg-gray-200'>{item.data.caption?.length >= 15 ? item.data.caption.slice(0, 15) + "..." : item.data.caption}</p>

        </div>
    )
}

