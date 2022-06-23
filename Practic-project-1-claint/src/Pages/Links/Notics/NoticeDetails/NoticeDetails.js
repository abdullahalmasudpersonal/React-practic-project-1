import React from 'react';
import './NoticeDetails.css';

const NoticeDetails = () => {
    return (
        <div className='container notices-details'>

            <div className='notice-detail'>
                <h4>Notice Headline</h4>
                <img src='https://ssl.du.ac.bd/public/images/1_1655721639.jpg' alt='' height='980px' width='800px' />
            </div>

            <div className='notice-detail-notices'>
                <h3 className='text-center p-3 notices-head'>Notices</h3>
                <button className='d-p-notice-btn'>View All</button>
            </div>
        </div>
    );
};

export default NoticeDetails;