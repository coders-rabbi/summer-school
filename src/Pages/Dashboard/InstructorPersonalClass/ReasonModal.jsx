import React from 'react';
import { RxCrossCircled } from 'react-icons/rx';

const ReasonModal = ({ isVisible, onClose, showModal, items }) => {
    if (!isVisible) return null;
    console.log(showModal, items);
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[600px] flex flex-col'>
                <button onClick={() => onClose()} className='text-secondary text-4xl place-self-end'><RxCrossCircled /></button>
                <div className='bg-white p-5 rounded-md'>
                    {items.reason}
                </div>
            </div>
        </div>
    );
};

export default ReasonModal;

{/* <div className='w-[800px] flex flex-col justify-items-center'>
                <button onClick={() => onClose()} className='text-secondary text-4xl place-self-end'><RxCrossCircled /></button>
                <div>
                    Modal
                </div>
            </div> */}