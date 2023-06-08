import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import PopularClass from './PopularClass/PopularClass';
import AboutUs from './AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <PopularClass></PopularClass>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;