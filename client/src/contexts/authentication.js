import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";


const AuthContext = React.createContext();

function AuthProvider(props) {
    const navigate = useNavigate();

    // register the user
    const register = async (data) => {
        console.log(data);
        await axios.post("/users/register", data);
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ register }}>
            {props.children}
        </AuthContext.Provider>
    )
}

// this is a hook that consume AuthContext
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };