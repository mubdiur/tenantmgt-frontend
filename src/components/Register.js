import React from "react";
import { useRef, useState, useEffect } from "react";
import axios from "../api/axios";

const REGISTER_URL = "/register";

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUser] = useState("");
    const [password, setPwd] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [nationalID, setNationalID] = useState("");
    const [passportNumber, setPassportNumber] = useState("");



    const [success, setSuccess] = useState(false);

    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {}, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const requestData = JSON.stringify({
                name,
                username,
                password,
                email,
                phone,
                nationalID,
                passportNumber,
                roles: []
            });
            console.log("Request Data:", requestData);
            const response = await axios.post(REGISTER_URL,
                requestData,
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            console.log(JSON.stringify(response?.data));
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser('');
            setPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    };

    return (
        <>
            {success ? (
                <section className="mid-section">
                    <h1>Success!</h1>
                    <p>
                        <a href="/login"> Log in</a>
                    </p>
                </section>
            ) : (
                <section className="mid-section">
                    <p
                        ref={errRef}
                        className={errMsg ? "alert alert-danger" : "d-none"}
                        >{ errMsg }</p>
                    <h1 className="mb-3">Register</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                className="form-control"
                                type="text"
                                id="name"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                value={name}
                                required
                            />
                        </div>
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
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                className="form-control"
                                type="email"
                                id="email"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                value={email}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input
                                className="form-control"
                                type="phone"
                                id="phone"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                                value={phone}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nationalID">National ID:</label>
                            <input
                                className="form-control"
                                type="text"
                                id="nationalID"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => {
                                    setNationalID(e.target.value);
                                }}
                                value={nationalID}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passportNumber">
                                Passport Number:
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                id="passportNumber"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => {
                                    setPassportNumber(e.target.value);
                                }}
                                value={passportNumber}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </form>
                    <p>
                        Already registered? <br />
                        <a href="/login" className="link-primary">
                            Log in
                        </a>
                    </p>
                </section>
            )}
        </>
    );
};

export default Register;
