import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='footer '>
            <div className='container footer-dev'>
                <div className='footer-dev2'>
                    <p>footer</p>
                </div>

                <div className='footer-dev2'>
                    <p>footer</p>
                </div>

                <div className='footer-dev2'>
                    <p>footer</p>
                </div>

                <div className='footer-dev2'>
                    <p>footer</p>
                </div>
            </div>
            <div className='container'>
                 <p>  . Copyright&copy;{year}</p>
            </div>
        </div>
    );
};

export default Footer;