import React from 'react';

const ManageClass = () => {

    return (
        <div className='col-start-2 col-end-5 p-10'>
            <h1 className='text-center text-5xl font-serif mb-14'>Manage All Classes</h1>
            <table className="table w-full">
                <thead>
                    <tr className="grid md:grid-cols-6 rounded-md  mb-5 bg-slate-200">
                        <th className="bg-slate-200 font-josefin text-xl">Image</th>
                        <th className="bg-slate-200 font-josefin text-xl">Instructor name</th>
                        <th className="bg-slate-200 font-josefin text-xl">Instructor email</th>
                        <th className="bg-slate-200 font-josefin text-xl">Available seats</th>
                        <th className="bg-slate-200 font-josefin text-xl">Price</th>
                        <th className="bg-slate-200 font-josefin text-xl">Approval</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default ManageClass;