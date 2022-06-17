import React from 'react';
import Banner from '../Banner/Banner';
import Founder from '../Founder/Founder';
import HeadingNews from '../HeadingNews/HeadingNews';
import HmEventNotices from '../HmEvent&Notices/HmEvent&Notices';
import MuusmCount from '../MuusmCount/MuusmCount';
import NewsAchievements from '../NewsAchievements/NewsAchievements';
import OurCampus from '../OurCampus/OurCampus';
import Principal from '../Principal/Principal';
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';

const Home = () => {
    return (
        <div>
     {/*  <HeadingNews/> */}
            <Banner/>
            <Founder/>
            <Principal/>
            <MuusmCount/>
            <WelcomeMessage/>
            <HmEventNotices/>
            <OurCampus/>
            <NewsAchievements/>
        </div>
    );
};

export default Home;