import React from 'react';
import useClasses from '../../Hooks/useClasses';
import classBanner from "../../assets/HomeBanner/banner_02.jpg"
import { FaCalendarCheck, FaUserAlt, FaClock } from "react-icons/fa";
import SingleClass from './SingleClass';
import SectionTitle from '../../SectionTitile/SectionTitle';

const Classes = () => {
    const [classes] = useClasses()
    
    return (
        <div>
            <div className='relative mb-12'>
                <img className='h-[900px] w-full' src={classBanner} alt="" />
                <div className='absolute top-1/3 left-2/3'>
                    <h4 className='uppercase text-xl font-bold font-josefin text-center text-[#D79C62]'>new members</h4>
                    <h2 className='text-5xl font-semibold mt-6'>Ballet Classes from</h2>
                    <h1 className='text-7xl font-josefin mt-10 text-center'>$299</h1>
                    <div className='grid grid-cols-3 mt-5'>
                        <div className='flex flex-col items-center gap-4 border-r-2 border-gray-400 p-5'>
                            <FaCalendarCheck className='text-3xl text-center' />
                            <p className='uppercase text-xl font-semibold text-[#D79C62]'>Monday</p>
                            <p className='text-xl'>9AM - 5PM</p>
                        </div>
                        <div className='flex flex-col items-center gap-4 border-r-2 border-gray-400 p-5 '>
                            <FaUserAlt className='text-3xl text-center' />
                            <p className='uppercase text-xl font-semibold text-[#D79C62]'>teacher</p>
                            <p className='text-xl'>Shahadat Shakil</p>
                        </div>
                        <div className='flex flex-col items-center gap-4 p-5'>
                            <FaClock className='text-3xl text-center' />
                            <p className='uppercase text-xl font-semibold text-[#D79C62]'>duration</p>
                            <p className='text-xl'>10 Weeks</p>
                        </div>
                    </div>
                </div>
            </div>
            <SectionTitle
                subHeading="Our Classes" heading="our favorite classes"
            ></SectionTitle>
            <div className='max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mb-36 mt-20'>
                
                {
                    classes.map(cls => <SingleClass
                        key={cls._id}
                        cls={cls}
                    ></SingleClass>)
                }
            </div>
        </div>
    );
};

export default Classes;