import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import PopularClass from './PopularClass/PopularClass';
import AboutUs from './AboutUs/AboutUs';
import TextComponent from './TestComponent/TextComponent';
import PopularInstractor from './PopularInstractor/PopularInstractor';
import { useHeader } from '../../Hooks/useTitile';

const Home = () => {
    useHeader("Home - Art in motion")
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