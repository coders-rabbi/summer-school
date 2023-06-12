import React from 'react';
import { Link } from 'react-router-dom';
import useEnrolledCourse from '../../../Hooks/useEnrolledCourse';
import Swal from 'sweetalert2';

const SingleEnrolledCourse = ({ course }) => {
    const { _id, courseName, price, instructor_name, image } = course;
    const [, refetch] = useEnrolledCourse();


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to be Delete  this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/my-course/${id}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then((data) => {
                        refetch();
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Products deleted.", "success");
                        }
                    });
            }
        });
    };

    const handleAddToCart = () =>{

    }

    return (
        <div>
            <table className="table w-full">

                <tbody>
                    <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-6 mb-5 justify-items-center items-center shadow-lg'>
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
                            {price}
                        </td>

                        <td>
                            <Link to={`/payment/${_id}`} ><button className="btn btn-active btn-ghost">Due</button></Link>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default SingleEnrolledCourse;