import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../Image/Logo/logo3.png';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {



    return (
        <div className='register-bg'>
            <div className='container register p-5'>
                <div className='register-dev'>
                    <div className='register-logo'>
                        <img src={logo} alt='' />
                    </div>
                    <h3 className='fw-bold text-center'>Register</h3>

                    <div className='form-dev'>
                        <form>
                            <input type='' placeholder='Name' name='' /> <br />
                            <input type='' placeholder='Email' name='' /> <br />
                            <input type='' placeholder='Password' name='' /> <br />
                            <input type='checkbox' name='terms' id='terms' />
                            <label  htmlFor='terms'> Accept Terms and Conditions </label>
                            <br />
                            <input className='fw-bold submit' type='submit' name='' value='Register' />
                        </form>
                    </div>
                    <div className='or'>
                        <hr className='' /><span className='text-light'>OR</span><hr />
                    </div>
                    <div>
                        <SocialLogin/>
                    </div>
                    <p className='text-center text-light'>Alrady have an account?<Link to='/login' className='text-info pe-auto text-decoration-none'>Please Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;

































/* 


const Register = () => {

   const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const [agree, setAgree] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
     //   const agree = event.target.terms.checked;
        if(agree){
            createUserWithEmailAndPassword(email, password);
        } 
    }

    if(user){
        navigate('/');
    }
 

    return (
        <div className='container'>
            <h5>Register</h5>
            <div className='register mx-auto w-50'>

                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name='name' placeholder="Enter name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" t controlId="formBasicPassword">
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" className={agree ? 'text-primary':'text-danger' } onClick={()=> setAgree(!agree)} name='terms' id='terms' label="Accept terms and conditions" />
                    </Form.Group>

                    <Button  disabled={!agree} variant="primary" type="register">
                        Submit
                    </Button>

                </Form>
            </div>
        </div>
    );
};


*/