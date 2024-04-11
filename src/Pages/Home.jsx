import React, { useContext, useEffect } from 'react'
import { UserContext } from '../Context/Context'
import { FilesView } from '../Components/FilesView'
import { ListView } from '../Components/ListView'
import { db } from '../FireBaseConfig/Firebase'
import { FaArrowDown } from "react-icons/fa";
// import firebase from 'firebase';

export const Home = () => {

    const { fileView, setFileView } = useContext(UserContext);
    console.log(fileView);


    useEffect(() => {
        db.collection('myFiles').onSnapshot(snapshot => {
            setFileView(snapshot.docs.map(docs => ({
                id: docs.id,
                data: docs.data()
            }
            )))
        })
    }, [])

    return (
        <div className='w-full relative h-[500px] px-10 py-4 mt-2 bg-white drop-shadow-xl rounded-2xl'>
            <h1 className='text-xl'>Welcome to Drive</h1>

            <div className='scroll-bar w-full h-[150px] flex justify-center items-center gap-4 flex-wrap mb-10 overflow-y-scroll'>
                {fileView && fileView.map((item, i) => (
                    <FilesView key={i} item={item} />
                ))}
            </div>

            <div className='w-[100%] flex flex-col justify-start items-center overflow-y-auto'>
                <div className='w-full flex justify-start items-center border-b px-2 py-2'>
                    <p className='font-semibold w-[40%] flex justify-start items-center gap-1'>Name<FaArrowDown /></p>
                    <p className='font-semibold w-[20%] text-center'>Owner</p>
                    <p className='font-semibold w-[20%] text-center'>Last Modified</p>
                    <p className='font-semibold w-[20%] text-center'>File Size</p>
                </div>

                <div className='scroll-bar w-full h-[200px] flex flex-col justify-start items-start overflow-y-scroll overflow-x-hidden'>
                    {fileView && fileView.map((item, i) => (
                        <ListView key={i} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

