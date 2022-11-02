import React from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
=======
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
>>>>>>> 217065bd677e83e17bf769ced5b01e5390a47289


const AuthContext = React.createContext();

function AuthProvider(props) {
<<<<<<< HEAD
    const navigate = useNavigate();
=======
    // const navigate = useNavigate();
>>>>>>> 217065bd677e83e17bf769ced5b01e5390a47289

    // register the user
    const register = async (data) => {
        console.log(data);
<<<<<<< HEAD
        await axios.post("/users/register", data);
        navigate("/");
=======
        // await axios.post("http://localhost:4000/auth/register", data);
        // navigate("/login");
>>>>>>> 217065bd677e83e17bf769ced5b01e5390a47289
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