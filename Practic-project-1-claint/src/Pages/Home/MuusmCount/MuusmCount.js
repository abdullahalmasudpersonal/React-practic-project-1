import React from 'react';
import './MuusmCount.css';
import CountUp from 'react-countup';
import founded from '../../../Image/NumberCounter/university-solid.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MuusmCount = () => {
    return (
        <div className='muusm-count-bg'>
            <div className='container muusmcount'>
                {/* <h5>MUUSM OF NUMBERS</h5> */}


                <div className='muus-count-dev'>
                   <div>
                     <i  style={{color:'yellow'}} class="fa-solid fa-building-columns"></i>

                   <h1 className='fw-bold'><CountUp end={19} /></h1>
                    <h4 className='fw-bold'>Founded</h4>
                   </div>
                </div>
                <div className='muus-count-dev'>
                    <h1 className='fw-bold'><CountUp end={19} /></h1><br />
                    <h4 className='fw-bold'>Teachers</h4>
                </div>
                <div className='muus-count-dev'>
                    <h1 className='fw-bold'><CountUp end={19} /></h1><br />
                    <h4 className='fw-bold'>Students</h4>
                </div>
                <div className='muus-count-dev'>
                    <h1 className='fw-bold'><CountUp end={19} /></h1>
                    <h4 className='fw-bold'>Awared</h4>
                </div>
            </div>
            <FontAwesomeIcon icon="fa-brands fa-youtube" />
        </div>
    );
};

export default MuusmCount;