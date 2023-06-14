import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { RxCrossCircled } from "react-icons/rx";
import Swal from 'sweetalert2';

const FeedBack = ({ isVisible, onClose, showModal }) => {
    if (!isVisible) return null;
    const { user } = useContext(AuthContext)

    // const id = showModal;


    const handleFeedback = event => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;

        const addReason = { userId: showModal, reason: feedback }
        fetch(`https://art-in-motion-server-coders-rabbi.vercel.app/classes/${showModal}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addReason)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Approved / Rejected reason has been send',
                    })
                }
            })
    }


    return (
        <div className='fixed inset-0  bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[800px] flex flex-col justify-items-center'>
                <button onClick={() => onClose()} className='text-secondary text-4xl place-self-end'><RxCrossCircled /></button>
                <div className='bg-white p-10 rounded-md'>
                    <h1 className='text-center text-5xl font-serif mb-8'>FeedBack</h1>
                    <form onSubmit={handleFeedback}>
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Name</span>
                                </label>
                                <input type="text" value={user?.displayName} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input type="text" value={user?.email} className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control">
                            <textarea name="feedback" id="" cols="100" rows="10" placeholder='Write Feedback' className='border rounded-md mt-5 p-4'></textarea>

                            <button className="btn btn-secondary mt-5 text-black"><input type="submit" value="Send feedback" /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;