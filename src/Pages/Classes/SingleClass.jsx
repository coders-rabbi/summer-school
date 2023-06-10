import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';

const SingleClass = ({ cls }) => {
    const { _id, image, name, instructor_name, seats, price } = cls;
    const { user } = useContext(AuthContext);
    console.log(cls);

    const handleAleart = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Login!'
        })
    }

    return (
        <div>
            <div className={
                seats < 1 ? 'bg-red-400 border rounded-md hover:shadow-lg' : 'bg-white border rounded-md hover:shadow-lg'

            }>
                <img className='h-60' src={image} alt="" />
                <div className='p-5'>
                    <h2 className='text-3xl font-semibold font-josefin'>{name}</h2>
                    <h3 className='text-xl font-semibold'>Instructor: <small>{instructor_name}</small></h3>
                    <h3 className='text-xl'>Available Seats: <strong>{seats}</strong> </h3>
                    <div className='flex justify-between items-center'>
                        <p className='text-xl'>Price: <strong>${price}</strong></p>

                        {user ?
                            <button className={
                                seats < 1 ? "btn btn-disabled " : "btn bg-[#f9782e]"
                            }>Enroll</button>
                            :
                            <>
                                <button onClick={handleAleart} className='btn'>Enrrol</button>
                            </>
                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleClass;