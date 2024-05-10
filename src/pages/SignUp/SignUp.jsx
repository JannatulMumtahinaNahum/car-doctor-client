import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user)
            })
            .catch(error => console.log(error))

    }

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row lg:gap-10" >
                <div className="text-center w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm text-[#444444]">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-3xl font-bold text-center ">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Full Name</span>
                            </label>
                            <input type="name" name="name" placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email Address</span>
                            </label>
                            <input type="email" name="email" placeholder="Email " className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Confirm Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#FF3811] text-white hover:bg-[#FF3811]" type="submit" value="Sign Up" />
                        </div>
                        <div className="mt-6 text-sm">
                            <p className="text-[#737373] flex justify-center">Already have an account?<Link to="/signIn" className="text-[#FF3811] font-semibold">Sign In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;