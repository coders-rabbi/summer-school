import { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import ReasonModal from "./ReasonModal";

const InstructorClass = ({ items, index }) => {
    const [showModal, setShowModal] = useState(false);
    const { _id, image, instructor_name, available_seats, price, status, reason } = items;


    return (
        <div>
            <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-6 mb-5  items-center shadow-lg text-xl font-josefin p-2'>
                <td>
                    {index}
                </td>
                <td>
                    <img className='w-24 rounded-md' src={image} alt="" />
                </td>
                <td>
                    {instructor_name}
                </td>
                <td>
                    {available_seats}
                </td>
                <td>
                    {price}
                </td>
                <td className='relative'>
                    <div>
                        {
                            status === 'panding' ? <p className='text-warning'>{status}</p>
                                :
                                <>
                                    {
                                        status === 'confirmed' ? <p className='text-success'>{status}</p> : <p className='text-error'>denied</p>
                                    }
                                </>
                        }
                    </div>
                    {
                        status === 'denied' ? <div
                            onClick={() => setShowModal(_id)}
                            className="badge badge-secondary absolute -top-5 ml-16  "><IoMdNotifications />+1</div> : <></>
                    }
                </td>
            </tr>
            <ReasonModal isVisible={(showModal)} onClose={() => setShowModal(false)} showModal={showModal} items={items}></ReasonModal>
        </div>
    );
};

export default InstructorClass;