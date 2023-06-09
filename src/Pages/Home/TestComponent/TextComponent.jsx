import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Pagination } from "swiper";
import SectionTitle from "../../../SectionTitile/SectionTitle";
import instructors01 from "../../../assets/Instructors/1677507598430.jpg"
import instructors02 from "../../../assets/Instructors/1622725553860.jpg"
import instructors03 from "../../../assets/Instructors/09-Govinda.jpg"
import instructors04 from "../../../assets/Instructors/classical.jpg"
import instructors05 from "../../../assets/Instructors/Nora-Fatehi-FIFA.png"
import instructors06 from "../../../assets/Instructors/dancerSix.png"


const TextComponent = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <SectionTitle
                subHeading="Instructors" heading="Our popular instructors"
            ></SectionTitle>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 51,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="overflow-hidden">
                    <img className="h-[300px]" src={instructors01} />
                    <div className="
                    absolute
                    overflow-hidden
                    -bottom-32
                    hover:bottom-0
                    text-white
                    w-full
                    h-[300px]
                    bg-gradient-to-t
                    from-yellow-500
                    flex
                    flex-col
                    justify-end
                    items-center
                    p-6
                    ">
                        <h3 className="text-2xl font-semibold font-josefin">Jhankar Mahabub</h3>
                        <p className="text-black text-xl font-josefin">Total Students: 750+</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden">
                    <img className="h-[300px]" src={instructors02} alt="" />
                    <div className="
                    absolute
                    overflow-hidden
                    -bottom-32
                    hover:bottom-0
                    text-white
                    w-full
                    h-[300px]
                    bg-gradient-to-t
                    from-yellow-500
                    flex
                    flex-col
                    justify-end
                    items-center
                    p-6
                    ">
                        <h3 className="text-2xl text-center font-semibold font-josefin">Sheikh Mahammad Rifat</h3>
                        <p className="text-black text-xl font-josefin">Total Students: 750+</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden">
                    <img className="h-[300px]" src={instructors03} alt="" />
                    <div className="
                    absolute
                    overflow-hidden
                    -bottom-32
                    hover:bottom-0
                    text-white
                    w-full
                    h-[300px]
                    bg-gradient-to-t
                    from-yellow-500
                    flex
                    flex-col
                    justify-end
                    items-center
                    p-6
                    ">
                        <h3 className="text-2xl font-semibold font-josefin">Govinda</h3>
                        <p className="text-black text-xl font-josefin">Total Students: 750+</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden">
                    <img className="h-[300px]" src={instructors04} alt="" />
                    <div className="
                    absolute
                    overflow-hidden
                    -bottom-32
                    hover:bottom-0
                    text-white
                    w-full
                    h-[300px]
                    bg-gradient-to-t
                    from-yellow-500
                    flex
                    flex-col
                    justify-end
                    items-center
                    p-6
                    ">
                        <h3 className="text-2xl font-semibold font-josefin">Susmita Sen</h3>
                        <p className="text-black text-xl font-josefin">Total Students: 750+</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden">
                    <img className="h-[300px]" src={instructors05} alt="" />
                    <div className="
                    absolute
                    overflow-hidden
                    -bottom-32
                    hover:bottom-0
                    text-white
                    w-full
                    h-[300px]
                    bg-gradient-to-t
                    from-yellow-500
                    flex
                    flex-col
                    justify-end
                    items-center
                    p-6
                    ">
                        <h3 className="text-2xl font-semibold font-josefin">Nora Fatehi</h3>
                        <p className="text-black text-xl font-josefin">Total Students: 750+</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden">
                    <img className="h-[300px]" src={instructors06} alt="" />
                    <div className="
                    absolute
                    overflow-hidden
                    -bottom-32
                    hover:bottom-0
                    text-white
                    w-full
                    h-[300px]
                    bg-gradient-to-t
                    from-yellow-500
                    flex
                    flex-col
                    justify-end
                    items-center
                    p-6
                    ">
                        <h3 className="text-2xl font-semibold font-josefin">Daniela Blume</h3>
                        <p className="text-black text-xl font-josefin">Total Students: 750+</p>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default TextComponent;