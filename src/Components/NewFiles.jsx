import React, { useContext, useEffect, useState, useRef } from 'react'
import { UserContext } from '../Context/Context';
import { FaPlus } from "react-icons/fa6";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../FireBaseConfig/Firebase';
import { v4 } from 'uuid';
import { setDoc, doc } from "firebase/firestore";

export const NewFiles = () => {

    const { user, setUser, openModel, setOpenModel } = useContext(UserContext);

    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const sidebarRef = useRef(null);

    const handleClose = () => {
        setOpenModel(false);
        // document.body.style.backgroundColor = `initial`
    };

    const handleOpen = () => {
        setOpenModel(true);
        // document.body.style.backgroundColor = `rgb(0,0,0,0.5)`
    };

    const handleOnchange = (e) => {
        if (e.target.files[0]) {
            // console.log(e.target.files[0]);
            setFile(e.target.files[0])
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;
        setUploading(true)

        try {
            const img = ref(storage, `image${v4()}`)
            const data = await uploadBytes(img, file)
            const imgUrl = await getDownloadURL(data.ref)
            // console.log(data, imgUrl);

            const fileData = {
                id: v4(),
                timestamp: { seconds: Math.floor(Date.now() / 1000) },
                name: file.name,
                imgUrl,
                size: file.size,
            };

            await setDoc(doc(db, "users", user.uid), { ...user, data: [...user.data, fileData] })
            setUser({ ...user, data: [...user.data, fileData] })
            setUploading(false)
            setOpenModel(false)

        } catch (error) {
            console.error('Error uploading file:', error);
            setUploading(false)
            setOpenModel(false)
        }
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                handleClose()
            }
        }
        document.addEventListener('mousedown', handleClickOutside)

        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])


    return (
        <div className={`w-full mt-2 px-2 `}>
            {openModel ?
                <div ref={sidebarRef} className='side-bar flex flex-col justify-between items-center gap-4 absolute h-[200px] w-[400px drop-shadow-2xl py-8 px-8 border-2 top-52 left-[500px] z-30 bg-white'>
                    <h2 className='w-full flex justify-center items-center text-xl border px-2 py-1'>Select files from your Device</h2>

                    {!uploading ? (

                        <div className='w-full flex flex-col justify-center items-center'>

                            <input type='file' onChange={handleOnchange} className='w-full py-2 px-6' />
                            <button type='submit' onClick={handleSubmit} className='w-[90%] py-1 px-6 text-white bg-blue-600 mt-2 rounded-md'>Submit</button>

                        </div>

                    ) : (<button className='w-[100%] text-white text-lg bg-green-500 py-1 px-6 rounded-md'>Uploading....</button>)}
                </div>
                : ''
            }

            <div onClick={handleOpen} className='w-1/2 h-14 rounded-xl hover:bg-slate-200  transition-shadow cursor-pointer mb-3 flex justify-center items-center gap-4 bg-white drop-shadow-2xl py-2 px-10'>
                <p className='text-xl'><FaPlus /></p>
                <span className='flex text-lg'>New</span>
            </div>

        </div>
    )
}
