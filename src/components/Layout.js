import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <main className="App">
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    Tenant Management
                </a>
            </nav>
            <Outlet />
        </main>
    );
};

export default Layout;
