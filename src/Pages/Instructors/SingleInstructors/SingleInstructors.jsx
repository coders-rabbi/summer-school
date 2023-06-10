import React from 'react';

const SingleInstructors = ({ instructor }) => {
    const { image, instructor_name, instructor_email } = instructor;
    return (
        <div className='flex items-center border-2 rounded-3xl py-5 px-10 bg-[#EEEEEE] shadow-md'>
            <div>
                <h3 className='text-xl font-josefin mb-10'>{instructor_name}</h3>
                <h1 className='text-5xl mb-5 font-sans font-bold'>Begin a new <br /> stage of  <br />your Career</h1>
                <p className='font-josefin text-xl mb-5'>Discover new skillsm meet passinate techers and become a part of the most hellful community of creatives in the world.</p>
                <p className='text-xl font-bold'>Email: <span>{instructor_email}</span></p>
                <button className="btn border-0 rounded-full px-8 mt-10 bg-[#D79C62] btn-primary text-white">view classes</button>
            </div>
            <img className='w-52 h-52 rounded-full' src={image} alt="" />
        </div>
    );
};

export default SingleInstructors;