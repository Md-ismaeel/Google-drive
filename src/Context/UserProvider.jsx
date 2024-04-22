import React, { useState, useEffect } from "react";
import { UserContext } from "./Context";

export const UserProvider = (props) => {

    const [user, setUser] = useState({});


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
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
};
