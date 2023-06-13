import React from 'react';

const ManageSingleClass = ({ singleClass }) => {
    const { _id, image, name, instructor_email, instructor_name, available_seats, price, status } = singleClass;
    return (
        <div>
            <table className="table w-full">

                <tbody>
                    <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-8 mb-5 items-center shadow-lg'>
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
                            <button className='btn btn-xs bg-success'>Confirmed</button>
                            <button className='btn btn-xs bg-warning'>Denied</button>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default ManageSingleClass;