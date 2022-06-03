import React from 'react';
import './Footer.css';
import logo from '../../../Image/Logo/logo3.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='footer '>
            <div className='container footer-dev'>
                <div className='footer-dev2'>
                    <p>Importent Link</p>
                </div>

                <div className='footer-dev2'>
                    <p>footer</p>
                </div>

                <div className='footer-dev2'>
                    <p>footer</p>
                </div>

                <div className='footer-dev2'>
                    <img src={logo} alt='' />
                    <p className='m-0 d-block text-center'>Baridhara, Radhanagor</p>
                    <p className='m-0 d-block text-center'>Bhandaria, pirojpur</p>
                    <p className='m-0 d-block text-center'>Phone: +880-1717420439</p>
                    <p className='m-0 d-block text-center'>Email: mafsir58@gmail.com</p>
                </div>
            </div>
                <div className='footer-copyright'>
                    <div className='container footer-buttom'>
                    <p>&copy; {year} Mafsar Ul Ulum Sinior Madrasah.  All Rights Reserved.  Design, Development and Maintenance by <span>Abdullah al masud</span></p>
                    </div>
                </div>
        </div>
    );
};

export default Footer;