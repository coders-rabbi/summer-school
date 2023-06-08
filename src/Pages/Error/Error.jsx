import React from 'react'
import Lottie from "lottie-react";
import errorPage from '../../assets/404-error.json'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='w-6/12 mx-auto mt-20'>
            <Lottie animationData={errorPage} loop={true} />;
            <div className='flex justify-center'>
                <Link to="/"><button className="btn btn-ghost">Back to home</button></Link>
            </div>
        </div>
    );
};

export default Error;