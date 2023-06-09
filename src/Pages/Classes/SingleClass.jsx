import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';

const SingleClass = ({ cls }) => {
    const { _id, image, name, instructor_name, seats, price } = cls;
    const { user } = useContext(AuthContext);
    console.log(cls);
    return (
        <div>
            {/* {
                {seats == 0} ? <h1>Rabbi </h1> : <div className='w-96 border'>
                <img className='h-60' src={image} alt="" />
                <div className='p-5'>
                    <h2 className='text-3xl font-semibold font-josefin'>{name}</h2>
                    <h3 className='text-xl font-semibold'>Instructor: <small>{instructor_name}</small></h3>
                    <h3 className='text-xl'>Available Seats: <strong>{seats}</strong> </h3>
                    <p className='text-xl'>Price: <strong>${price}</strong></p>
                </div> 
            } */}
            <div className={
                seats < 1 ? 'bg-red-400' : 'bg-white'

            }>
                <img className='h-60' src={image} alt="" />
                <div className='p-5'>
                    <h2 className='text-3xl font-semibold font-josefin'>{name}</h2>
                    <h3 className='text-xl font-semibold'>Instructor: <small>{instructor_name}</small></h3>
                    <h3 className='text-xl'>Available Seats: <strong>{seats}</strong> </h3>
                    <div className='flex justify-between items-center'>
                        <p className='text-xl'>Price: <strong>${price}</strong></p>
                        <Link to={`/rabbi`}>
                            {user ?
                                <button className={
                                    seats < 1 ? "btn btn-disabled " : "btn bg-[#f9782e]"
                                }>Enroll</button>
                                :
                                <>
                                    
                                </>
                            }
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleClass;