import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaCheckSquare } from "react-icons/fa";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='grid grid-cols-4 gap-4'>
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
                    <h3 className='text-xl font-semibold mb-3'>Enrroled Courses: 0</h3>
                    <h3 className='text-xl font-semibold mb-3'>Complete Courses: 0</h3>
                    <h3 className='text-xl font-semibold mb-3'>Payment Due: 0</h3>
                </div>
            </div>
            <div className='bg-green-500 col-start-2 col-end-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, quo minima perspiciatis obcaecati cum eos voluptate rerum. Nesciunt deleniti repellat mollitia, ipsam est corporis voluptatibus quia perferendis ab dolorum quae facere ea quas necessitatibus? Harum alias error unde, deserunt necessitatibus quaerat recusandae, dignissimos modi asperiores suscipit tempore corporis dolorum. Aperiam iste praesentium quaerat aliquid incidunt!</div>
        </div>
    );
};

export default Dashboard;