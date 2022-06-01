import React from 'react';
import Google from '../../../Image/SocialLogin/google-logo3.png';

const SocialLogin = () => {
    return (
        <div>
            <button
                style={{ background: 'rgb(255, 154, 2)', width: '240px', border: 'none' }} className='btn  mx-auto d-block my-3'>
                <img style={{ width: '28px' }} src={Google} alt='' />
                <span className='px-1'>Continue with Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;