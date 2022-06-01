import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Image/Logo/logo3.png';
import SocialLogin from '../SocialLogin/SocialLogin';

import './Login.css';

const Login = () => {


    return (
        <div className='login-bg'>
            <div className='container login p-5'>
                <div className='login-dev '>
                    <div className='login-logo'>
                        <img src={logo} alt='' />
                    </div>
                    <h3 className='fw-bold text-center'>Login</h3>

                    <div className='form-dev'>
                        <form>
                            <input type='' placeholder='Email' name='' /> <br />
                            <input type='' placeholder='Password' name='' /> <br />
                            <p className='mb-0 forget-btn text-light'><span>Froget password</span></p>
                            <input className='fw-bold submit' type='submit' name='' value='login' />
                        </form>
                    </div>
                    <div className='or'>
                        <hr className='' /><span className='text-light'>OR</span><hr />
                    </div>
                    <div>
                        <SocialLogin />
                    </div>
                    <p className='text-center text-light'>New to MUUSM? <Link to='/register' className='text-info pe-auto text-decoration-none'>Please Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;




























/* 
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const emailRef = useRef('');
    const passwordRef = useRef('');

    if (user) {
        navigate(from, { replace: true });
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='container'>
            <h5>Login</h5>

            <div>
                <form onSubmit={handleLogin}>
                    <input ref={emailRef} name='email' type='email' placeholder='email' />
                    <input ref={passwordRef} name='password' type='password' placeholder='password' />
                    <input type='submit' value='login' />
                </form>
            </div>
        </div>
    );
};
*/