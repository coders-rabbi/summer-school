import React, { useState } from 'react';
import Swal from 'sweetalert2';
import FeedBack from './FeedBack';

const ManageSingleClass = ({ singleClass, refetch, setShowModal }) => {
    const { _id, image, name, instructor_email, instructor_name, available_seats, price, status } = singleClass;

    const handleConfirmed = id => {
        const updateStatus = { userId: id, status: "confirmed" }
        fetch(`http://localhost:5000/classes/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateStatus)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Class has been approved',
                    })
                }
            })
    }

    const handleDenied = id => {
        const updateStatus = { userId: id, status: "denied" }
        fetch(`http://localhost:5000/classes/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateStatus)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Class has been denied',
                    })
                }
            })
    }


    return (
        <div>
            <table className="table w-full">

                <tbody>
                    <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-9 mb-5 items-center shadow-lg'>
                        <td>
                            <img className='w-20 h-20 rounded-md' src={image} alt="" />
                        </td>
                        <td>
                            <p className='font-serif font-semibold'>{name}</p>
                        </td>
                        <td>
                            <p className='font-serif font-semibold'>{instructor_name}</p>
                        </td>
                        <td>
                            <p className='font-serif font-semibold'>{instructor_email}</p>
                        </td>
                        <td>
                            <p className='font-serif font-semibold'>{available_seats}</p>
                        </td>
                        <td>
                            <p className='font-serif font-semibold'>${price}</p>
                        </td>
                        <td>
                            <p className='font-serif font-semibold'>{status}</p>
                        </td>
                        <td className='flex flex-col gap-2'>
                            <button
                                onClick={() => handleConfirmed(_id)}
                                className={
                                    status === 'confirmed' || status === 'denied' ? 'btn-disabled' : 'btn btn-xs bg-success'
                                }
                            >Confirmed</button>
                            <button
                                onClick={() => handleDenied(_id)}
                                className={
                                    status === 'confirmed' || status === 'denied' ? 'btn-disabled' : 'btn btn-xs bg-warning'
                                }
                            >Denied</button>
                        </td>
                        <td>
                            <button
                                onClick={() => setShowModal(_id)}
                                className="btn btn-sm bg-secondary text-white">Feedback</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageSingleClass;