import React from 'react';

const SingleClass = ({cls}) => {
    const {_id, image, name, instractor} = cls;
    console.log(cls);
    return (
        <div>
            <div>
                <img src={image} alt="" />
                
            </div>
        </div>
    );
};

export default SingleClass;