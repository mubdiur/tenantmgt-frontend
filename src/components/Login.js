import React from "react";
import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import jwtDecode from 'jwt-decode';

import axios from "../api/axios";
const LOGIN_URL = "/login";

const Login = () => {
    const { setAuth } = useAuth;
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUser] = useState("");
    const [password, setPwd] = useState("");
    const [success, setSuccess] = useState(false);

    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {}, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const requestData = JSON.stringify({
                username,
                password
            });
            const response = await axios.post(LOGIN_URL,
                requestData,
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );

            const accessToken = response?.data?.accessToken;
            const refreshToken = response?.data?.refreshToken;
            const decoded = jwtDecode(accessToken);
            
            const roles = decoded.roles;
            
            setAuth(username, roles, accessToken, refreshToken);

            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser('');
            setPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else {
                if (err?.response?.errorMsg) {
                    setErrMsg(err.response.errorMsg);
                }
                else setErrMsg('Login Failed')
            }
            errRef.current.focus();
        }
    };

    return (
        <>
            {success ? (
                <section className="mid-section">
                    <h1>You are logged in!</h1>
                    <p>
                        <a href="/home">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section className="mid-section">
                    <p
                        ref={errRef}
                        className={errMsg ? "alert alert-danger" : "d-none"}
                    >
                        {errMsg}
                    </p>
                    <h1 className="mb-3">Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input
                                className="form-control"
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => {
                                    setUser(e.target.value);
                                }}
                                value={username}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                className="form-control"
                                type="password"
                                id="password"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => {
                                    setPwd(e.target.value);
                                }}
                                value={password}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </form>
                    <p>
                        Don't have an account? <br />
                        <a href="/register" className="link-primary">
                            Create new account
                        </a>
                    </p>
                </section>
            )}
        </>
    );
};

export default Login;
