// import Register from "./Register";
import Login from "./components/Login";
import Register from "./components/Register";
import Layout from "./components/Layout";
import RequireAuth from './components/RequireAuth';
import Home from "./components/Home";
import Missing from "./components/Missing";
import Logout from "./components/Logout";

import { Routes, Route } from "react-router-dom";

const ROLES = {
    'User': "ROLE_USER",
    'Tenant': "ROLE_TENANT",
    'Owner': "ROLE_OWNER",
    'Manager': "ROLE_MANAGER",
    'Admin': "ROLE_ADMIN",
  }
  

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* public routes */}
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                {/* <Route path="unauthorized" element={<Unauthorized />} /> */}

                {/* we want to protect these routes */}
                <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                    <Route path="/home" element={<Home />} />
                </Route>

                {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                    <Route path="admin" element={<Admin />} />
                </Route>  */}

                {/* catch all  */}
                <Route path="*" element={<Missing />} />
            </Route>
        </Routes>
    );
}

export default App;
