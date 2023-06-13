import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddClasses = () => {
    const { user } = useContext(AuthContext)

    const handleAddClass = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.className.value;
        const image = form.classImage.value;
        const instructor_name = form.instructorName.value;
        const instructor_email = form.instructorEmail.value;
        const available_seats = form.availableSeat.value;
        const price = form.price.value;
        const addClass = { name: name, image: image, instructor_name: instructor_name, instructor_email: instructor_email, available_seats: available_seats, price: price, status: 'panding' };

        fetch('http://localhost:5000/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire(
                    'Added Class!',
                    'Your Class has been Added.',
                    'success'
                )
                form.reset();
            })

    }
    return (
        <div className='col-start-2 col-span-5 p-10'>
            <h1 className='text-4xl text-center font-josefin mb-10'> Add Your Class</h1>
            <form onSubmit={handleAddClass} className='m-20 px-16 py-20 bg-white '>
                <h1 className='text-4xl text-center font-josefin mb-10'> Add A Class</h1>
                <div className='grid md:grid-cols-2 gap-4 mb-10'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class name</span>
                        </label>
                        <input type="text" name='className' placeholder="your class name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="text" name='classImage' placeholder="add class image" className="input input-bordered" required />
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4 mb-10'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" name='instructorName' value={user.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="text" name='instructorEmail' value={user.email} className="input input-bordered" />
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="number" name='availableSeat' placeholder='Total Seats' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Pirce</span>
                        </label>
                        <input type="text" name='price' placeholder='Price' className="input input-bordered" />
                    </div>
                </div>
                <button className='btn btn-block mt-10'><input type="submit" value="Add Class" /></button>
            </form>
        </div>
    );
};

export default AddClasses;