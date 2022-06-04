import React from 'react';
import Banner from '../Banner/Banner';
import Founder from '../Founder/Founder';
import HeadingNews from '../HeadingNews/HeadingNews';
import MuusmCount from '../MuusmCount/MuusmCount';
import OurCampus from '../OurCampus/OurCampus';
import Principal from '../Principal/Principal';

const Home = () => {
    return (
        <div>
            <HeadingNews/>
            <Banner/>
            <Founder/>
            <Principal/>
            <MuusmCount/>
            <OurCampus/>
        </div>
    );
};

export default Home;