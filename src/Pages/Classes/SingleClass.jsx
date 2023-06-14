import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import useUsers from '../../Hooks/useUsers';

const SingleClass = ({ cls }) => {
    const [allUsers] = useUsers();
    const { _id, image, name, instructor_name, available_seats, price } = cls;

    const { user } = useContext(AuthContext);
    const loggedInUser = user?.email;

    const userRole = allUsers.find(item => item.userEmail === loggedInUser)
    const role = userRole?.role;
    // console.log(object);


    const handleEnrlledCourses = (cls) => {

        if (user && user.email) {
            const enrolledCourse = { courseID: _id, courseName: name, price: price, instructor_name: instructor_name, image: image, user_email: user.email };
            console.log(enrolledCourse);
            fetch('https://art-in-motion-server-coders-rabbi.vercel.app/enrolled-courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(enrolledCourse)
            })
                .then(res => res.json())
                .then(data => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfull',
                        text: 'Course successfully added.Go to Dashboard',
                    })
                    console.log(data);
                })
        }
    }


    const handleWithOurLogin = () => {
        Swal.fire({
            icon: 'error',
            title: 'Opps...',
            text: 'Please Login First',
        })
    }


    return (
        <div>
            <div className={
                available_seats < 1 ? 'bg-red-400 border rounded-md hover:shadow-lg' : 'bg-white border rounded-md hover:shadow-lg'

            }>
                <img className='h-60' src={image} alt="" />
                <div className='p-5'>
                    <h2 className='text-3xl font-semibold font-josefin'>{name}</h2>
                    <h3 className='text-xl font-semibold'>Instructor: <small>{instructor_name}</small></h3>
                    <h3 className='text-xl'>Available seats: <strong>{available_seats}</strong> </h3>
                    <div className='flex justify-between items-center'>
                        <p className='text-xl'>Price: <strong>${price}</strong></p>

                        {
                            role === 'admin' || role === 'instructor' ?
                                <></>
                                :
                                <>
                                    {
                                        user ?
                                            <>
                                                <>
                                                    <button className={
                                                        available_seats < 1 ? "btn btn-disabled " : "btn bg-[#f9782e]"
                                                    } onClick={() => { handleEnrlledCourses(cls) }}>Enroll</button>
                                                </>
                                            </>
                                            :
                                            <>
                                                <button
                                                    onClick={handleWithOurLogin}
                                                    className='btn btn-error'>Enroll</button>
                                            </>
                                    }
                                </>
                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleClass;