import { Link, useLoaderData } from "react-router-dom";
import checkout from "../../assets/images/checkout/checkout.png";



const Checkout = () => {
    const service = useLoaderData();
    // eslint-disable-next-line no-unused-vars
    const { title, _id, price , img} = service;


    const handleBookService = e => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const secondName = form.secondName.value;
        const email = form.email.value;
        const date = form.date.value;
        const number = form.number.value;
     
        const booking = {
            customerName: firstName + secondName,  email, img,  date, number,  price: price ,service:title , service_id: _id
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings' , {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking )
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('service booked successfully')
            }
        })
    }


    return (

        <div className="">
            <div className="mb-9 hero rounded-2xl p-1">
                <img src={checkout} alt="" className=" bg-gradient-to-r from-[#151515] to-[rgba(21 , 21, 21 ,0)] rounded-2xl md:h-full h-[160px]" />
                <Link to="/" className=" flex bg-[#5f261b] mt-auto p-2 mb-2 rounded-2xl mr-auto ml-4 text-white"><button>Home/Checkout</button></Link>

            </div>


            {/*  */}
            <div className=" p-1 lg:p-0">

                <h1 className="text-center mt-6 mb-2 font-bold ">Welcome to Car Service Center! </h1>
                <h2 className="text-center  mb-4 font-bold">Booking your car service appointment is quick and easy. Follow these simple steps to schedule  <br /> your service: --&gt; <span className="text-red-600">This is {title} service center</span></h2>

                <div className="card shrink-0 w-full  md:p-16 bg-[#F3F3F3] mb-9 ">
                   <form onSubmit={handleBookService} className="card-body">
                   <div className="flex justify-between">
                   <div className="form-control">
                        <label className="label">         
                        </label>
                        <input type="text" defaultValue={'$'+ price} className="input input-bordered w-[80px]" />
                    </div>

                    <div className="flex mt-4  "> 
                        <input type="datetime-local" name="date" id="" className="rounded-lg h-[48px] p-1 md:p-2  w-[180px] md:w-[200px]" />
                    </div>
                    </div>
                    
                   
                        <div className="lg:flex lg:gap-5">
                            <div className="form-control lg:w-full ">
                                <label className="label">

                                </label>
                                <input type="name" placeholder="First Name"   name="firstName" className="input input-bordered" required />
                            </div>
                            <div className="form-control lg:w-full">
                                <label className="label">

                                </label>
                                <input type="name" placeholder="Last Name"  name="secondName" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="lg:flex lg:gap-9">
                            <div className="form-control lg:w-full">
                                <label className="label">

                                </label>
                                <input type="number" placeholder="Phone Number" name="number" className="input input-bordered" required />
                            </div>
                            <div className="form-control lg:w-full">
                                <label className="label">

                                </label>
                                <input type="email" placeholder="Email Address"  name="email" className="input input-bordered" required />
                            </div>
                        </div>
                      
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white hover:bg-[#FF3811] font-semibold">Order Confirm</button>
                        </div>
                    </form>
                </div>
                  
            </div>

        </div>

    );
};

export default Checkout;