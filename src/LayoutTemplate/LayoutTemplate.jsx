import React, { useContext, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { SideBar } from '../Components/SideBar'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../Context/Context'
import { signInWithPopup } from "firebase/auth";
import { auth, db, provider } from '../FireBaseConfig/Firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import googlePng from "../assets/google.png"


const LayoutTemplate = () => {

    const { user, setUser } = useContext(UserContext);


    const SignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user.providerData[0];
            // console.log(result.user.providerData[0]);

            const snapshot = await getDoc(doc(db, 'users', user.uid));
            if (snapshot.exists()) {
                // console.log("Document data:", snapshot.data());
                setUser(snapshot.data())
            } else {
                // If the user document doesn't exist, create a new document for the user in Firestore
                const newUserDocRef = doc(db, 'users', user.uid);
                await setDoc(newUserDocRef, { ...user, data: [] });

                // Set the user state with the new user data
                setUser({ ...user, data: [] });
                console.log("New user document created in Firestore.");
            } // Set the user in your context or state
        } catch (error) {
            console.error(error);
            // Handle error
        }
    }

    return (
        <>
            {user !== null ? (
                <div className='w-full'>
                    <Navbar />
                    <div className='w-[100%] flex'>
                        <div className='w-[22%]'>
                            <SideBar />
                        </div>
                        <div className='w-[75%]'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            ) : (
                <div className='w-full min-h-screen flex flex-col justify-center items-center bg-slate-400 gap-4'>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Drive_logo_%282014-2020%29.svg'} height={'2500px'} width={'400px'} className='' />
                    <button onClick={SignIn} className='w-[300px] h-[50px] bg-white text-xl rounded-md flex justify-center items-center gap-3'>
                        <img src={googlePng} height={'10px'} width={'30px'} /><span className=''>Login with Google </span>
                    </button>
                </div>
            )}
        </>
    )
}

export default LayoutTemplate;