import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaCheckSquare, FaUsers } from "react-icons/fa";
import useEnrolledCourse from '../../Hooks/useEnrolledCourse';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCartPlus, FaHome } from 'react-icons/fa';
import { FcApproval } from "react-icons/fc";
import { useQuery } from '@tanstack/react-query';
import { GiBookAura } from "react-icons/gi";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [MyCourses] = useEnrolledCourse();

    const { data: allUsers = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const loggedInUser = user?.email;

    const userRole = allUsers.find(item => item.userEmail === loggedInUser)
    const role = userRole?.role;


    const isAdmin = false;

    return (
        <div className='md:grid grid-cols-4 gap-4'>
            <div className='bg-white shadow-md p-10 rounded-md text-center h-screen '>
                <h1 className='text-3xl font-josefin mb-10'>My Profile</h1>
                <div className='flex justify-center'>
                    <img className='h-[100px] w-[100px] shadow-lg border rounded-xl' src={user?.photoURL} alt="" />
                </div>
                <h2 className='text-2xl font-josefin mt-8'>{user?.displayName}</h2>
                <div className='flex justify-center mt-2 items-center gap-2 font-semibold text-gray-500 font-serif mb-5'>
                    <p>{role} Account</p><FaCheckSquare className='text-primary' />
                </div>
                <hr className='bg-black' />
                <h1 className='text-3xl font-serif mt-5 font-bold'>Student Analytic</h1>

                <div className='text-left mt-10'>
                    <h3 className='text-xl font-semibold mb-3'>Enrroled Courses: {MyCourses.length}</h3>
                    <h3 className='text-xl font-semibold mb-3'>Complete Courses: 0</h3>
                    <h3 className='text-xl font-semibold mb-3'>Payment Due: {MyCourses.length}</h3>
                </div>
                <hr />
                <div className='flex flex-col items-start gap-4'>
                    {
                        role === 'student' ?
                            <>
                                <ul className='menu gap-3'>
                                    <li className='text-xl'><NavLink to="my-Cart"><FaCartPlus /> My Selected Course</NavLink></li>
                                    <li className='text-xl'><NavLink to="enrolled-course"><FcApproval />My Enrolled Course</NavLink></li>
                                    <li className='text-xl'><NavLink to="/"><FaHome /> Back To Home</NavLink></li>
                                </ul>
                            </>
                            :
                            <>
                                {
                                    role === 'instrucotr' ?
                                        <>
                                            <ul className='menu'>
                                                <li className='text-xl'><NavLink to="/"><FaHome /> Back To Home</NavLink></li>
                                            </ul>
                                        </>
                                        :
                                        <>
                                            <ul className='menu gap-5 mt-10'>
                                                <li className='text-xl'><NavLink to="allUsers"><FaUsers />Manage Users</NavLink></li>
                                                <li className='text-xl'><NavLink to="/"><GiBookAura />Manage Classes</NavLink></li>
                                                <li className='text-xl'><NavLink to="/"><FaHome />Back To Home</NavLink></li>
                                            </ul>
                                        </>
                                }
                            </>


                    }
                </div>

            </div>
            <Outlet></Outlet>

            <div className='bg-white rounded-md col-start-2 col-end-5 p-10'>

            </div>
        </div>
    );
};

export default Dashboard;




{/* <ul className='menu gap-3'>
    <li className='text-xl'><NavLink to="my-Cart"><FaCartPlus /> My Selected Course</NavLink></li>
    <li className='text-xl'><NavLink to="enrolled-course"><FcApproval />My Enrolled Course</NavLink></li>
    <li className='text-xl'><NavLink to="/"><FaHome /> Back To Home</NavLink></li>
</ul> */}