import React from 'react';
import { Link } from 'react-router-dom';
import NoticeDetails from './NoticeDetails/NoticeDetails';
import './Notics.css';

const Notics = () => {
    return (
        <div className='container'>
            <h5>Notics</h5>
          <Link to='/notice-details' target="_blank">
          <button>Notice Details</button>
          </Link>
        </div>
    );
};

export default Notics;