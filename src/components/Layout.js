import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const Layout = () => {
    const { auth } = useAuth();
    return (
        <main className="App">
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    Tenant Management
                </a>
                {auth?.username ? (<ul className="nav justify-content-center">
                    <li className="nav-item disabled">
                        <a className="nav-link active" href="/logout">
                            {auth.username}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/logout">
                            Logout
                        </a>
                    </li>
                </ul>) : (<ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className={"nav-link ".concat(
                            (window.location.pathname === "/login") ? "active" : ""
                        )} href="/login">
                            Login
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link ".concat(
                            (window.location.pathname === "/register") ? "active" : ""
                        )} href="/register">
                            Register
                        </a>
                    </li>
                </ul>)}
            </nav>
            <Outlet />
        </main>
    );
};

export default Layout;
