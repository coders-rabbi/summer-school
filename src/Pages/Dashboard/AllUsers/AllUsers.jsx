import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleUserDelete = user => {
        console.log(user);
    }

    return (
        <div className='col-start-2 col-end-5 p-10'>
            <h1 className='text-center text-5xl font-serif mb-14'>All Users</h1>
            <table className="table w-full">
                <thead>
                    <tr className="grid md:grid-cols-5 rounded-md justify-items-center mb-5 bg-slate-200">
                        <th className="bg-slate-200 font-josefin text-xl">SERIAL</th>
                        <th className="bg-slate-200 font-josefin text-xl">NAME</th>
                        <th className="bg-slate-200 font-josefin text-xl">EMAIL</th>
                        <th className="bg-slate-200 font-josefin text-xl">ROLE</th>
                        <th className="bg-slate-200 font-josefin text-xl">ACTION</th>
                    </tr>
                </thead>
            </table>
            {
                users.map((user, index) => <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-5 mb-5 justify-items-center items-center shadow-lg text-xl font-josefin p-2' key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.userName}</td>
                    <td>{user.userEmail}</td>
                    <td className='text-2xl'>
                        {
                            user.role === 'admin' ? "Admin"
                            :
                            (
                                <button
                                    title={user.role}
                                    onClick={() => handleMakeADmin(user._id)}
                                    className={
                                        user.role === 'admin' || user.role === 'instrucotr' ? 'btn btn-disabled bg-orange-600 text-white'
                                        :
                                        'btn btn-primary bg-red-600 text-white'
                                    }

                                >Make Admin</button>
                            )
                        }
                    </td>
                    <td className='text-2xl'>
                        <FaTrashAlt onClick={() => handleUserDelete(user)} />
                    </td>
                </tr>)
            }
        </div>
    );
};

export default AllUsers;