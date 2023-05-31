import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, } from "react-icons/fa";
import Swal from 'sweetalert2';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {

        googleSignIn()
            .then((result) => {
                Swal.fire({
                    title: 'Successfully Loge in',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
            <div className="rounded-full text-center">
                <Link><button onClick={handleGoogleSignIn} className='googleBtn primaryBtn'><FaGoogle /> </button></Link>
            </div>
        </div>
    );
};

export default SocialLogin;