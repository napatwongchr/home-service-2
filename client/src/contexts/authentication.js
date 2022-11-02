import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import jwtDecode from "jwt-decode";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const navigate = useNavigate();

  const [state, setState] = useState({
    loading: null,
    error: null,
    user: null,
  });

  // register the user
  const register = async (data) => {
    console.log(data);
    await axios.post("/users/register", data);
    navigate("/");
  };

  const login = async (data) => {
    console.log(data);
    const result = await axios.post("/users/login", data);
    const token = result.data.token;
    localStorage.setItem("token", token);
    const userDataFromToken = jwtDecode(token);
    setState({ ...state, user: userDataFromToken });
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ register, login }}>
      {props.children}
    </AuthContext.Provider>
  );
}

// this is a hook that consume AuthContext
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
