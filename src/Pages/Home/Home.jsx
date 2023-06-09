import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import PopularClass from './PopularClass/PopularClass';
import AboutUs from './AboutUs/AboutUs';
import TextComponent from './TestComponent/TextComponent';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <PopularClass></PopularClass>
            <AboutUs></AboutUs>
            <TextComponent></TextComponent>
        </div>
    );
};

export default Home;