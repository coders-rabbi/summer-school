import React from 'react';

const InstructorClass = ({ items, index }) => {
    const { image, instructor_name, available_seats, price, status } = items;
    return (
        <div>
            <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-6 mb-5  items-center shadow-lg text-xl font-josefin p-2'>
                <td>
                    {index}
                </td>
                <td>
                    <img className='w-24 rounded-md' src={image} alt="" />
                </td>
                <td>
                    {instructor_name}
                </td>
                <td>
                    {available_seats}
                </td>
                <td>
                    {price}
                </td>
                <td>
                    {
                        status === 'panding' ? <p className='text-warning'>{status}</p>
                            :
                            <>
                                {
                                    status === 'confirmed' ? <p className='text-success'>{status}</p> : <p className='text-error'>denied</p>
                                }
                            </>
                    }

                </td>
            </tr>
        </div>
    );
};

export default InstructorClass;