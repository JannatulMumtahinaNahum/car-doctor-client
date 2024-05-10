import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
    return (
        <div className="hero mt-7">
        <div className="hero-content flex-col lg:flex-row">
            <div className='lg:w-1/2 relative  flex justify-center '>
                <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
            </div>
            <div className='lg:w-1/2 mt-8 space-y-5 p-4'>
                <h3 className=' text-[#FF3811] font-bold'>About Us</h3>
                <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            <button className="btn bg-[#FF3811] text-[#FFFFFF] hover:text-black">Get More Info</button>
            </div>
        </div>
    </div>
    );
};

export default About;