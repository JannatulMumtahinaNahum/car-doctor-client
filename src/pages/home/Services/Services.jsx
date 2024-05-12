import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services , setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    } , [])

    return (
        <div className="mt-8">
            <div className="text-center"> 
                <h3 className="text-[#FF3811] font-bold">Services</h3>
                <h1 className="text-[#151515] font-bold mt-3 mb-4 text-5xl">Our Service Area</h1>
                <p className="text-[#737373]"> The majority have suffered alteration in some form, by injected humour, or randomised <br />words which do not look even slightly believable. </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-2 lg:px-0 mb-6 mt-8">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;