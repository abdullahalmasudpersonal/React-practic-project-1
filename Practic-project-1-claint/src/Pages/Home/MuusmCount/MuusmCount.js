import React from 'react';
import './MuusmCount.css';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MuusmCount = () => {
    return (
        <div>
            <div className='count-heading'>
                <h2 className='fw-bold'>MUUSM OF NUMBERS</h2>
            </div>
            <div className='muusm-count-bg' id='counter'>
                <div className='container muusmcount'>
                    <div className='muus-count-dev'>
                        <div>
                            <i style={{ color: 'rgb(255, 196, 0)' }} class="fa-solid fa-building-columns founded"></i>
                            <h1 className='fw-bold text-center mt-2 mb-0'><CountUp end={1995} /></h1>
                            <h4 className='fw-bold text-center'>Founded</h4>
                        </div>
                    </div>
                    <div className='muus-count-dev'>
                        <div>
                            <i style={{ color: 'rgb(255, 196, 0)' }} class="fa-solid fa-user-shield teachers "></i>
                            <h1 className='fw-bold text-center mt-2 mb-0'><CountUp end={19} /><span>+</span></h1>
                            <h4 className='fw-bold text-center'>Teachers</h4>
                        </div>
                    </div>
                    <div className='muus-count-dev'>
                        <div>
                            <i style={{ color: 'rgb(255, 196, 0)' }} class="fa-solid fa-users students"></i>
                            <h1 className='fw-bold text-center mt-2 mb-0'><CountUp end={400} /><span>+</span></h1>
                            <h4 className='fw-bold text-center'>Students</h4>
                        </div>
                    </div>
                    <div className='muus-count-dev'>
                        <div>
                            <i style={{ color: 'rgb(255, 196, 0)' }} class="fas fa-medal re-award"></i>
                            <h1 className='fw-bold text-center mt-2 mb-0'><CountUp end={17} /><span>+</span></h1>
                            <h4 className='fw-bold text-center'>Award</h4>
                        </div>
                    </div>
                </div>
                <FontAwesomeIcon icon="fa-brands fa-youtube" />
            </div>
        </div>
    );
};

export default MuusmCount;