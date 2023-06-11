import React from 'react';
import { Link } from 'react-router-dom';
import useEnrolledCourse from '../../../Hooks/useEnrolledCourse';

const SingleEnrolledCourse = ({ course }) => {
    const { _id, courseName, price, instructor_name, image } = course;
    const [, refetch] = useEnrolledCourse();


    const handleDelete = id => {
        fetch(`http://localhost:5000/my-course/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            refetch();
            console.log(data);
        })
    }
    return (
        <div>
            <table className="table w-full">

                <tbody>
                    <tr className='bg-[#EEEEEE] rounded-md grid grid-cols-5 mb-5 justify-items-center items-center shadow-lg '>
                        <td>
                            <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-error">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </td>

                        <td>
                            <img className='w-20' src={image} alt="" />
                        </td>

                        <td>
                           <p className='text-xl font-serif font-semibold'>{courseName}</p>
                        </td>

                        <td>
                            <p className='text-xl font-serif font-semibold'>{instructor_name}</p>
                        </td>

                        <td>
                            <Link to={`/toydetails/${_id}`} ><button className="btn btn-active btn-ghost">Due</button></Link>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default SingleEnrolledCourse;