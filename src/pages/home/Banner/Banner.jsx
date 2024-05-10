import banner1 from "../../../assets/images/banner/1.jpg"
import banner2 from "../../../assets/images/banner/2.jpg"
import banner3 from "../../../assets/images/banner/3.jpg"
import banner4 from "../../../assets/images/banner/4.jpg"
import banner5 from "../../../assets/images/banner/5.jpg"
import banner6 from "../../../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[300px] md:h-[480px]  lg:h-[600px] rounded-2xl">
            <div id="slide1" className="carousel-item relative w-full h-[300px] md:h-[480px] lg:h-[600px]  rounded-2xl">
                <img src={banner1} className="w-full  lg:h-[600px] rounded-2xl" />      
                <div className="absolute  gap-3 text-white bg-gradient-to-r from-[#151515] to-[rgba(21 , 21, 21 ,0)] h-full ">
                    <div className=" ">
                        {/* for medium and large device */}
                        <h2 className="lg:text-6xl font-bold md:text-4xl   md:mt-[100px] lg:mt-32 ml-14 lg:ml-24 md:block hidden  ">Affordable <br /> Price For Car <br /> Servicing</h2>
                        {/* small device */}
                        <h2 className=" font-bold text-lg mt-4  ml-8  md:hidden ">Affordable Price <br /> For Car Servicing</h2>
                        <p className="  md:text-xl text-sm ml-8 md:ml-14 lg:ml-24 md:mt-7 lg:mt-11 mt-2">There are many variations of passages of  available, But <br /> the majority have suffered alteration in some form</p>
                    </div>
                    <div className="ml-8 md:ml-14 lg:ml-24 mt-2 md:mt-5">
                        <button className="btn btn-outline mr-3 text-[#FFFFFF] bg-[#FF3811]">Discover More</button>
                        <button className="btn btn-outline text-[#FFFFFF] ">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 mb-2 left-5 right-5 bottom-0  ">
                    <a href="#slide6" className="btn btn-circle ">❮</a>
                    <a href="#slide2" className="btn btn-circle ">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[300px] md:h-[480px] lg:h-[600px] rounded-2xl">
                <img src={banner2} className="w-full  lg:h-[600px] rounded-2xl" />
                <div className="absolute  gap-3 text-white bg-gradient-to-r from-[#151515] to-[rgba(21 , 21, 21 ,0)] h-full ">
                    <div className=" ">
                        {/* for medium and large device */}
                        <h2 className="lg:text-6xl font-bold md:text-4xl   md:mt-[100px] lg:mt-32 ml-14 lg:ml-24 md:block hidden  ">Affordable <br /> Price For Car <br /> Servicing</h2>
                        {/* small device */}
                        <h2 className=" font-bold text-lg mt-4  ml-8  md:hidden ">Affordable Price <br /> For Car Servicing</h2>
                        <p className="  md:text-xl text-sm ml-8 md:ml-14 lg:ml-24 md:mt-7 lg:mt-11 mt-2">There are many variations of passages of  available, But <br /> the majority have suffered alteration in some form</p>
                    </div>
                    <div className="ml-8 md:ml-14 lg:ml-24 mt-2 md:mt-5">
                        <button className="btn btn-outline mr-3 text-[#FFFFFF] bg-[#FF3811]">Discover More</button>
                        <button className="btn btn-outline text-[#FFFFFF] ">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0  ">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[300px] md:h-[480px] lg:h-[600px] rounded-2xl">
                <img src={banner3} className="w-full  lg:h-[600px] rounded-2xl" />
                <div className="absolute  gap-3 text-white bg-gradient-to-r from-[#151515] to-[rgba(21 , 21, 21 ,0)] h-full ">
                    <div className=" ">
                        {/* for medium and large device */}
                        <h2 className="lg:text-6xl font-bold md:text-4xl   md:mt-[100px] lg:mt-32 ml-14 lg:ml-24 md:block hidden  ">Affordable <br /> Price For Car <br /> Servicing</h2>
                        {/* small device */}
                        <h2 className=" font-bold text-lg mt-4  ml-8  md:hidden ">Affordable Price <br /> For Car Servicing</h2>
                        <p className="  md:text-xl text-sm ml-8 md:ml-14 lg:ml-24 md:mt-7 lg:mt-11 mt-2">There are many variations of passages of  available, But <br /> the majority have suffered alteration in some form</p>
                    </div>
                    <div className="ml-8 md:ml-14 lg:ml-24 mt-2 md:mt-5">
                        <button className="btn btn-outline mr-3 text-[#FFFFFF] bg-[#FF3811]">Discover More</button>
                        <button className="btn btn-outline text-[#FFFFFF] ">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0  ">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[300px] md:h-[480px] lg:h-[600px] rounded-2xl">
                <img src={banner4} className="w-full  lg:h-[600px] rounded-2xl" />
                <div className="absolute  gap-3 text-white bg-gradient-to-r from-[#151515] to-[rgba(21 , 21, 21 ,0)] h-full ">
                    <div className=" ">
                        {/* for medium and large device */}
                        <h2 className="lg:text-6xl font-bold md:text-4xl   md:mt-[100px] lg:mt-32 ml-14 lg:ml-24 md:block hidden  ">Affordable <br /> Price For Car <br /> Servicing</h2>
                        {/* small device */}
                        <h2 className=" font-bold text-lg mt-4  ml-8  md:hidden ">Affordable Price <br /> For Car Servicing</h2>
                        <p className="  md:text-xl text-sm ml-8 md:ml-14 lg:ml-24 md:mt-7 lg:mt-11 mt-2">There are many variations of passages of  available, But <br /> the majority have suffered alteration in some form</p>
                    </div>
                    <div className="ml-8 md:ml-14 lg:ml-24 mt-2 md:mt-5">
                        <button className="btn btn-outline mr-3 text-[#FFFFFF] bg-[#FF3811]">Discover More</button>
                        <button className="btn btn-outline text-[#FFFFFF] ">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0  ">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full h-[300px] md:h-[480px] lg:h-[600px] rounded-2xl">
                <img src={banner5} className="w-full  lg:h-[600px] rounded-2xl" />
                <div className="absolute  gap-3 text-white bg-gradient-to-r from-[#151515] to-[rgba(21 , 21, 21 ,0)] h-full ">
                    <div className=" ">
                        {/* for medium and large device */}
                        <h2 className="lg:text-6xl font-bold md:text-4xl   md:mt-[100px] lg:mt-32 ml-14 lg:ml-24 md:block hidden  ">Affordable <br /> Price For Car <br /> Servicing</h2>
                        {/* small device */}
                        <h2 className=" font-bold text-lg mt-4  ml-8  md:hidden ">Affordable Price <br /> For Car Servicing</h2>
                        <p className="  md:text-xl text-sm ml-8 md:ml-14 lg:ml-24 md:mt-7 lg:mt-11 mt-2">There are many variations of passages of  available, But <br /> the majority have suffered alteration in some form</p>
                    </div>
                    <div className="ml-8 md:ml-14 lg:ml-24 mt-2 md:mt-5">
                        <button className="btn btn-outline mr-3 text-[#FFFFFF] bg-[#FF3811]">Discover More</button>
                        <button className="btn btn-outline text-[#FFFFFF] ">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0  ">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full h-[300px] md:h-[480px] lg:h-[600px] rounded-2xl">
                <img src={banner6} className="w-full  lg:h-[600px] rounded-2xl" />
                <div className="absolute  gap-3 text-white bg-gradient-to-r from-[#151515] to-[rgba(21 , 21, 21 ,0)] h-full ">
                    <div className=" ">
                        {/* for medium and large device */}
                        <h2 className="lg:text-6xl font-bold md:text-4xl   md:mt-[100px] lg:mt-32 ml-14 lg:ml-24 md:block hidden  ">Affordable <br /> Price For Car <br /> Servicing</h2>
                        {/* small device */}
                        <h2 className=" font-bold text-lg mt-4  ml-8  md:hidden ">Affordable Price <br /> For Car Servicing</h2>
                        <p className="  md:text-xl text-sm ml-8 md:ml-14 lg:ml-24 md:mt-7 lg:mt-11 mt-2">There are many variations of passages of  available, But <br /> the majority have suffered alteration in some form</p>
                    </div>
                    <div className="ml-8 md:ml-14 lg:ml-24 mt-2 md:mt-5">
                        <button className="btn btn-outline mr-3 text-[#FFFFFF] bg-[#FF3811]">Discover More</button>
                        <button className="btn btn-outline text-[#FFFFFF] ">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0  ">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;