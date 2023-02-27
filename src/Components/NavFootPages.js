// not working
import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";

const NavFootPage = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default NavFootPage;