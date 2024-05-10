import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row lg:gap-10" >
                <div className="text-center w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm text-[#444444]">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl font-bold text-center ">Sign In</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email Address</span>
                            </label>
                            <input type="email" name="email" placeholder="Email address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Confirm Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#FF3811] text-white hover:bg-[#FF3811]" type="submit" value="Sign In" />
                        </div>
                        <div className="mt-6 text-sm">
                            <p className="text-[#737373] flex justify-center">Don't have an account?<Link to="/signUp" className="text-[#FF3811] font-semibold">Sign up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;