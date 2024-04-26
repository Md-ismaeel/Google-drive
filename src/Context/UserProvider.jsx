import React, { useState, useEffect } from "react";
import { UserContext } from "./Context";

export const UserProvider = (props) => {

    const [user, setUser] = useState(null);
    const [openModel, setOpenModel] = useState(false);
    const [starred, setStarred] = useState([]);



    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);



    return (
        <UserContext.Provider value={{ user, setUser, starred, setStarred, openModel, setOpenModel }}>
            {props.children}
        </UserContext.Provider>
    );
};
