import React from "react";
import useAuth from "../hooks/useAuth";

const Home = () => {
    const { auth } = useAuth();

    return (
        <div className="mid-section">
            <h1>Home</h1>
            <p>The user has following roles:</p>
            <p>{ JSON.stringify(auth.roles) }</p>
        </div>
    );
};

export default Home;
