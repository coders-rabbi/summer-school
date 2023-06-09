import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import PopularClass from './PopularClass/PopularClass';
import AboutUs from './AboutUs/AboutUs';
import TextComponent from './TestComponent/TextComponent';
import PopularInstractor from './PopularInstractor/PopularInstractor';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <PopularClass></PopularClass>
            <AboutUs></AboutUs>
            <PopularInstractor></PopularInstractor>
            {/* <TextComponent></TextComponent> */}
        </div>
    );
};

export default Home;