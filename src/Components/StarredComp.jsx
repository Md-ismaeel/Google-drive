import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/Context';
import { MdInsertDriveFile, MdAccountCircle } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";

export const StarredComp = () => {
    const { starred, setStarred } = useContext(UserContext);
    const [click, setClick] = useState(false)
    const convertingToBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    return (
        <>
            {starred && starred.map((item) => {
                return (
                    <div key={item.id} className='w-full flex justify-between items-center border-b px-2 py-2 text-sm'>
                        <a href={item.imgUrl} target='_blank' className='w-[35%] flex items-center gap-2'><MdInsertDriveFile className='text-2xl' /><span className='hover:underline hover:text-blue-500'>{item.name?.length >= 30 ? item.name.slice(0, 30) + "..." : item.name}</span></a>

                        <p className='w-[20%] flex justify-center items-center gap-2'>me<MdAccountCircle className='text-lg text-gray-400' /></p>

                        <p className='w-[25%] text-center'>{new Date(item.timestamp?.seconds * 1000).toUTCString()}</p>
                        <p className='w-[15%] text-center'>{convertingToBytes(item.size)}</p>

                        <div onClick={() => handleOpen(item.id)} className='w-[5%] text-center relative cursor-pointer'><MdMoreVert className='h-6 w-[50%] hover:bg-gray-200 rounded-full px-1 py-1' />

                            {click === item.id ? (
                                <div className='absolute flex flex-col justify-center gap-2 items-center h-[100px] w-[110px] z-10 top-4 right-10 shadow-2xl'>
                                    <button onClick={() => handleStarred(item.id)} className='w-[80%] h-[30px] z-20 text-white text-sm rounded-md bg-slate-500 py-2 flex justify-center items-center'>Add Starred</button>
                                </div>
                            ) : ''}

                        </div>

                    </div>
                )
            })}
        </>
    )
}
