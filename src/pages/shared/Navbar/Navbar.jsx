import { Link } from "react-router-dom"
import logo from '../../../assets/logo.svg'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    const navItems = <>
        <li><Link to="/">Home</Link> </li>
        <li> <Link to="/about">About</Link> </li>

        {user ?.email?
            <>
              <li> <Link to="/bookings">Bookings</Link> </li>
             <li><button onClick={handleLogOut}>LogOut</button></li>
            </>
            :

            <li><Link to="/signIn"><button>SignIn</button></Link></li>

        }

    </>
  
    return (
        <div className="navbar bg-base-100 mb-4  mt-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-[#444444] font-semibold">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn  hover:bg-white bg-white btn-ghost normal-case text-lg w-[85px]">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#444444] font-semibold">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end gap-2 md:gap-6">
                <div className="flex gap-3">
                    <HiOutlineShoppingBag></HiOutlineShoppingBag>
                    <CiSearch className="text-lg"></CiSearch>
                </div>

                <div>
                    <button className="btn btn-outline text-[#FF3811] hover:bg-gray-900">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;