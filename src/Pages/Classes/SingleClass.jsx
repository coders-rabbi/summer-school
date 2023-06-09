import React from 'react';

const SingleClass = ({cls}) => {
    const {_id, image, name, instructor_name, seats, price} = cls;
    console.log(cls);
    return (
        <div>
            <div>
                <img src={image} alt="" />
                <h2>{name}</h2>
                <h3>Instructor: {instructor_name}</h3>
                <h3>Available Seats: {seats}</h3>
                <p>Price: {price}</p>
            </div>
        </div>
    );
};

export default SingleClass;