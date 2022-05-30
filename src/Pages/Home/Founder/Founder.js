import React from 'react';
import './Founder.css';
import founder from '../../../Image/Founder/M. A. Khalak.jpg';

const Founder = () => {
    return (
        <div className='container founder'>
            <div className='founder-dev'>

                <div className='founder-img'>
                     <div>
                     <img width='230px' src={founder} alt=''/>
                     <h5 className='mt-1 mb-0 fw-bold text-center'>M. A. Khalak</h5>
                     <p className='m-0 fw-bold text-center'>founder</p>
                     </div>
                </div>
                
                <div className='founder-word'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
            </div>
        </div>
    );
};

export default Founder;