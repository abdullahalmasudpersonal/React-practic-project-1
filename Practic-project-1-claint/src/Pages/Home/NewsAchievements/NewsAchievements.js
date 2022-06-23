import React from 'react';
import './NewsAchievements.css';

const NewsAchievements = () => {
    return (
        <div className='newsachievements'>
            <div>
                <div className='p-2 newshead'>
                   <h4 style={{color: 'rgb(35, 55, 28)'}} className='fw-bold'>News & Events</h4>
                     <h4 style={{color: '#2E2E2E'}}  className='fw-bold'>View all</h4> 
                </div>
                <div className='newsevents'>
                    <div className='newseventsdev'>
                    </div>

                    <div className='newseventsdev'>
                    </div>
                </div>
            </div>
            <div className='achievements'>
                <div className='text-center achievementshead p-2'>
                    <h4 style={{color: '#4E545C'}}  className='fw-bold'>Students Achievements</h4>
                </div>
                <div className='achievementsdev'>

                <button className='achiv-btn p-2 fw-bold'>View all</button>
                </div>
            </div>
        </div>
    );
};

export default NewsAchievements;