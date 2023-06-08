import dance01 from "../../../assets/popular/inner_dance_01.jpg"
import dance02 from "../../../assets/popular/inner_dance_02.jpg"
import dance03 from "../../../assets/popular/inner_dance_03.jpg"
import dance04 from "../../../assets/popular/inner_dance_04.jpg"


const PopularClass = () => {
    return (
        <div className='max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 mb-20 justify-center justify-items-center mt-36'>
            <div className="hover:shadow-2xl">
                <img className="w-80 h-44" src={dance01} alt="" />
                <div className="px-8 pb-14 mt-5">
                    <h1 className="text-2xl font-bold mb-3">Contemporary</h1>
                    <p className="font-semibold leading-7 mb-4">Master cleanse bushwick gentrify <br /> kickstarter cardigam</p>
                    <button className='text-[#D79C62] font-bold uppercase'>view more</button>
                </div>
            </div>
            <div className="hover:shadow-2xl">
                <img className="w-80 h-44" src={dance02} alt="" />
                <div className="px-8 pb-14 mt-5">
                    <h1 className="text-2xl font-bold mb-3">Jazz Ballet</h1>
                    <p className="font-semibold leading-7 mb-4">Master cleanse bushwick gentrify <br /> kickstarter cardigam</p>
                    <button className='text-[#D79C62] font-bold uppercase'>view more</button>
                </div>
            </div>
            <div className="hover:shadow-2xl">
                <img className="w-80 h-44" src={dance03} alt="" />
                <div className="px-8 pb-14 mt-5">
                    <h1 className="text-2xl font-bold mb-3">Classic Ballet</h1>
                    <p className="font-semibold leading-7 mb-4">Master cleanse bushwick gentrify <br /> kickstarter cardigam</p>
                    <button className='text-[#D79C62] font-bold uppercase'>view more</button>
                </div>
            </div>
            <div className="hover:shadow-2xl">
                <img className="w-80 h-44" src={dance04} alt="" />
                <div className="px-8 pb-14 mt-5">
                    <h1 className="text-2xl font-bold mb-3">Latino</h1>
                    <p className="font-semibold leading-7 mb-4">Master cleanse bushwick gentrify <br /> kickstarter cardigam</p>
                    <button className='text-[#D79C62] font-bold uppercase'>view more</button>
                </div>
            </div>
            <div className="hover:shadow-2xl">
                <img className="w-80 h-44" src={dance04} alt="" />
                <div className="px-8 pb-14 mt-5">
                    <h1 className="text-2xl font-bold mb-3">Breakdance with Paul Lewis</h1>
                    <p className="font-semibold leading-7 mb-4">Master cleanse bushwick gentrify <br /> kickstarter cardigam</p>
                    <button className='text-[#D79C62] font-bold uppercase'>view more</button>
                </div>
            </div>
            <div className="hover:shadow-2xl">
                <img className="w-80 h-44" src={dance04} alt="" />
                <div className="px-8 pb-14 mt-5">
                    <h1 className="text-2xl font-bold mb-3">Hip-Hop Weekend with Stella</h1>
                    <p className="font-semibold leading-7 mb-4">Master cleanse bushwick gentrify <br /> kickstarter cardigam</p>
                    <button className='text-[#D79C62] font-bold uppercase'>view more</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClass;