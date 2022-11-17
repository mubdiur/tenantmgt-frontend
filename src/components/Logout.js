import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
const Logout = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("username", null);
        localStorage.setItem("roles", null);
        localStorage.setItem("accessToken", null);
        localStorage.setItem("refreshToken", null);
        setAuth({});

        navigate("/login");
    });

    return <div className="d-none"></div>;
};

export default Logout;
