import React, { useContext, useEffect, useState, useRef } from 'react'
import { UserContext } from '../Context/Context';
import { FaPlus } from "react-icons/fa6";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../FireBaseConfig/Firebase';
import { v4 } from 'uuid';
import { setDoc, doc } from "firebase/firestore";


export const NewFiles = () => {

    const { user, setUser } = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const sidebarRef = useRef(null);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                handleClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleOnchange = (e) => {
        if (e.target.files[0]) {
            console.log(e.target.files[0]);
            setFile(e.target.files[0])
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;
        setUploading(true)

        try {
            const img = ref(storage, `img/${v4()}`)
            const data = await uploadBytes(img, file)
            const imgUrl = await getDownloadURL(data.ref)
            console.log(data, imgUrl);

            const fileData = {
                id: v4(),
                timestamp: { seconds: Math.floor(Date.now() / 1000) },
                name: file.name,
                imgUrl,
                size: file.size,
            };

            setUser({ ...user, data: [...user.data, fileData] })
            await setDoc(doc(db, "users", user.uid), { ...user, data: [...user.data, fileData] })
            setUploading(false)
            setOpen(false)

        } catch (error) {
            console.error('Error uploading file:', error);
            setUploading(false)
            setOpen(false)
        }
    }

    return (
        <div className='w-full mt-2 px-2'>
            {open ?
                <div ref={sidebarRef} className='side-bar flex flex-col justify-center items-center gap-4 absolute min-h-[100px] w-[400px] bg-white drop-shadow-2xl py-4 border-2 top-52 left-[500px] z-30'>
                    <h2 className='w-full flex justify-center items-center text-lg border-b-2'>Select files from your Device</h2>

                    {!uploading ? (

                        <div className='w-full flex flex-col justify-center items-center'>

                            <input type='file' onChange={handleOnchange} className='w-full py-2 px-6' />
                            <button type='submit' onClick={handleSubmit} className='w-[90%] py-1 px-6 text-white bg-blue-600'>Submit</button>

                        </div>

                    ) : (<button className='w-[90%] text-white text-lg bg-green-500 py-1 px-16'>Uploading....</button>)}
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
