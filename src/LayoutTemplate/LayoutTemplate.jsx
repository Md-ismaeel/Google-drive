import React, { useContext, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { SideBar } from '../Components/SideBar'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../Context/Context'
// import logo from "../assets/main-page-logo.svg"
import { auth, provider, db } from '../FireBaseConfig/Firebase'
import { Home } from '../Pages/Home'

const LayoutTemplate = () => {

    const { fileView, setFileView, user, setUser } = useContext(UserContext);

    const SignIn = () => {
        auth.signInWithPopup(provider).then(({ user }) => {
            setUser(user)
        })
            .catch((e) => {
                console.error('sign in failed', e)
            })
    }

    useEffect(() => {
        const unSubsCribe = db.collection('myFiles').onSnapshot(snapshot => {
            setFileView(snapshot.docs.map(docs => ({
                id: docs.id,
                data: docs.data()
            }
            )))
        })

        return () => unSubsCribe();

    }, [])


    console.log(user);
    return (
        <>
            {user ? (
                <div className='w-full'>
                    <Navbar />
                    <div className='w-[100%] flex'>
                        <div className='w-[22%]'>
                            <SideBar />
                            <Home />
                        </div>
                        <div className='w-[75%]'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            ) : (
                <div className='w-full min-h-screen flex flex-col justify-center items-center bg-slate-400 gap-4'>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Drive_logo_%282014-2020%29.svg'} height={'300px'} width={'400px'} className='' />

                    <button onClick={SignIn} className='w-[400px] h-[50px] bg-blue-300 text-white text-xl rounded-md'>Login to Google Drive </button>
                </div>
            )}
        </>
    )
}

export default LayoutTemplate
