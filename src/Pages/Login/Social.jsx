import { useContext } from "react";
import { FaGithub, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Social = () => {
    const { googleSingIn } = useContext(AuthContext)


    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSingIn = () => {
        googleSingIn()
            .then(async (result) => {
                const loggedUser = result.user;
                const userInfo = { userName: loggedUser.displayName, userEmail: loggedUser.email, roll: "student" }
                console.log(userInfo);

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })
            })

    }

    return (
        <div>
            <div className='mx-auto flex gap-6 mb-4 justify-center'>
                <button onClick={handleGoogleSingIn} className="btn btn-circle text-3xl"><FaGoogle /></button>
                <button className="btn btn-circle text-3xl"><FaGithub /></button>
            </div>
        </div>
    );
};

export default Social;