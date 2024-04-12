import React, { useState } from "react";
import { UserContext } from "./Context";

export const UserProvider = (props) => {
    const [open, setOpen] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [file, setFile] = useState(null);
    const [fileView, setFileView] = useState([]);
    const [user, setUser] = useState(null);
    const [click, setClick] = useState(false)
    const [showProfile, setShowProfile] = useState(false)

    return (
        <UserContext.Provider
            value={{
                open,
                setOpen,
                uploading,
                setUploading,
                file,
                setFile,
                fileView,
                setFileView,
                user,
                setUser,
                click,
                setClick,
                showProfile,
                setShowProfile
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
