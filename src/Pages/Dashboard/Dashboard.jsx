import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaCheckSquare } from "react-icons/fa";
import useEnrolledCourse from '../../Hooks/useEnrolledCourse';
import SingleEnrolledCourse from './SingleEnrolledCourse/SingleEnrolledCourse';
import { Link, Outlet } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { FcApproval } from "react-icons/fc";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [MyCourses] = useEnrolledCourse();

    return (
        <div className='md:grid grid-cols-4 gap-4'>
            <div className='bg-white shadow-md p-10 rounded-md text-center h-screen '>
                <h1 className='text-3xl font-josefin mb-10'>My Profile</h1>
                <div className='flex justify-center'>
                    <img className='h-[100px] w-[100px] shadow-lg border rounded-xl' src={user?.photoURL} alt="" />
                </div>
                <h2 className='text-2xl font-josefin mt-8'>{user?.displayName}</h2>
                <div className='flex justify-center mt-2 items-center gap-2 font-semibold text-gray-500 font-serif mb-5'>
                    <p>Student Account</p><FaCheckSquare className='text-primary' />
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
                    <ul className='menu gap-3'>
                        <li className='text-xl '><Link to="/dashboard"><FaCartPlus/> My Selected Course</Link></li>
                        <li className='text-xl'><Link to="my-Cart"><FcApproval/>My Enrolled Course</Link></li>
                        <li><Link to="my-Cart">Rabbi</Link></li>
                    </ul>
                </div>

            </div>
            <Outlet></Outlet>
            <div className='bg-white rounded-md col-start-2 col-end-5 p-10'>
                <h1 className='text-4xl font-serif text-center font-semibold mb-5'>My Selected Course</h1>
                <table className="table w-full">
                    <thead>
                        <tr className="grid md:grid-cols-5 rounded-md justify-items-center mb-5 bg-slate-200">
                            <th className="bg-slate-200">Delete</th>
                            <th className="bg-slate-200">picture</th>
                            <th className="bg-slate-200">courseName</th>
                            <th className="bg-slate-200">instructor_name</th>
                            <th className="bg-slate-200">Payment</th>

                        </tr>
                    </thead>
                </table>

                {
                    MyCourses.map(course => <SingleEnrolledCourse
                        key={course._id}
                        course={course}
                    ></SingleEnrolledCourse>)
                }

            </div>
        </div>
    );
};

export default Dashboard;