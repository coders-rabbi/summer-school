import React from 'react';
import SingleEnrolledCourse from '../SingleEnrolledCourse/SingleEnrolledCourse';
import useEnrolledCourse from '../../../Hooks/useEnrolledCourse';

const MySelectedCourse = () => {
    const [SelectedCourse] = useEnrolledCourse();

    return (
        <div className='col-start-2 col-end-5 p-10 bg-white rounded-md'>
            <h1 className='text-center text-5xl font-serif mb-14'>My Selected Course</h1>

            <table className="table w-full">
                <thead>
                    <tr className="grid md:grid-cols-6 rounded-md justify-items-center mb-5 bg-slate-200">
                        <th className="bg-slate-200 font-josefin text-xl">Delete</th>
                        <th className="bg-slate-200 font-josefin text-xl">Picture</th>
                        <th className="bg-slate-200 font-josefin text-xl">CourseName</th>
                        <th className="bg-slate-200 font-josefin text-xl">Instructor_name</th>
                        <th className="bg-slate-200 font-josefin text-xl">Price</th>
                        <th className="bg-slate-200 font-josefin text-xl">Payment</th>

                    </tr>
                </thead>
            </table>
            {
                SelectedCourse.map(course => <SingleEnrolledCourse
                    key={course._id}
                    course={course}
                ></SingleEnrolledCourse>)
            }
        </div>
    );
};

export default MySelectedCourse;