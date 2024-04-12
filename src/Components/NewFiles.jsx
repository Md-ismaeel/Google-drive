import React, { useContext, useEffect, useState, useRef } from 'react'
import { UserContext } from '../Context/Context';
import { FaPlus } from "react-icons/fa6";
import firebase from 'firebase'
import { db, storage } from '../FireBaseConfig/Firebase';



export const NewFiles = () => {

    const { open, setOpen, uploading, setUploading, file, setFile } = useContext(UserContext);
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
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleOnchange = (e) => {
        if (e.target.files[0]) {
            console.log(e.target.files[0]);
            setFile(e.target.files[0])
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault;
        setUploading(true)

        storage.ref(`files/${file.name}`).put(file).then(snapshot => {
            console.log(snapshot)

            storage.ref('files').child(file.name).getDownloadURL().then(url => {
                //post image inside the db

                db.collection('myFiles').add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    caption: file.name,
                    fileUrl: url,
                    size: snapshot._delegate.bytesTransferred,
                })

                setUploading(false)
                setOpen(false)
                setFile(null)
            })

            storage.ref('files').child(file.name).getMetadata().then(meta => {
                console.log(meta.size)
            })

        })
    }

    return (
        <div className='w-full mt-2 px-2'>
            {open ?
                <div ref={sidebarRef} className='side-bar flex flex-col justify-center items-center gap-4 absolute min-h-[100px] w-[400px] bg-white drop-shadow-2xl py-4 border-2 top-52 left-[500px] z-30'>
                    <h2 className='w-full flex justify-center items-center text-lg border-b-2'>Select any files from your computer</h2>

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
