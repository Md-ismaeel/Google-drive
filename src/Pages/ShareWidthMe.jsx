import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/Context'
import share from "../assets/empty_state_shared_with_me.svg"

const ShareWidthMe = () => {

    const { fileView } = useContext(UserContext)
    return (
        <div className='w-full relative h-[500px] px-10 py-4 mt-2 bg-white drop-shadow-xl rounded-2xl'>

            <div className='w-full flex justify-between items-center'>
                <h1 className='text-xl'>Shared with me</h1>
                <span className='cursor-pointer hover:bg-gray-100 px-2 py-2 rounded-full'>
                    <svg className="a-s-fa-Ha-pa c-qd" width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></svg>
                </span>
            </div>

            {fileView.length < 0 ? (
                <>

                </>) : (

                <div className='w-full h-[100%] flex flex-col justify-center items-center gap-2'>
                    <img src={share} height={"100px"} width={'30%'} />
                    <p className='text-2xl'>Nothing has been shared with you yet</p>
                    <p>See all the items shared with you in one place.</p>
                </div>
            )}

        </div>
    )
}

export default ShareWidthMe
