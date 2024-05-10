import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <div className="mx-auto container">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;