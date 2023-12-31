import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useUsers from '../../Hooks/useUsers';

const NavBar = () => {
    // const { role, setRole } = useState();
    const { user, logOut } = useContext(AuthContext)

    const [usersAll] = useUsers();

    const userRole = usersAll.find(item => item.userEmail === user?.email)
    const role = userRole?.role;


    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>

        <div className='flex items-center'>
            {
                user ?
                    <>
                        {
                            role === 'admin' ? <li><Link to="dashboard/allUsers">Dashboard</Link></li> :
                                <>
                                    {
                                        role === 'instructor' ? <li><Link to="dashboard/add-class">Dashboard</Link></li> : <li><Link to="dashboard/my-selectClass">Dashboard</Link></li>
                                    }
                                </>
                        }
                        <Link><li className='font-bold py-2 px-2 rounded-lg' onClick={() => { logOut() }} >LogOut</li></Link>
                    </>
                    :
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
            }
        </div>
    </>
    return (
        <div className="navbar max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Art In Motion</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div>
                    {
                        user && <img className='w-20 h-20 rounded-full border' title={user?.displayName} src={user?.photoURL} alt="" />
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;