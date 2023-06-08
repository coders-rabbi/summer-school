
import loginPhoto from "../../assets/login/login.png";
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [visible, setVisible] = useState(false);
    const { signIn, googleSingIn } = useContext(AuthContext);


    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const loggedUser = { email: email, password: password }

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                toast("Logged In Successfuly!");
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast(error.message);
            })
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row justify-center">
                    <div className="text-center lg:text-left w-1/2">
                        <img className="hidden md:block h-[500px]" src={loginPhoto} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <h1 className='text-center text-4xl font-bold mt-16'>Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className="flex items-center">
                                        <input
                                            type={visible ? 'text' : 'password'}
                                            name='password'
                                            placeholder="password" className="input input-bordered flex-1" />
                                        <div onClick={() => setVisible(!visible)} className="absolute right-11">
                                            {
                                                visible ? <FaEye /> : <FaEyeSlash />
                                            }
                                        </div>
                                    </div>
                                    <label className="label">
                                        <Link>Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#FF3811]"><input type="submit" value="Login" /></button>
                                </div>
                            </div>
                        </form>
                        <div className='mx-auto flex gap-6 mb-4'>
                            <button onClick={googleSingIn} className="btn btn-circle text-3xl"><FaGoogle /></button>
                            <button className="btn btn-circle text-3xl"><FaGithub /></button>
                        </div>
                        <div className='text-center mb-7'>
                            <p>New to Art In Motion ? <Link to="/register">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;