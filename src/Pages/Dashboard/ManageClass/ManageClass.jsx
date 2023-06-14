import React, { useState } from 'react';
import useAddClass from '../../../Hooks/useAddClass';
import ManageSingleClass from './ManageSingleClass';
import FeedBack from './FeedBack';

const ManageClass = () => {
    const [classes, refetch] = useAddClass()
    const [showModal, setShowModal] = useState(false);
    console.log(showModal);

    return (
        <div className='col-start-2 col-end-5 p-10'>
            <h1 className='text-center text-5xl font-serif mb-14'>Manage All Classes</h1>
            <table className="table w-full">
                <thead>
                    <tr className="grid md:grid-cols-9 rounded-md  mb-5 bg-slate-200">
                        <th className="bg-slate-200 font-josefin text-xl">Image</th>
                        <th className="bg-slate-200 font-josefin text-xl">Class name</th>
                        <th className="bg-slate-200 font-josefin text-xl">Instructor name</th>
                        <th className="bg-slate-200 font-josefin text-xl">Instructor email</th>
                        <th className="bg-slate-200 font-josefin text-xl">Available seats</th>
                        <th className="bg-slate-200 font-josefin text-xl">Price</th>
                        <th className="bg-slate-200 font-josefin text-xl">Status</th>
                        <th className="bg-slate-200 font-josefin text-xl">Approval</th>
                        <th className="bg-slate-200 font-josefin text-xl">FeedBack</th>
                    </tr>
                </thead>
            </table>
            <div>
                {
                    classes.map(singleClass => <ManageSingleClass
                        key={singleClass._id}
                        singleClass={singleClass}
                        refetch={refetch}
                        setShowModal={setShowModal}
                    ></ManageSingleClass>)
                }
            </div>
            <FeedBack isVisible={(showModal)} onClose={() => setShowModal(false)} showModal={showModal}  ></FeedBack>
        </div>
    );
};

export default ManageClass;