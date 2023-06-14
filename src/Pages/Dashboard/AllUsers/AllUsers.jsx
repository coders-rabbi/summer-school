import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://art-in-motion-server-coders-rabbi.vercel.app/users')
        return res.json();
    })

    const handleMakeAdmin = id => {
        const updateRole = { userId: id, role: "admin" }
        fetch(`https://art-in-motion-server-coders-rabbi.vercel.app/users/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateRole)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'This User Admin Now',
                    })
                }
            })
    }

    const handleMakeInstructor = id => {
        const updateRole = { userId: id, role: "instructor" }
        fetch(`https://art-in-motion-server-coders-rabbi.vercel.app/users/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateRole)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'This User Instructor Now',
                    })
                }
            })
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
                        <th className="bg-slate-200 font-josefin text-xl">ADMIN</th>
                        <th className="bg-slate-200 font-josefin text-xl">INSTRUCTOR</th>
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
                                <button
                                    onClick={() => handleMakeAdmin(user._id)}
                                    className='btn btn-primary bg-red-600 text-white'
                                >Make Admin</button>
                        }
                    </td>
                    <td className='text-2xl'>
                        {
                            user.role === 'instructor' ? "Instructor"
                                :
                                <button
                                    onClick={() => { handleMakeInstructor(user._id) }}
                                    className='btn btn-primary bg-red-600 text-white'
                                >Make Instructor</button>
                        }
                    </td>
                </tr>)
            }

        </div>
    );
};

export default AllUsers;