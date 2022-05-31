import React from 'react';

const Register = () => {
    const submit= {
 
    }
    return (
        <div className='container'>
            <h5>Register</h5>
            <div>
                <from onSubmit={submit}>
                    <input type='text' />
                    <input type='password' />
                    <input type='submit' value='submit' />
                </from>
            </div>
        </div>
    );
};

export default Register;