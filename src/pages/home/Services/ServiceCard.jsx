import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const ServiceCard = ({ service }) => {
  const { _id , title, img, price } = service;
  return (
    <div className="card border">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ml-2 font-bold">
        <h2 className="card-title text-[#444444]">{title}</h2>
        <p className="text-[#FF3811]">Price: ${price}</p>
        <div>
         <Link to={`/checkout/${_id}`} className="text-[#f72c03] font-black flex justify-end "><IoIosArrowRoundForward className=""></IoIosArrowRoundForward></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;