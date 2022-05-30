import React from 'react';
import Banner from '../Banner/Banner';
import Founder from '../Founder/Founder';
import HeadingNews from '../HeadingNews/HeadingNews';
import OurCampus from '../OurCampus/OurCampus';
import Principal from '../Principal/Principal';

const Home = () => {
    return (
        <div>
            <HeadingNews/>
            <Banner/>
            <Founder/>
            <Principal/>
            <OurCampus/>
        </div>
    );
};

export default Home;