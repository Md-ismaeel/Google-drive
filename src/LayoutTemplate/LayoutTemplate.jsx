import React, { useContext, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { SideBar } from '../Components/SideBar'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../Context/Context'
import { signInWithPopup } from "firebase/auth";
import { auth, db, provider } from '../FireBaseConfig/Firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'


const LayoutTemplate = () => {

    const { user, setUser } = useContext(UserContext);


    const SignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user.providerData[0];

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
            {user ? (
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
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Drive_logo_%282014-2020%29.svg'} height={'300px'} width={'400px'} className='' />
                    <button onClick={SignIn} className='w-[400px] h-[50px] bg-blue-300 text-white text-xl rounded-md'>Login to Google Drive </button>
                </div>
            )}
        </>
    )
}

export default LayoutTemplate;


// const handleSubmit = (e) => {
//     e.preventDefault;
//     setUploading(true)

//     // storage.ref(`files/${file.name}`).put(file).then(snapshot => {
//     //     // console.log(snapshot)

//     //     storage.ref('files').child(file.name).getDownloadURL().then(url => {
//     //         //post image inside the db

//     //         db.collection('myFiles').add({
//     //             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//     //             caption: file.name,
//     //             fileUrl: url,
//     //             size: snapshot._delegate.bytesTransferred,
//     //         })
//     //         console.log(file);

//     //         setUploading(false)
//     //         setOpen(false)
//     //         setFile(null)
//     //     })

//     //     storage.ref('files').child(file.name).getMetadata().then(meta => {
//     //         console.log(meta.size)
//     //     })

//     // })
// }