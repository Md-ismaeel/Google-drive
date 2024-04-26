import React, { useContext, useState } from 'react'
import { MdInsertDriveFile, MdAccountCircle } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";
import { UserContext } from '../Context/Context';
import { db } from '../FireBaseConfig/Firebase';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ConvertingToBytes } from './ConvertingToBytes';


export const ListView = ({ item }) => {

    const { user, setUser, starred, setStarred } = useContext(UserContext)
    const [click, setClick] = useState(false);

    const handleOpen = (id) => {
        setClick(prev => prev ? id : !prev)
    }

    const handleDelete = async (itemId) => {
        try {
            // Get a reference to the user document in the "users" collection
            const userDocRef = doc(db, "users", user.uid);

            // Get the current user data
            const userDoc = await getDoc(userDocRef);
            const userData = userDoc.data();
            console.log(userData);

            // Filter out the file to be deleted from the user's data array
            const updatedData = userData.data.filter((item) => item.id !== itemId);

            // Update the user document with the filtered data array
            await updateDoc(userDocRef, { data: updatedData });

            // Update the user data in the component state
            setUser({ ...user, data: updatedData });
            setClick(false);

        } catch (error) {
            console.error("Error removing document: ", error);
        }
    };

    const handleRemoveStarred = (itemId) => {
        const removedStarred = starred.filter((item) => item.id !== itemId);
        setStarred(removedStarred);
        setClick(false);
    };

    const handleStarred = (itemId) => {

        const starredItem = user.data.find((e) => e.id === itemId);
        if (starredItem) {
            const isStarred = starred.some((e) => e.id === itemId);
            if (isStarred) {
                handleRemoveStarred(itemId);
                setClick(false);
            } else {
                setStarred([...starred, starredItem]);
            }
        }
        setClick(false);
    };



    return (
        <>
            <div key={item.id} className='w-full flex justify-between items-center border-b px-2 py-2 text-sm hover:bg-blue-200'>
                <a href={item.imgUrl} target='_blank' className='w-[35%] flex items-center gap-2'><MdInsertDriveFile className='text-2xl' /><span className='hover:underline hover:text-blue-500'>{item.name?.length >= 30 ? item.name.slice(0, 30) + "..." : item.name}</span></a>

                <p className='w-[20%] flex justify-center items-center gap-2'>me<MdAccountCircle className='text-lg text-gray-400' /></p>
                {/* <p className='w-[25%] text-center'>{item.timestamp()}</p> */}
                <p className='w-[25%] text-center'>{new Date(item.timestamp?.seconds * 1000).toUTCString()}</p>
                <p className='w-[15%] text-center'>{ConvertingToBytes(item.size)}</p>

                <div onClick={() => handleOpen(item.id)} className='w-[5%] text-center relative cursor-pointer'><MdMoreVert className='h-6 w-[50%] hover:bg-gray-200 rounded-full px-1 py-1' />

                    {click === item.id ? (
                        <div className='absolute flex flex-col justify-center gap-2 items-center h-[100px] w-[110px] z-30 top-4 right-10 shadow-2xl border bg-gray-200 rounded-md'>
                            <button onClick={() => handleDelete(item.id)} className='w-[80%] h-[30px] text-sm rounded-md hover:bg-slate-300 hover:text-white py-2 flex justify-center items-center'>Delete</button>
                            <button onClick={() => handleStarred(item.id)} className='w-[80%] h-[30px] text-sm rounded-md hover:bg-slate-300 hover:text-white py-2 flex justify-center items-center'> {starred.some((e) => e.id === item.id) ? "Remove" : "Add Starred"}</button>
                        </div>
                    ) : ''}

                </div>

            </div>
        </>
    )
}
