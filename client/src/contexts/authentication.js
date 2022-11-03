import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    autoLogout()
  }, [])

  // register the user
  const register = async (data) => {
    await axios.post("/users/register", data);
    navigate("/");
  };

  // login
  const login = async (data) => {
    const result = await axios.post("/users/login", data);
    const token = result.data.token;
    localStorage.setItem("token", token);
    const userDataFromToken = jwtDecode(token);
    window.localStorage.setItem('user', JSON.stringify(userDataFromToken));
    navigate("/");
    setState({ ...state, user: userDataFromToken })
  };

  // clear the token in localStorage and the user data
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem('user')
    setState({ ...state, user: null, error: false });
  };

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  const autoLogout = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      if (user.exp * 1000 < Date.now()) {
        logout()
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{ register, login, isAuthenticated, state, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

// this is a hook that consume AuthContext
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
