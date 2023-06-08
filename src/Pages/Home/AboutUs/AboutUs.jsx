import aboutImage from "../../../assets/about/inner_girl_men.png"

const AboutUs = () => {
    return (
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 items-center">
            <div>
                <img src={aboutImage} alt="" />
            </div>
            <div>
                <h1 className="text-6xl font-bold mb-8">About us</h1>
                <p className="text-2xl leading-9 mb-5">Normal that has evolved from generation X is on the runway heading towards a streamlined immersion along the information. Elevate your vector art.</p>
                <small className="text-xl">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new.</small>
                <br />
                
                <button className="btn border-0 rounded-full px-8 mt-10 bg-[#D79C62] btn-primary text-white">view more</button>
            </div>
        </div>
    );
};

export default AboutUs;