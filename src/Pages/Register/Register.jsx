import { Link, useNavigate } from "react-router-dom";
import registerImage from "../../assets/login/login.svg"
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { createUser, updateUserProfile, googleSingIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const userDetails = { name, email, password, photo }


        createUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                updateUserProfile(name, photo)
                toast("Your account create Successfuly!");
                form.reset();
                navigate('/')
            })
            .catch(Error => {
                toast(Error.message);
            })
    }




    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row justify-center">
                <div className="text-center lg:text-left w-1/2">
                    <img src={registerImage} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <h1 className='text-center text-4xl font-bold mt-10'>Login</h1>
                    <form onSubmit={handleRegister}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link>Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#FF3811]"><input type="submit" value="Register" /></button>
                            </div>
                        </div>
                    </form>
                    <div className='mx-auto flex gap-6 mb-4'>
                        <button onClick={googleSingIn} className="btn btn-circle text-3xl"><FaGoogle /></button>
                        <button className="btn btn-circle text-3xl"><FaGithub /></button>
                    </div>
                    <div className='text-center mb-7'>
                        <p>Already Have an Account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;