import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Booking from "./Booking";
import axios from "axios";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
   

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
       
        axios.get(url , {withCredentials : true})
        .then(res => {
            setBookings(res.data)
        })
    }, [url ]);


    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }
  
    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }



    return (
        <div className="">
            <div className="text-center">
                <h1 className="mt-9 font-semibold text-green-800 text-center mb-1"> Thanks for Choosing Us!: Indicates that orders are being handled <br /> and thanks the customer for their choice. You ordered---&gt; <span className="text-red-500">{bookings.length}</span> services</h1>
                <p className="mb-4 text-red-600 font-bold text-center">----------------------------------------------------------------</p>
            </div>
            <div className="">
                <table className="table ">
                    {/* head */}
                    <thead className="">
                        <tr> </tr>
                    </thead>
                    <tbody className="">

                        {
                            bookings.map(booking => <Booking key={booking._id} booking={booking} handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}></Booking>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

 export default Bookings;