import bannerExtra from "../../../assets/HomeBanner/background_dance_03.jpg"

const MoreExtraSection = () => {
    return (
        <div className='mt-20 relative mx-auto'>
            <img src={bannerExtra} alt="" className="bg-fixed" />
            <div className="max-w-screen-2xl absolute grid grid-cols-3 top-1/3 left-1/4 gap-20 mx-auto text-white text-left">
                <div className="p-10">
                    <h1 className="uppercase text-2xl font-josefin text-white mb-10">from</h1>
                    <p className="text-[#D79C62] mb-7"><span className="text-3xl">$</span><strong className="text-6xl"> 30</strong></p>
                    <p className="text-2xl font-josefin mb-10">PAY AS YOU GO LESSION</p>
                    <p className="font-josefin leading-6">Listicle adaptogen whatever tote bag <br /> church-key trust fund food school of art <br /> truck pinterest artist lacus urna.</p>
                </div>
                <div className="border p-10 border-[#D79C62] rounded-md">
                    <h1 className="uppercase text-2xl font-josefin text-white mb-10">from</h1>
                    <p className="text-[#D79C62] mb-7"><span className="text-3xl">$</span><strong className="text-6xl"> 230</strong></p>
                    <p className="text-2xl font-josefin mb-10">PAY AS YOU GO LESSION</p>
                    <p className="font-josefin leading-6">Listicle adaptogen whatever tote bag <br /> church-key trust fund food school of art <br /> truck pinterest artist lacus urna.</p>
                </div>
                <div className="p-10 ">
                    <h1 className="uppercase text-2xl font-josefin text-white mb-10">from</h1>
                    <p className="text-[#D79C62] mb-7"><span className="text-3xl">$</span><strong className="text-6xl"> 130</strong></p>
                    <p className="text-2xl font-josefin mb-10">PAY AS YOU GO LESSION</p>
                    <p className="font-josefin leading-6">Listicle adaptogen whatever tote bag <br /> church-key trust fund food school of art <br /> truck pinterest artist lacus urna.</p>
                </div>
            </div>
        </div>
    );
};

export default MoreExtraSection;