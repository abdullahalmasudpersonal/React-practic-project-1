import React from 'react';
import './HmEvent&Notices.css';

const HmEventNotices = () => {
    return (
        <div className='hmeventbg'>
            <div className='container eventNotice'>
                <div className='events'>
                    <div>
                        <h2 className='text-center pt-0 p-5 fw-bold'>Recent and Upcoming Events <div className='event-hr' /></h2>
                        
                        <div className='event-dev'>
                            <div className='event-dev1'>

                            </div>
                            <div className='event-dev1'>

                            </div>
                        </div>
                        <div className='event-btn'>
                            <button >View All Events</button>
                        </div>
                    </div>
                </div>
                <div className='notices'>
                    <h2 className='text-center pt-0 p-5 fw-bold'>Notices <div className='event-hr' /></h2>
                    <div className='notices-dev'>

                    </div>
                    <div className='notices-btn'>
                        <button>View All Notices</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HmEventNotices;