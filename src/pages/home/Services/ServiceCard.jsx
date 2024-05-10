
const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card border">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ml-2 font-bold">
        <h2 className="card-title text-[#444444]">{title}</h2>
        <p className="text-[#FF3811]">Price: ${price}</p>

      </div>
    </div>
  );
};

export default ServiceCard;