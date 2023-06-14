import { useEffect, useState } from "react";
import banner from "../../assets/Instructors/instractor_banner.jpg"
import SingleInstructors from "./SingleInstructors/SingleInstructors";
import SectionTitle from "../../SectionTitile/SectionTitle";
import { useHeader } from "../../Hooks/useTitile";

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    console.log(instructors);
    useEffect(() => {
        fetch('https://art-in-motion-server-coders-rabbi.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
            })
    }, [])

    useHeader("Instructors - Art in motion")

    return (
        <div>
            <div className="relative">
                <img className="w-full h-[750px] blur-sm" src={banner} alt="" />
                <h1 className="text-6xl absolute top-1/2 right-1/3 font-bold font-josefin">Our Best Instructors</h1>
            </div>
            <SectionTitle subHeading="instructors" heading="our famous instructors"></SectionTitle>
            <div className="mt-28 max-w-screen-xl mx-auto grid md:grid-cols-2 gap-5">
                
                {
                    instructors.map(instructor => <SingleInstructors
                        key={instructor._id}
                        instructor={instructor}
                    ></SingleInstructors>)
                }
            </div>

        </div>
    );
};

export default Instructors;