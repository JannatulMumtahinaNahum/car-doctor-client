const Booking = ({ booking, handleDelete, handleBookingConfirm }) => {
    // eslint-disable-next-line no-unused-vars
    const { _id, customerName, email, date, service, price, img, status } = booking;
   

    return (
        <div>
            {/* booking*/}
            <tr >
                <th >
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle bg-black text-white btn-sm hover:bg-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td className="">
                    <div className="flex items-center gap-3 md:gap-6 lg:gap-16  md:w-full ">
                        <div className="avatar ">
                            <div className="mask rounded-lg w-[150px] h-[150px]">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{customerName}</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {date}
                    <br />
                    <span className="badge badge-ghost badge-sm">{service}</span>
                </td>
                <td>${price}</td>
                <th>
                    {
                        status === 'confirm' ? <span className="font-bold text-red-600">Confirmed</span> :
                            <button onClick={() => handleBookingConfirm(_id)} className="btn  btn-xs bg-green-600 text-white hover:bg-green-600">Confirm</button>}
                </th>
            </tr>
        </div>
    );  
};

export default Booking;