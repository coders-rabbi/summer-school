import React from 'react';

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className='mb-10 flex flex-col items-center'>
            <p className='px-10 text-2xl border-b-4 border-b-[#D9D9D9] py-3 mb-10 text-[#D79C62]'>{subHeading}</p>
            <p className=' text-5xl uppercase border-b-4 border-b-[D9D9D9] py-3 mt-3 px-20'>{heading}</p>
        </div>
    );
};

export default SectionTitle;