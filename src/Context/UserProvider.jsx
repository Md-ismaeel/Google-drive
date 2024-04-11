import React, { useState } from 'react'
import { UserContext } from "./Context"

export const UserProvider = (props) => {
    const [open, setOpen] = useState(false);
    const [uploading, setUploading] = useState(false)
    const [file, setFile] = useState(null)
    const [fileView, setFileView] = useState([]);

    return (

        <UserContext.Provider value={{ open, setOpen, uploading, setUploading, file, setFile, fileView, setFileView }}>
            {props.children}
        </UserContext.Provider>
    )
}

